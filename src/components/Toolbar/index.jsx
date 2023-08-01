import React, { useEffect, useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import './styles.css';

const Toolbar = ({ title }) => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const emailLocalStorage = localStorage.getItem('email');
    let userNameFromEmail;

    if (emailLocalStorage) {
      userNameFromEmail = emailLocalStorage.split('@')[0];
      setUserName(userNameFromEmail);
    }
  }, []);

  return (
    <div className="toolbar">
      <h1>{title}</h1>
      <div className="user-info">
        <FaUserCircle className="user-icon" />
        <span>{userName}</span>
      </div>
    </div>
  );
};

export default Toolbar;
