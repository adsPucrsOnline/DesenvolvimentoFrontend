const express = require('express');
const axios = require('axios');

const app = express();

// Rota para obter todos os usuários
app.get('/api/users', async (req, res) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    const users = response.data;
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao obter usuários' });
  }
});

// Rota para obter um usuário específico
app.get('/api/users/:id', async (req, res) => {
  const userId = req.params.id;

  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = response.data;
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao obter usuário' });
  }
});

// Inicialização do servidor
const port = 3000;
app.listen(port, () => {
  console.log(`API em execução em http://localhost:${port}`);
});
