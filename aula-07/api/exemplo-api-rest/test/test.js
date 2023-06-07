const assert = require('assert');
const request = require('supertest');
const app = require('../app');

describe('Testes para a API de Usuários', () => {
  it('Deve retornar uma mensagem "Obtendo todos os usuários" ao chamar a rota GET /usuarios', (done) => {
    request(app)
      .get('/usuarios')
      .expect(200)
      .end((err, res) => {
        assert.strictEqual(res.body.mensagem, 'Obtendo todos os usuários');
        done(err);
      });
  });

  it('Deve retornar uma mensagem "Criando um novo usuário" ao chamar a rota POST /usuarios', (done) => {
    request(app)
      .post('/usuarios')
      .expect(200)
      .end((err, res) => {
        assert.strictEqual(res.body.mensagem, 'Criando um novo usuário');
        done(err);
      });
  });
});
