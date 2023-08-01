import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './styles.css'

const MedicalRecordList = () => {
  const [patients, setPatients] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.get('http://localhost:3000/patients');
        setPatients(response.data);
      } catch (error) {
        console.error('Erro ao obter dados dos pacientes:', error);
      }
    };

    fetchPatients();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPatients = patients.filter((patient) => {
    return (
      patient.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.id.toString().includes(searchTerm)
    );
  });

  return (
    <section className="medical-record-list">
      
      <div className="patient-search">
        <label htmlFor="search">Buscar Paciente:</label>
        <input
          type="text"
          id="search"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Digite o nome ou identificador"
        />
      </div>
      <ul>
        {filteredPatients.map((patient) => ( 
          <li key={patient.id}>
            <p className="register-user"><strong>Registro:</strong> {patient.id}</p> 
            <p className="register-name"><strong>Nome:</strong> {patient.fullName}</p> 
            <p className='register-healthInsurance'><strong>Convênio:</strong> {patient.healthInsurance}</p> 
            <p className="link-details"><Link to={`/paciente/${patient.id}`}>Ver detalhes</Link></p>
            
          </li>
        ))}
      </ul>

    </section>
  );
};

export default MedicalRecordList;
