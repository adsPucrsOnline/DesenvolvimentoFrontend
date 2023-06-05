import { URL } from './constant'

describe('Cálculo da Fórmula de Bhaskara', () => {
  it('Calcula as raízes corretamente', () => {
    cy.visit(URL); // Visita a página inicial do aplicativo

    // Insere os valores de a, b e c no formulário
    cy.get('input[name="a"]').type('1');
    cy.get('input[name="b"]').type('-3');
    cy.get('input[name="c"]').type('2');

    // Clica no botão "Calcular"
    cy.get('button[type="submit"]').click();

    // Verifica se as raízes foram calculadas corretamente
    cy.get('.card-text').should('contain', 'Existem duas raízes reais diferentes:');
    cy.get('.card-text li').should('have.length', 2);
  });

  it('Exibe a mensagem para raízes iguais', () => {
    cy.visit(URL); // Visita a página inicial do aplicativo

    // Insere os valores de a, b e c no formulário
    cy.get('input[name="a"]').type('1');
    cy.get('input[name="b"]').type('2');
    cy.get('input[name="c"]').type('1');

    // Clica no botão "Calcular"
    cy.get('button[type="submit"]').click();

    // Verifica se a mensagem de raízes iguais é exibida corretamente
    cy.get('.card-text').should('contain', 'Existem duas raízes iguais:');
    cy.get('.card-text p').should('have.length', 2);
  });

  it('Exibe a mensagem para nenhuma raiz real', () => {
    cy.visit(URL); // Visita a página inicial do aplicativo

    // Insere os valores de a, b e c no formulário
    cy.get('input[name="a"]').type('1');
    cy.get('input[name="b"]').type('1');
    cy.get('input[name="c"]').type('1');

    // Clica no botão "Calcular"
    cy.get('button[type="submit"]').click();

    // Verifica se a mensagem de nenhuma raiz real é exibida corretamente
    cy.get('.card-text').should('contain', 'NÃO Existem raízes reais.');
  });
});
