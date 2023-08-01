import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './styles.css'

const ExamsForm = () => {
  const [patients, setPatients] = useState([]);
  const [filteredPatients, setFilteredPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [exams, setExams] = useState([]);
  const [examData, setExamData] = useState({
    name: '',
    date: '',
    time: '',
    type: '',
    laboratory: '',
    documentUrl: '',
    results: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchPatients();
    fetchExams();
  }, []);

  const fetchPatients = async () => {
    try {
      const response = await axios.get('http://localhost:3000/patients');
      setPatients(response.data);
      setFilteredPatients(response.data);
    } catch (error) {
      console.error('Erro ao obter dados dos pacientes:', error);
    }
  };

  const fetchExams = async () => {
    try {
      const response = await axios.get('http://localhost:3000/exams');
      setExams(response.data);
    } catch (error) {
      console.error('Erro ao obter dados dos exames:', error);
    }
  };

  const handleSearchChange = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredPatients = patients.filter(
      (patient) =>
      patient.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.id.toString().includes(searchTerm)
    );
    setFilteredPatients(filteredPatients); // atualiza a lista de pacientes filtrados
    setSelectedPatient(filteredPatients[0] || null); // seleciona o primeiro paciente filtrado (ou null se nenhum for encontrado)
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setExamData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      setIsSaving(true);

      const examToAdd = {
        ...examData,
        patientId: selectedPatient.id,
        
      };

      await axios.post('http://localhost:3000/exams', examToAdd);
      setExamData({
        name: '',
        date: '',
        time: '',
        type: '',
        laboratory: '',
        documentUrl: '',
        results: '',
      });

      toast.success('Exame cadastrado com sucesso!', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000, 
        hideProgressBar: true, 
      });
      console.log('Exame cadastrado com sucesso!');
      setIsModalOpen(false);
    } catch (error) {
      toast.error('Erro ao cadastrar o exame!', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
        hideProgressBar: true,
      });
      console.error('Erro ao cadastrar o exame:', error);
      
    }
    setTimeout(() => {
      setIsSaving(false);
    }, 2000);
    // }
  };

   const handleSelectModal = (patient) => {
    setSelectedPatient(patient);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedPatient(null)
    setIsModalOpen(false);
  };

  return (
    <section className='exam-form'>
      
      <div className='patient-search'>
        <label htmlFor="search">Buscar o Paciente para cadastrar o exame:</label>
        <input
          type="text"
          id="search"
          onChange={handleSearchChange}
          placeholder="Digite o registro ou o nome do paciente"
        />
      </div>
      <ul>
        {filteredPatients.map((patient) => (
          <li key={patient.id}>
          <p className='register-user'>
            <strong>Registro:</strong> {patient.id}
          </p>
          <p className='register-name'>
            <strong>Nome:</strong> {patient.fullName}
          </p>
          <p className="register-healthInsurance">
            <strong>Convênio:</strong> {patient.healthInsurance}
          </p>
          <p className='link-details'>
            <button
              className='select-button'
              onClick={() => handleSelectModal(patient)}
            >
              Selecionar
            </button>
          </p>
        </li>
        ))}
      </ul>

      {selectedPatient && (
        <div className={`modal ${isModalOpen ? 'open' : ''}`}>
        <div className='modal-content'>
          <div className='close-button-form'>
            <button onClick={handleCloseModal}>X</button>
          </div>
        <section>
            <h3>Informações do Paciente</h3>
            <p>Nome: {selectedPatient.fullName}</p>
            <p>Email: {selectedPatient.email}</p>
            <p>Telefone: {selectedPatient.phone}</p>

          <h2>Cadastrar Exame para {selectedPatient.fullName}</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Nome do Exame:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={examData.name}
                onChange={handleInputChange}
                required
                minLength={5}
                maxLength={50}
              />
            </div>
            <div>
              <label htmlFor="date">Data do Exame:</label>
              <input
                type="date"
                id="date"
                name="date"
                value={examData.date}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="time">Horário do Exame:</label>
              <input
                type="time"
                id="time"
                name="time"
                value={examData.time}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="type">Tipo do Exame:</label>
              <input
                type="text"
                id="type"
                name="type"
                value={examData.type}
                onChange={handleInputChange}
                required
                minLength={5}
                maxLength={30}
              />
            </div>
            <div>
              <label htmlFor="laboratory">Laboratório:</label>
              <input
                type="text"
                id="laboratory"
                name="laboratory"
                value={examData.laboratory}
                onChange={handleInputChange}
                required
                minLength={5}
                maxLength={30}
              />
            </div>
            <div>
              <label htmlFor="documentUrl">URL do Documento:</label>
              <input
                type="text"
                id="documentUrl"
                name="documentUrl"
                value={examData.documentUrl}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="results">Resultados:</label>
              <textarea
                id="results"
                name="results"
                value={examData.results}
                onChange={handleInputChange}
                required
                minLength={15}
                maxLength={1000}
              />
            </div>
            <button type="submit" disabled={isSaving}>
              {isSaving ? 'Salvando...' : 'Salvar'}
            </button>
            <button type="button" disabled>
              Editar
            </button>
            <button type="button" disabled>
              Deletar
            </button>
          </form>
        </section>
        </div>
        </div>
      )}
      <ToastContainer />
    </section>
  );
};

export default ExamsForm;
