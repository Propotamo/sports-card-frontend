import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Account = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    } else {
      axios.get('http://localhost:8080/api/account', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        setUserData(response.data);
      })
      .catch(error => {
        // Se il token è scaduto o invalido, reindirizza al login
        localStorage.removeItem('token');
        navigate('/login');
      });
    }
  }, [navigate]);

  if (!userData) {
    return <div>Caricamento...</div>;
  }

  return (
    <div>
      <h2>Area Personale</h2>
      <p>Benvenuto, {userData.username}!</p>
      <p>Email: {userData.email}</p>
      {/* Mostra altre informazioni dell'account */}
    </div>
  );
};

export default Account;
