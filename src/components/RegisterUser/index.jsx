import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const RegisterUser = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isPasswordValid()) {
      setIsPasswordMatch(false);
      return;
    }

    setIsSaving(true);

    try {
      const newUser = {
        email,
        password,
      };

      await axios.post('http://localhost:3000/users', newUser);

      setIsSaving(false);
      resetForm();
      toast.success('Usuário criado com sucesso!', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000, // Tempo de exibição da notificação em milissegundos
        hideProgressBar: true, // Esconde a barra de progresso da notificação
      });
      console.log('Usuário criado com sucesso!');
    } catch (error) {
      toast.error('Erro ao criar o usuário!', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
        hideProgressBar: true,
      });
      console.error('Erro ao criar usuário:', error);
      setIsSaving(false);
    }
  };

  const isPasswordValid = () => {
    return password.length >= 8 && password === confirmPassword;
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setIsPasswordMatch(true);
  };

  return (
    <div>
      <h2>Criar Usuário</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
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
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirmar Senha:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
          {!isPasswordMatch && (
           
            <p style={{ color: 'red' }}>As senhas não correspondem.</p>
            
          )}
        </div>
        <div>
          <button type="submit" disabled={isSaving}>
            {isSaving ? 'Salvando...' : 'Criar Usuário'}
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default RegisterUser;
