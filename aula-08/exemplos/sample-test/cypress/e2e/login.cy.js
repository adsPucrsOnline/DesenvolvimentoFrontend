describe('Login', () => {
  it('should login successfully with valid credentials', () => {
    cy.visit('http://localhost:3000/login'); // Visita a página de login

    cy.get('input[name="username"]').type('myusername'); // Insere o nome de usuário
    cy.get('input[name="password"]').type('mypassword'); // Insere a senha

    cy.get('button[type="submit"]').click(); // Clica no botão de login

    cy.url().should('eq', 'http://localhost:3000/home'); // Verifica se a URL foi redirecionada para a página de dashboard
    cy.get('h1').should('contain', 'Home'); // Verifica se a página de dashboard contém a mensagem de boas-vindas
  });

  it('should display an error message with invalid credentials', () => {
    cy.visit('http://localhost:3000/login'); // Visita a página de login

    cy.get('input[name="username"]').type('invalidusername'); // Insere um nome de usuário inválido
    cy.get('input[name="password"]').type('invalidpassword'); // Insere uma senha inválida

    cy.get('button[type="submit"]').click(); // Clica no botão de login

    cy.get('.error-message').should('contain', 'Invalid credentials'); // Verifica se a mensagem de erro é exibida
  });
});
