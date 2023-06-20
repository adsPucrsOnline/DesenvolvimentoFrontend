describe('Delete Postcard', () => {
  beforeEach(() => {
      cy.intercept('GET', '**/postcards', { fixture: 'postcards.json' }).as('getAllPostcard');
      cy.visit('http://localhost:3000/list', {
          onBeforeLoad: (win) => {
              // Ignorar a chamada real para getAllPostcard no carregamento da página
              win.eval(`window.getAllPostcard = () => {};`);
          },
      });
  });

  it('should display postcards', () => {
      // Esperar pela interceptação da rota getAllPostcard
      cy.wait('@getAllPostcard').then(() => {
          cy.get('[data-testid="postcard"]').should('have.length', 3);
      });
  });
  
  it('should delete a postcard', () => {
      cy.intercept('GET', '**/postcards', { fixture: 'postcards.json' }).as('getAllPostcard');
      cy.intercept('DELETE', '**/postcards/*', {}).as('deletePostcard');

      cy.wait('@getAllPostcard').then(() => {
          cy.get('[data-testid="delete-button"]').first().click();
          cy.get('[data-testid="confirm-delete-button"]').click();

          cy.wait('@deletePostcard').then(() => {
              cy.get('[data-testid="postcard"]').should('have.length', 2);
          });
      });
  });
});