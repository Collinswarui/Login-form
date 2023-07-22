import React, { useState } from 'react';
import axios from 'axios';

const Signupform = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://loginform-7xpk.onrender.com/signup', {
                firstname,
                lastname,
                username,
                email,
                password,
            });
            if (response && response.data) {
             setMessage(response.data.message);
             setFirstname('');
             setLastname('');
             setUsername('');
             setEmail('');
             setPassword('');
            }

        } catch (error) {
            if (error.response && error.response.data) {
                setMessage(error.response.data.error);
            } else {
                setMessage('An error occurred. Please try again later.');
            }
        }
    };


    return (
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
            <label>
          Firstname:
          <input
            type="text"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </label>
         <br />
            <label>
          Lastname:
          <input
            type="text"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </label>
        <br />
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Sign Up</button>
      </form>
      <p>{message}</p>
        </div>
    );
};

export default Signupform;