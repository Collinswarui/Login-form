import React, { useState } from 'react';
import axios from 'axios';
import './Loginform.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://loginform-7xpk.onrender.com/login', {
        username,
        password,
      });

      setMessage(response.data.message);
      setTimeout( () => {
        setUsername('');
        setPassword('');
      }, 1000);
      
    } catch (error) {
        if (error.response && error.response.data) {
            setMessage(error.response.data.error);
        } else {
            setMessage('An error occcurred. Please try again later');;
        }
      
    }
  };

  return (
    <div className='login-form'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete='off'
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete='off'
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
      <p className='error-message'>{message}</p>
    </div>
  );
};

export default LoginForm;