

import React, { useState } from 'react';
import { login } from '../services/api'; // Import login function from api.js

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await login(username, password); // Call login function
      localStorage.setItem('token', response.token); // Store token in local storage
      console.log('Login successful!');
    } catch (error) {
      setError(error.message); // Set error message state
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        {error && <div style={{ color: 'red' }}>{error}</div>} {/* Display error message if any */}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
