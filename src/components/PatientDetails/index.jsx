import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './styles.css'

const PatientDetails = () => {
  const { id } = useParams()
  const [patient, setPatient] = useState({})
  const [consults, setConsults] = useState([])
  const [exams, setExams] = useState([])

  const [editingConsult, setEditingConsult] = useState(null)
  const [editConsultData, setEditConsultData] = useState({
    reason: '',
    date: '',
    time: '',
    description: '',
    medication: '',
    dosagePrecautions: '',
  })
  const [isEditingConsult, setIsEditingConsult] = useState(false)
  const [editingExam, setEditingExam] = useState(null);
  const [editExamData, setEditExamData] = useState({
    name: '',
    date: '',
    time: '',
    type: '',
    laboratory: '',
    documentUrl: '',
    results: '',
  });
  const [isEditingExam, setIsEditingExam] = useState(false);

  useEffect(() => {
    const fetchPatientDetails = async () => {
      try {
        const patientResponse = await axios.get(
          `http://localhost:3000/patients/${id}`
        )
        const consultsResponse = await axios.get(
          `http://localhost:3000/consults?patientId=${id}`
        )
        const examsResponse = await axios.get(
          `http://localhost:3000/exams?patientId=${id}`
        )

        setPatient(patientResponse.data)
        setConsults(consultsResponse.data)
        setExams(examsResponse.data)
      } catch (error) {
        console.error('Erro ao obter os detalhes do paciente:', error)
      }
    }

    fetchPatientDetails()
  }, [id])

  const renderConsults = () => {
    if (consults.length === 0) {
      return <p>Nenhuma consulta encontrada.</p>
    }

    if (isEditingConsult) {
      return (
        <div>
          <h3>Editar Consulta</h3>
          <form onSubmit={handleUpdateConsult}>
            <div>
              <label htmlFor='edit-reason'>Motivo da consulta:</label>
              <input
                type='text'
                id='edit-reason'
                value={editConsultData.reason}
                onChange={e =>
                  setEditConsultData({
                    ...editConsultData,
                    reason: e.target.value
                  })
                }
                required
                minLength={6}
                maxLength={60}
              />
            </div>
            <div>
              <label htmlFor='edit-date'>Data da Consulta:</label>
              <input
                type='date'
                id='edit-date'
                value={editConsultData.date}
                onChange={e =>
                  setEditConsultData({
                    ...editConsultData,
                    date: e.target.value
                  })
                }
                required
              />
            </div>
            <div>
              <label htmlFor='edit-time'>Horário da Consulta:</label>
              <input
                type='time'
                id='edit-time'
                value={editConsultData.time}
                onChange={e =>
                  setEditConsultData({
                    ...editConsultData,
                    time: e.target.value
                  })
                }
                required
              />
            </div>
            <div>
              <label htmlFor='edit-description'>Descrição:</label>
              <input
                type='text'
                id='edit-description'
                value={editConsultData.description}
                onChange={e =>
                  setEditConsultData({
                    ...editConsultData,
                    description: e.target.value
                  })
                }
                required
              />
            </div>
            <div>
              <label htmlFor='edit-medication'>Medicação:</label>
              <input
                type='text'
                id='edit-medication'
                value={editConsultData.medication}
                onChange={e =>
                  setEditConsultData({
                    ...editConsultData,
                    medication: e.target.value
                  })
                }
                required
              />
            </div>

            <div>
              <label htmlFor='edit-dosagePrecautions'>Dosagem e Precauções:</label>
              <input
                type='text'
                id='edit-dosagePrecautions'
                value={editConsultData.dosagePrecautions}
                onChange={e =>
                  setEditConsultData({
                    ...editConsultData,
                    dosagePrecautions: e.target.value
                  })
                }
                required
              />
            </div>

            

            <div className="bts-details-exams-consults">
              <button type='submit'>Salvar</button>
              <button type='button' onClick={() => setIsEditingConsult(false)}>
                Cancelar
              </button>
            </div>
          </form>
        </div>
      )
    }

    return (
      <div>
        <h3>Histórico de Consultas</h3>
        {consults.map(consult => (
          <div key={consult.id}>
            <p>
              <strong>Consulta:</strong> {consult.reason}
            </p>
            <p>
              <strong>Data:</strong> {consult.date} - {consult.time}
            </p>

            <p>
              <strong>Descrição:</strong> {consult.description}
            </p>

            <p>
              <strong>Medicação:</strong> {consult.medication}
            </p>

            <p>
              <strong>Dosagem e Precauções:</strong> {consult.dosagePrecautions}
            </p>
            <div className='bts-details-exams-consults'>
              <button onClick={() => handleEditConsult(consult)}>Editar</button>
              <button onClick={() => handleDeleteConsult(consult.id)}>Deletar</button>
            </div>

            <hr />
          </div>
        ))}
      </div>
    )
  }

  const handleUpdateConsult = async event => {
    event.preventDefault()

    try {
      // Verifica se há consulta selecionada para edição
      if (!editingConsult) {
        return
      }

      // Cria um objeto com os dados atualizados da consulta
      const updatedConsult = {
        ...editingConsult,
        reason: editConsultData.reason,
        date: editConsultData.date,
        time: editConsultData.time,
        medication: editConsultData.medication,
        dosagePrecautions: editConsultData.dosagePrecautions,
      }

      await axios.put(
        `http://localhost:3000/consults/${editingConsult.id}`,
        updatedConsult
      )

      setConsults(prevConsults =>
        prevConsults.map(consult =>
          consult.id === editingConsult.id ? updatedConsult : consult
        )
      )

      setIsEditingConsult(false)
      setEditingConsult(null)
      setEditConsultData({ reason: '', date: '', time: '', description: "", medication: "", dosagePrecautions: "" })
      
      toast.success('Consulta atualizada com sucesso!', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000, 
        hideProgressBar: true, 
      });

    } catch (error) {
      toast.error('Erro ao atualizar a consulta!', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
        hideProgressBar: true,
      });
      console.error('Erro ao atualizar a consulta:', error)
    }
  }

  const handleEditConsult = consult => {
    setEditingConsult(consult)
    setEditConsultData({
      reason: consult.reason,
      date: consult.date,
      time: consult.time,
      description: consult.description,
      medication: consult.medication,
      dosagePrecautions: consult.dosagePrecautions
    })
    setIsEditingConsult(true)
  }


  const handleDeleteConsult = async (consultId) => {
    try {
    
      await axios.delete(`http://localhost:3000/consults/${consultId}`);

      
      setConsults((prevConsults) =>
        prevConsults.filter((consult) => consult.id !== consultId)
      );

      toast.success('Consulta excluída com sucesso!', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
        hideProgressBar: true,
      });
    } catch (error) {
      toast.error('Erro ao excluir a consulta!', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
        hideProgressBar: true,
      });
      console.error('Erro ao excluir a consulta:', error);
    }
  };

  
  const renderExams = () => {
    if (exams.length === 0) {
      return <p>Nenhum exame encontrado.</p>
    }

    if (isEditingExam) {
      return (
        <div>
          <h3>Editar Exame</h3>
          <form onSubmit={handleUpdateExam}>
            <div>
              <label htmlFor="edit-name">Nome do Exame:</label>
              <input
                type="text"
                id="edit-name"
                value={editExamData.name}
                onChange={(e) =>
                  setEditExamData({ ...editExamData, name: e.target.value })
                }
                required
                minLength={5}
                maxLength={50}
              />
            </div>
            <div>
              <label htmlFor="edit-date">Data do Exame:</label>
              <input
                type="date"
                id="edit-date"
                value={editExamData.date}
                onChange={(e) =>
                  setEditExamData({ ...editExamData, date: e.target.value })
                }
                required
              />
            </div>
            <div>
              <label htmlFor="edit-time">Horário do Exame:</label>
              <input
                type="time"
                id="edit-time"
                value={editExamData.time}
                onChange={(e) =>
                  setEditExamData({ ...editExamData, time: e.target.value })
                }
                required
              />
            </div>
            <div>
              <label htmlFor="edit-type">Tipo do Exame:</label>
              <input
                type="text"
                id="edit-type"
                value={editExamData.type}
                onChange={(e) =>
                  setEditExamData({ ...editExamData, type: e.target.value })
                }
                required
                minLength={5}
                maxLength={30}
              />
            </div>
            <div>
              <label htmlFor="edit-laboratory">Laboratório:</label>
              <input
                type="text"
                id="edit-laboratory"
                value={editExamData.laboratory}
                onChange={(e) =>
                  setEditExamData({ ...editExamData, laboratory: e.target.value })
                }
                required
                minLength={5}
                maxLength={30}
              />
            </div>
            <div>
              <label htmlFor="edit-documentUrl">URL do Documento:</label>
              <input
                type="text"
                id="edit-documentUrl"
                value={editExamData.documentUrl}
                onChange={(e) =>
                  setEditExamData({ ...editExamData, documentUrl: e.target.value })
                }
              />
            </div>
            <div>
              <label htmlFor="edit-results">Resultados:</label>
              <textarea
                id="edit-results"
                value={editExamData.results}
                onChange={(e) =>
                  setEditExamData({ ...editExamData, results: e.target.value })
                }
                required
                minLength={15}
                maxLength={1000}
              />
            </div>
            <div className="bts-details-exams-consults">
              <button type="submit">Salvar</button>
              <button type="button" onClick={() => setIsEditingExam(false)}>
                Cancelar
              </button>
            </div>
          </form>
        </div>
      );
    }

    return (
      <div>
        <h3>Histórico de Exames</h3>
        {exams.map(exam => (
          <div key={exam.id}>
            <p>
              <strong>Exame:</strong> {exam.name}
            </p>

            <p>
              <strong>Data:</strong> {exam.date} - {exam.time}
            </p>

            <p>
              <strong>Tipo:</strong> {exam.type}
            </p>

            <p>
              <strong>Laboratório:</strong> {exam.laboratory}
            </p>

            <p>
              <strong>URL do Documento:</strong> {exam.documentUrl}
            </p>

            <p>
              <strong>Resultados:</strong> {exam.results}
            </p>
            <div className='bts-details-exams-consults'>
              <button onClick={() => handleEditExam(exam)}>Editar</button>
              <button onClick={() => handleDeleteExam(exam.id)}>Deletar</button>
            </div>
            <hr />
          </div>
        ))}
      </div>
    )
  }

  const handleUpdateExam = async event => {
    event.preventDefault();

    try {
     
      if (!editingExam) {
        return;
      }

     
      const updatedExam = {
        ...editingExam,
        name: editExamData.name,
        date: editExamData.date,
        time: editExamData.time,
        type: editExamData.type,
        laboratory: editExamData.laboratory,
        documentUrl: editExamData.documentUrl,
        results: editExamData.results,
      };

      await axios.put(
        `http://localhost:3000/exams/${editingExam.id}`,
        updatedExam
      );

      setExams(prevExams =>
        prevExams.map(exam => (exam.id === editingExam.id ? updatedExam : exam))
      );


      setIsEditingExam(false);
      setEditingExam(null);
      setEditExamData({
        name: '',
        date: '',
        time: '',
        type: '',
        laboratory: '',
        documentUrl: '',
        results: '',
      });

      toast.success('Exame atualizado com sucesso!', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000, 
        hideProgressBar: true, 
      });

    } catch (error) {
      toast.error('Erro ao atualizar o exame!', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
        hideProgressBar: true,
      });
      console.error('Erro ao atualizar o exame:', error);
    }
  };

  const handleEditExam = exam => {
    setEditingExam(exam);
    setEditExamData({
      name: exam.name,
      date: exam.date,
      time: exam.time,
      type: exam.type,
      laboratory: exam.laboratory,
      documentUrl: exam.documentUrl,
      results: exam.results,
    });
    setIsEditingExam(true);
  };

  const handleDeleteExam = async (examId) => {
    try {
     
      await axios.delete(`http://localhost:3000/exams/${examId}`);

      setExams((prevExams) =>
        prevExams.filter((exam) => exam.id !== examId)
      );

      toast.success('Exame excluído com sucesso!', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
        hideProgressBar: true,
      });
    } catch (error) {
      toast.error('Erro ao excluir o exame!', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
        hideProgressBar: true,
      });
      console.error('Erro ao excluir o exame:', error);
    }
  };


  if (!patient) {
    return <p>Carregando...</p>
  }

  return (
    <section>
      <div className='container-patient-details'>
        <div className='patient-details'>
          <h2>{patient.fullName}</h2>

          <p>
            <strong>Convênio:</strong> {patient.healthInsurance}
          </p>

          <p>
            <strong>Alergias:</strong> {patient.allergies}
          </p>
        </div>
        <div className='history-container'>
          {renderConsults()}
          {renderExams()}
        </div>
      </div>
      <ToastContainer />
    </section>
  )
}

export default PatientDetails
