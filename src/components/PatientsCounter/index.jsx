import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as C from './styles'

import { FaHospitalUser } from 'react-icons/fa';

const PatientsCounter = () => {
  const [patientCount, setPatientCount] = useState(0);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.get('http://localhost:3000/patients');
        const patientsData = response.data;
        setPatientCount(patientsData.length);
      } catch (error) {
        console.error('Erro ao obter dados dos pacientes:', error);
      }
    };

    fetchPatients();
  }, []);

  return (
    <C.Card>
      <div>
      <h2>
        <FaHospitalUser/>
        {patientCount}</h2>
      </div>
      <p>Pacientes</p>
    </C.Card>
  );
};

export default PatientsCounter;
