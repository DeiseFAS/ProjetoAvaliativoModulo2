import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { FaUserAlt } from 'react-icons/fa';

import { Link } from 'react-router-dom';

import './styles.css'

const PatientsList = () => {
  const [patients, setPatients] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [ages, setAges] = useState({});

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.get('http://localhost:3000/patients');
        const patientsData = response.data;
        calculateAge(patientsData.birthdate);
        setPatients(patientsData);

        // Calcula a idade para cada paciente individualmente e armazena no estado ages
        const calculatedAges = {};
        patientsData.forEach((patient) => {
          calculatedAges[patient.id] = calculateAge(patient.birthdate);
        });
        setAges(calculatedAges);


      } catch (error) {
        console.error('Erro ao obter dados dos pacientes:', error);
      }
    };

    fetchPatients();
  }, []);

  const calculateAge = (birthdate) => {
    const today = new Date();
    const birthdateDate = new Date(birthdate);
    let age = today.getFullYear() - birthdateDate.getFullYear();
    const monthDiff = today.getMonth() - birthdateDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdateDate.getDate())) {
      age--;
    }
    return age; // Retorna a idade em vez de usar setAge
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPatients = patients.filter((patient) => {
    return (
      patient.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.phone.includes(searchTerm)
    );
  });

  return (
    <div>
      <h2>Informações Rápidas de Pacientes</h2>
      <div className="patient-search">
        <label htmlFor="search">Buscar Paciente:</label>
        <input
          type="text"
          id="search"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Digite o nome, email ou telefone do Paciente"
        />
      </div>
      <ul>
        {filteredPatients.map((patient) => (
          <li key={patient.id}>
           <p className="photo"><FaUserAlt/></p>
            <strong>Nome:</strong> {patient.fullName} <br />
            <strong>Email:</strong> {patient.email} <br />
            <strong>Telefone:</strong> {patient.phone}<br/>
            <p><strong>Idade:</strong> {ages[patient.id]} anos</p>
            <p><strong>Plano:</strong> {patient.healthInsurance}</p>
            <Link to={`/paciente/${patient.id}`}>Ver detalhes</Link>
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientsList;
