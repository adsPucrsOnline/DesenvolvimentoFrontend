import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Simulação de validação do login
    if (username === 'myusername' && password === 'mypassword') {
        // Login bem-sucedido, redirecionar para a página de dashboard
        window.location.href = '/home';
      } else {
        // Credenciais inválidas, exibir mensagem de erro
        setErrorMessage('Invalid credentials');
      }
    };
  

  return (
    <form onSubmit={handleFormSubmit}>
      <Typography variant='h4'>Login </Typography>
      <TextField
        name="username"
        label="Username"
        value={username}
        onChange={handleUsernameChange}
        fullWidth
        margin="normal"
      />
      <TextField
        name="password"
        label="Password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Login
      </Button>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </form>
  );
};

export default LoginForm;
