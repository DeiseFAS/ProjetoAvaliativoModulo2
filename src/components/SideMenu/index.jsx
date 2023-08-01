import React, { useState, useEffect } from 'react'
import {
  FaBars,
  FaTimes,
  FaUserPlus,
  FaListAlt,
  FaCalendarCheck
} from 'react-icons/fa'
import { MdDashboard,MdExitToApp } from 'react-icons/md'
import { Link } from 'react-router-dom'
import './styles.css'

import { useNavigate } from 'react-router-dom'

import logobranca from '../../assets/imgs/logo-branca.png';

const SideMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    if (!localStorage.getItem('email')) {
      console.log('logout')
      navigate('/')
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('email')
    console.log('Logout!')
    navigate('/')
  }

  const handleToggleMenu = () => {
    setIsMenuOpen(prevState => !prevState)
  }

  return (
    <>
      <nav className={`side-menu ${isMenuOpen ? 'open' : 'closed'} desktop`}>
        <div className='menu-toggle' onClick={handleToggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
        {isMenuOpen && (
          <>
          <div className='logo'>
          <img src={logobranca} className="logo" alt="logo" />
          </div>
            <ul>
              <li>
                <Link to='/dashboard'>
                  <MdDashboard />
                  <span>Início</span>
                </Link>
              </li>
            </ul>
            <h3>Pacientes</h3>
            <ul>
              <li>
                <Link to='/cadastro-paciente'>
                  <FaUserPlus />
                  <span>Cadastrar Paciente</span>
                </Link>
              </li>
              <li>
                <Link to='/prontuarios'>
                  <FaListAlt />
                  <span>Listar Prontuário</span>
                </Link>
              </li>
            </ul>

            <h3>Consultas e Exames</h3>
            <ul>
              <li>
                <Link to='/consultas'>
                  <FaCalendarCheck />
                  <span>Cadastrar Consulta</span>
                </Link>
              </li>
              <li>
                <Link to='/exames'>
                  <FaCalendarCheck />
                  <span>Cadastrar Exame</span>
                </Link>
              </li>
            </ul>
            <button onClick={handleLogout}>Sair</button>
          </>
        )}
      </nav>

      <nav className='mobile-bottom-menu'>
        <ul>
          <li>
            <Link to='/dashboard'>
              <MdDashboard />
              <span>Início</span>
            </Link>
          </li>
          <li>
            <Link to='/cadastro-paciente'>
              <FaUserPlus />
              <span>Cadastrar Paciente</span>
            </Link>
          </li>
          <li>
            <Link to='/prontuarios'>
              <FaListAlt />
              <span>Listar Prontuário</span>
            </Link>
          </li>
          <li>
            <Link to='/consultas'>
              <FaCalendarCheck />
              <span>Cadastrar Consulta</span>
            </Link>
          </li>
          <li>
            <Link to='/exames'>
              <FaCalendarCheck />
              <span>Cadastrar Exame</span>
            </Link>
          </li>

          <li>
            <Link onClick={handleLogout}>
              <MdExitToApp />
              <span>Sair</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default SideMenu
