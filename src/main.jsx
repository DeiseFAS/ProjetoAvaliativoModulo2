import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './global.css'

import ErrorPage from './routes/error-page'

import Login from './routes/login'
import Dashboard from './routes/dashboard'
import RegisterPatient from './routes/register-patient'
import Consults from './routes/consults'
import Exams from './routes/exams'
import MedicalRecordList from './routes/medical-record-list'
import PatientDetails from './routes/patient'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,

    errorElement: <ErrorPage />
  },
  {
    path: 'dashboard',
    element: <Dashboard />
  },
  {
    path: 'cadastro-paciente',
    element: <RegisterPatient />
  },
  {
    path: 'prontuarios',
    element: <MedicalRecordList />
  },
  {
    path: 'consultas',
    element: <Consults />
  },
  {
    path: 'exames',
    element: <Exams />
  },

  {
    path: '/paciente/:id',
    element: <PatientDetails />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainer />
    <RouterProvider router={router} />
  </React.StrictMode>
)
