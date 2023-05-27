var express = require('express');
var router = express.Router();

/* GET Lista Usuarios. */
router.get('/', function(req, res, next) {
  // Lógica para buscar todos os usuários
  res.json({ mensagem: 'Obtendo todos os usuários' });
});

/* POST Cria Usuario. */
router.post('/', function(req, res, next) {
  // Lógica para criar um novo usuário
  res.json({ mensagem: 'Criando um novo usuário' });
});

// Adicione outras rotas conforme necessário

module.exports = router;
