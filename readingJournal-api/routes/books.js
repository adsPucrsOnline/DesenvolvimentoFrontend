const express = require("express");
const fs = require("fs");

var router = express.Router();
const filePath = "./data/books.json";

// Rota para o endpoint GET que lê os dados do arquivo JSON
router.get("/", (req, res) => {
  fs.readFile("./data/books.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Erro ao ler arquivo JSON" });
    }

    try {
      const books = JSON.parse(data); // Transforma o conteúdo em um objeto JavaScript
      res.json(books); // Retorna os dados como JSON na resposta
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Erro ao analisar arquivo JSON" });
    }
  });
});

// Rota para o endpoint POST que adiciona dados ao arquivo JSON
router.post("/", (req, res) => {
  // Lê o conteúdo atual do arquivo JSON
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Erro ao ler arquivo JSON" });
    }

    try {
      const books = JSON.parse(data); // Transforma o conteúdo em um objeto JavaScript
      const newBook = req.body; // Obtém o novo objeto de livro a partir do corpo da requisição

      const booksLength = books.length;
      const newId = booksLength ? books[booksLength - 1].id + 1 : 1;
      // Adiciona o novo livro ao array de livros
      books.push({ id: newId, ...newBook });

      // Escreve o novo conteúdo no arquivo JSON
      fs.writeFile(filePath, JSON.stringify(books), "utf8", (err) => {
        if (err) {
          console.error(err);
          return res
            .status(500)
            .json({ error: "Erro ao escrever arquivo JSON" });
        }

        res.json(newBook); // Retorna o novo livro como resposta
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Erro ao analisar arquivo JSON" });
    }
  });
});

// Rota DELETE para remover um livro pelo ID
router.delete("/:id", (req, res) => {
  const bookId = parseInt(req.params.id);

  // Lê o arquivo JSON
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Internal server error" });
    }

    let books = JSON.parse(data);

    // Remove o livro do array
    const newbooks = books.filter((book) => book.id !== bookId);

    // Escreve os dados atualizados no arquivo JSON
    fs.writeFile(filePath, JSON.stringify(newbooks), (err) => {
      if (err) {
        return res.status(500).json({ message: "Internal server error" });
      }

      res.json({ message: "Book removed successfully" });
    });
  });
});

// Rota PUT para atualizar um livro
router.put("/", (req, res) => {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Erro ao ler arquivo JSON" });
    }

    try {
      const books = JSON.parse(data); // Transforma o conteúdo em um objeto JavaScript
      const updatedBook = req.body; // Obtém o novo objeto de livro a partir do corpo da requisição

      if (books.some((book) => updatedBook.id === book.id)) {
        // Atualiza a lista de livros com o novo dado
        const updatedBooks = books.map((book) =>
          updatedBook.id === book.id ? updatedBook : book
        );

        // Escreve o novo conteúdo no arquivo JSON
        fs.writeFile(filePath, JSON.stringify(updatedBooks), "utf8", (err) => {
          if (err) {
            console.error(err);
            return res
              .status(500)
              .json({ error: "Erro ao escrever arquivo JSON" });
          }

          res.json(updatedBook); // Retorna o livro atualizado como resposta
        });
      } else {
        return res.status(404).json({ error: "Book not found" });
      }
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Erro ao analisar arquivo JSON" });
    }
  });
});

// Rota GET para obter um livro pelo ID
router.get("/:id", (req, res) => {
  const bookId = parseInt(req.params.id);

  // Lê o arquivo JSON
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Erro ao ler arquivo JSON" });
    }

    try {
      const books = JSON.parse(data);

      // Procura o livro pelo ID
      const book = books.find((book) => book.id === bookId);

      if (book) {
        res.json(book); // Retorna o livro encontrado
      } else {
        res.status(404).json({ message: "Livro não encontrado" });
      }
    } catch (err) {
      return res
        .status(500)
        .json({ message: "Erro ao processar dados do arquivo JSON" });
    }
  });
});

module.exports = router;
