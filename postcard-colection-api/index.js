const express = require('express');
const cors = require('cors');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(cors());
app.use(express.json());

const postcardsPath = './postcards.json';

// Rota GET para obter todos os Postcards
app.get('/postcards', (req, res) => {
  fs.readFile(postcardsPath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to read postcards data.' });
    }

    const postcards = JSON.parse(data);
    res.json(postcards);
  });
});

// Rota GET para obter um único Postcard pelo ID
app.get('/postcards/:id', (req, res) => {
  const postId = req.params.id;

  fs.readFile(postcardsPath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to read postcards data.' });
    }

    const postcards = JSON.parse(data);
    const postcard = postcards.find((post) => post.id === postId);

    if (!postcard) {
      return res.status(404).json({ error: 'Postcard not found.' });
    }

    res.json(postcard);
  });
});
// Rota POST para adicionar um novo Postcard
app.post('/postcards', (req, res) => {
  const { name, cidade, pais, descricao, imageUrl } = req.body;
  //const imageUrl = `https://picsum.photos/400/300`; // Gerador automático de imagens

  const newPostcard = {
    id: uuidv4(),
    name,
    cidade,
    pais,
    descricao,
    imageUrl,
  };

  fs.readFile(postcardsPath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to read postcards data.' });
    }

    const postcards = JSON.parse(data);
    postcards.push(newPostcard);

    fs.writeFile(postcardsPath, JSON.stringify(postcards, null, 2), (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Failed to add new postcard.' });
      }

      res.status(201).json(newPostcard);
    });
  });
});

app.put('/postcards/:id', (req, res) => {
  const { id } = req.params;
  const { name, cidade, pais, descricao, imageUrl } = req.body;

  fs.readFile(postcardsPath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to read postcards data.' });
    }

    const postcards = JSON.parse(data);
    const postcard = postcards.find((item) => item.id === id);

    if (!postcard) {
      return res.status(404).json({ error: 'Postcard not found.' });
    }

    postcard.name = name;
    postcard.cidade = cidade;
    postcard.pais = pais;
    postcard.descricao = descricao;
    postcard.imageUrl = imageUrl;

    fs.writeFile(postcardsPath, JSON.stringify(postcards, null, 2), (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Failed to update postcard.' });
      }

      res.json(postcard);
    });
  });
});

app.delete('/postcards/:id', (req, res) => {
  const { id } = req.params;

  fs.readFile(postcardsPath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to read postcards data.' });
    }

    let postcards = JSON.parse(data);
    const postcardIndex = postcards.findIndex((item) => item.id === id);

    if (postcardIndex === -1) {
      return res.status(404).json({ error: 'Postcard not found.' });
    }

    postcards = postcards.filter((item) => item.id !== id);

    fs.writeFile(postcardsPath, JSON.stringify(postcards, null, 2), (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Failed to delete postcard.' });
      }

      res.status(204).end();
    });
  });
});



const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
