import React, { useState,useEffect } from 'react';
import Modal from '../Modal';
import RegisterUser from '../RegisterUser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

import { Navigate, useNavigate  } from 'react-router-dom';





const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate(); // Hook para redirecionar o usuário


  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  useEffect(()=>{
    if (localStorage.getItem('email')) {
      console.log("logado")
      setIsLoggedIn(true);
      navigate('/dashboard');
    }
    },[])

  const handleLogin = async (event) => {
    event.preventDefault();

    
  
    try {
      const response = await axios.get('http://localhost:3000/users', {
        params: {
          email: email,
          password: password,
        },
      });
  
      if (response.data.length === 0) {
        toast.error('Usuário não encontrado. Verifique o e-mail e senha.', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
          hideProgressBar: true,
        });
       // alert('Usuário não encontrado. Verifique o e-mail e senha.');
        return;
      }
      
      
      // Lógica para fazer o login 
      setIsLoggedIn(true);
      localStorage.setItem('email', email);
      console.log('Login bem-sucedido!');
      
      <Navigate to="/dashboard" replace={true} />
      
      
    } catch (error) {
      console.error('Erro ao verificar o usuário:', error);
    }
  };

  const handleCreateAccount = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleResetPassword = () => {
    toast.error('Desculpe, estamos desenvolvendo essa funcionalidade', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
      hideProgressBar: true,
    });
    console.log('Resetar senha');
  };




  return isLoggedIn ? (
    <Navigate to="/dashboard" replace={true} />
  ) : (
    // return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
            minLength={8}
          />
        </div>
        <button type="submit">Entrar</button>
      </form>
      <div className="reset">
         <a onClick={handleResetPassword}>Esqueceu sua Senha?</a>
      </div>

      <div className="create"> 
        <span>Não possui uma conta?</span>
        <button onClick={handleCreateAccount}>Criar Conta</button>
        
      </div>

      <ToastContainer />

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        
         <RegisterUser/>
      </Modal>
    </div>
  );
};

export default LoginForm;
