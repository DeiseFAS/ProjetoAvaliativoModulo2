import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './styles.css'

const ConsultationForm = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [patients, setPatients] = useState([])
  const [selectedPatient, setSelectedPatient] = useState(null)
  const [formData, setFormData] = useState({
    reason: '',
    date: '',
    time: '',
    description: '',
    medication: '',
    dosagePrecautions: ''
  })
  const [isEditing, setIsEditing] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  //const [showPatients, setShowPatients] = useState(true) // Variável para controlar a exibição dos pacientes
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleSelectModal = patient => {
    setSelectedPatient(patient)
    setIsModalOpen(true)
  }

  // fechar o modal
  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

 

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.get('http://localhost:3000/patients')
        setPatients(response.data)
      } catch (error) {
        console.error('Erro ao obter dados dos pacientes:', error)
      }
    }

    fetchPatients()

   
  }, [])

  const handleSearchChange = event => {
    setSearchTerm(event.target.value)
  }

  const filteredPatients = patients.filter(patient => {
    return (
      patient.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.id.toString().includes(searchTerm)
    )
  })

  const handleInputChange = event => {
    const { name, value } = event.target
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }))
  }

  const handleSubmit = async event => {
    event.preventDefault()
    
    try {
      // salva consulta no backend
      setIsSaving(true)

      // dados a serem enviados para o backend
      const dataToSave = {
        patientId: selectedPatient.id,
        reason: formData.reason,
        date: formData.date,
        time: formData.time,
        description: formData.description,
        medication: formData.medication,
        dosagePrecautions: formData.dosagePrecautions
      }

      await axios.post('http://localhost:3000/consults', dataToSave)

      setTimeout(() => {
        setIsSaving(false)
        // limpa o formulário após salvar
        resetForm()
      }, 2000)

      toast.success('Consulta cadastrada com sucesso!', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000, 
        hideProgressBar: true, 
      });

    } catch (error) {
      toast.error('Erro ao cadastrar a consulta!', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
        hideProgressBar: true,
      });

      console.error('Erro ao salvar os dados:', error)
    }
    // }
  }

  const resetForm = () => {
    setFormData({
      reason: '',
      date: '',
      time: '',
      description: '',
      medication: '',
      dosagePrecautions: ''
    })
    setSelectedPatient(null)
  }

  return (
    <section className='consultation-form'>
      <div className='patient-search'>
        <label htmlFor='search'>
          Busque o Paciente para cadastrar a consulta:
        </label>
        <input
          type='text'
          id='search'
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder='Digite o registro ou o nome do paciente'
        />
      </div>
      <ul>
        {filteredPatients.map(patient => (
          <li key={patient.id}>
            <p className='register-user'>
              <strong>Registro:</strong> {patient.id}
            </p>
            <p className='register-name'>
              <strong>Nome:</strong> {patient.fullName}
            </p>
            <p className='register-healthInsurance'>
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
            <h3>Informações do Paciente</h3>
            <p>Nome: {selectedPatient.fullName}</p>
            <p>Email: {selectedPatient.email}</p>
            <p>Telefone: {selectedPatient.phone}</p>

            <h3>Cadastrar Consulta para {selectedPatient.fullName}</h3>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor='reason'>Motivo da consulta:</label>
                <input
                  type='text'
                  id='reason'
                  name='reason'
                  value={formData.reason}
                  onChange={handleInputChange}
                  required
                  minLength={6}
                  maxLength={60}
                />
              </div>
              <div>
                <label htmlFor='date'>Data da Consulta:</label>
                <input
                  type='date'
                  id='date'
                  name='date'
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label htmlFor='time'>Horário da Consulta:</label>
                <input
                  type='time'
                  id='time'
                  name='time'
                  value={formData.time}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label htmlFor='description'>Descrição do Problema:</label>
                <textarea
                  id='description'
                  name='description'
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  minLength={15}
                  maxLength={1000}
                />
              </div>
              <div>
                <label htmlFor='medication'>Medicação Receitada:</label>
                <input
                  type='text'
                  id='medication'
                  name='medication'
                  value={formData.medication}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor='dosagePrecautions'>Dosagem e Precauções:</label>
                <textarea
                  id='dosagePrecautions'
                  name='dosagePrecautions'
                  value={formData.dosagePrecautions}
                  onChange={handleInputChange}
                  required
                  minLength={15}
                  maxLength={250}
                />
              </div>
              <div>
                <button type='submit' disabled={isSaving}>
                  {isSaving ? 'Salvando...' : 'Salvar'}
                </button>
                <button type='button' disabled>
                  Editar
                </button>
                <button type='button' disabled>
                  Deletar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <ToastContainer />
    </section>
  )
}

export default ConsultationForm
