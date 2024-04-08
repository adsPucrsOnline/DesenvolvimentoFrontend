const express = require('express');
const fs = require('fs');



var router = express.Router();
const filePath = './data/carsData.json'

/// Rota para o endpoint GET que lê os dados do arquivo JSON
router.get('/', (req, res) => {
  fs.readFile('./data/carsData.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Erro ao ler arquivo JSON' });
    }

    try {
      const cars = JSON.parse(data); // Transforma o conteúdo em um objeto JavaScript
      res.json(cars); // Retorna os dados como JSON na resposta
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Erro ao analisar arquivo JSON' });
    }
  });
});

  // Rota para o endpoint POST que adiciona dados ao arquivo JSON
router.post('/', (req, res) => {
  // Lê o conteúdo atual do arquivo JSON
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Erro ao ler arquivo JSON' });
    }

    try {
      const cars = JSON.parse(data); // Transforma o conteúdo em um objeto JavaScript
      const newCar = req.body; // Obtém o novo objeto de carro a partir do corpo da requisição

      const newId = cars.length + 1;
      // Adiciona o novo carro ao array de carros
      cars.push({ id: newId, ...newCar });

      // Escreve o novo conteúdo no arquivo JSON
      fs.writeFile(filePath, JSON.stringify(cars), 'utf8', (err) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ error: 'Erro ao escrever arquivo JSON' });
        }

        res.json(newCar); // Retorna o novo carro como resposta
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Erro ao analisar arquivo JSON' });
    }
  });
});

// Rota DELETE para remover um carro pelo ID
router.delete('/:id', (req, res) => {
  const carId = parseInt(req.params.id);

  // Lê o arquivo JSON
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Internal server error' });
    }

    let carsData = JSON.parse(data);

    // Remove o carro do array
    const newCarsData = carsData.filter(car => car.id !== carId);

    // Escreve os dados atualizados no arquivo JSON
    fs.writeFile(filePath, JSON.stringify(newCarsData), err => {
      if (err) {
        return res.status(500).json({ message: 'Internal server error' });
      }

      res.json({ message: 'Car removed successfully' });
    });
  });
});

// Rota PUT para atualizar um carro
router.put('/', (req, res) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Erro ao ler arquivo JSON' });
    }

    try {
      const cars = JSON.parse(data); // Transforma o conteúdo em um objeto JavaScript
      const updatedCar = req.body; // Obtém o novo objeto de carro a partir do corpo da requisição

      if (cars.some(car => updatedCar.id === car.id)) {
        // Atualiza a lista de carros com o novo dado
        const updatedCars = cars.map(car => (updatedCar.id === car.id ? updatedCar : car))

        // Escreve o novo conteúdo no arquivo JSON
        fs.writeFile(filePath, JSON.stringify(updatedCars), 'utf8', (err) => {
          if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Erro ao escrever arquivo JSON' });
          }

          res.json(updatedCar); // Retorna o carro atualizado como resposta
        });
      } else  {
        return res.status(404).json({ error: 'Car not found' });
      }
 
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Erro ao analisar arquivo JSON' });
    }
  });
});

module.exports = router;
