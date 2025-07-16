const express = require("express");
const fs = require("fs");

var router = express.Router();
const filePath = "./data/series.json";

// Rota para o endpoint GET que lê os dados do arquivo JSON
router.get("/", (req, res) => {
  fs.readFile("./data/series.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Erro ao ler arquivo JSON" });
    }

    try {
      const series = JSON.parse(data); // Transforma o conteúdo em um objeto JavaScript
      res.json(series); // Retorna os dados como JSON na resposta
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
      const series = JSON.parse(data);
      const seriesLength = series.length;
      const newId = seriesLength ? series[seriesLength - 1].id + 1 : 1;

      const newSerie = { ...req.body, id: newId };
      series.push(newSerie);

      // Escreve o novo conteúdo no arquivo JSON
      fs.writeFile(filePath, JSON.stringify(series), "utf8", (err) => {
        if (err) {
          console.error(err);
          return res
            .status(500)
            .json({ error: "Erro ao escrever arquivo JSON" });
        }

        res.json(newSerie); // Retorna a nova serie como resposta
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Erro ao analisar arquivo JSON" });
    }
  });
});

// Rota DELETE para remover uma serie pelo ID
router.delete("/:id", (req, res) => {
  const serieId = parseInt(req.params.id);

  // Lê o arquivo JSON
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Internal server error" });
    }

    let series = JSON.parse(data);

    // Remove uma serie do array
    const newseries = series.filter((serie) => serie.id !== serieId);

    // Escreve os dados atualizados no arquivo JSON
    fs.writeFile(filePath, JSON.stringify(newseries), (err) => {
      if (err) {
        return res.status(500).json({ message: "Internal server error" });
      }

      res.json({ message: "Serie removed successfully" });
    });
  });
});

// Rota PUT para atualizar uma serie
router.put("/", (req, res) => {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Erro ao ler arquivo JSON" });
    }

    try {
      const series = JSON.parse(data); // Transforma o conteúdo em um objeto JavaScript
      const updatedSerie = req.body; // Obtém o novo objeto de serie a partir do corpo da requisição

      if (series.some((serie) => updatedSerie.id === serie.id)) {
        // Atualiza a lista de series com o novo dado
        const updatedSeries = series.map((serie) =>
          updatedSerie.id === serie.id ? updatedSerie : serie
        );

        // Escreve o novo conteúdo no arquivo JSON
        fs.writeFile(filePath, JSON.stringify(updatedSeries), "utf8", (err) => {
          if (err) {
            console.error(err);
            return res
              .status(500)
              .json({ error: "Erro ao escrever arquivo JSON" });
          }

          res.json(updatedSerie); // Retorna a serie atualizada como resposta
        });
      } else {
        return res.status(404).json({ error: "Serie not found" });
      }
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Erro ao analisar arquivo JSON" });
    }
  });
});

// Rota GET para obter uma serie pelo ID
router.get("/:id", (req, res) => {
  const serieId = parseInt(req.params.id);

  // Lê o arquivo JSON
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Erro ao ler arquivo JSON" });
    }

    try {
      const series = JSON.parse(data);

      // Procura a serie pelo ID
      const serie = series.find((serie) => serie.id === serieId);

      if (serie) {
        res.json(serie); // Retorna a serie encontrada
      } else {
        res.status(404).json({ message: "Serie não encontrada" });
      }
    } catch (err) {
      return res
        .status(500)
        .json({ message: "Erro ao processar dados do arquivo JSON" });
    }
  });
});

module.exports = router;
