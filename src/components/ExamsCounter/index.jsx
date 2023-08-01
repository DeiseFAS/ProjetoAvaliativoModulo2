import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as C from './styles'

import { FaCalendarPlus } from 'react-icons/fa';

const ExamsCounter = () => {
  const [examsCount, setExamsCount] = useState(0);

  useEffect(() => {
    const fetchExams = async () => {
      try {
        const response = await axios.get('http://localhost:3000/exams');
        const examsData = response.data;
        setExamsCount(examsData.length);
      } catch (error) {
        console.error('Erro ao obter dados dos exames:', error);
      }
    };

    fetchExams();
  }, []);

  return (
    <C.Card>
      <div>
      <h2>
        <FaCalendarPlus/>
        {examsCount}</h2>
      </div>
      <p>Exames</p>
    </C.Card>
  );
};

export default ExamsCounter;
