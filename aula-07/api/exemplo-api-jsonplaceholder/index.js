const express = require('express');
const axios = require('axios');

const app = express();

// Rota para obter todos os posts
app.get('/api/posts', async (req, res) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const posts = response.data;
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao obter Posts' });
  }
});

// Rota para obter um post específico
app.get('/api/posts/:id', async (req, res) => {
  const postId = req.params.id;

  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const post = response.data;
    res.json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao obter Post' });
  }
});

// Inicialização do servidor
const port = 3000;
app.listen(port, () => {
  console.log(`API em execução em http://localhost:${port}`);
});
