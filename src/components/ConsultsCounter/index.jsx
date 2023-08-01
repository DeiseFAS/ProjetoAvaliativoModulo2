import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as C from './styles'

import { FaCalendarCheck } from 'react-icons/fa';

const ConsultsCounter = () => {
  const [consultsCount, setConsultsCount] = useState(0);

  useEffect(() => {
    const fetchConsults = async () => {
      try {
        const response = await axios.get('http://localhost:3000/consults');
        const consultsData = response.data;
        setConsultsCount(consultsData.length);
      } catch (error) {
        console.error('Erro ao obter dados das consultas:', error);
      }
    };

    fetchConsults();
  }, []);

  return (
    <C.Card>
      <div>
      <h2>
        <FaCalendarCheck/>
        {consultsCount}</h2>
      </div>
      <p>Consultas</p>
    </C.Card>
  );
};

export default ConsultsCounter;
