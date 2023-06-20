describe('Renderização Tabela periopdica', () => {
  it('Open TB Periopdic', () => {
    cy.visit('localhost:3000')
    cy.get('.elemento').first().click();
    cy.get('MuiDialog-root').should('be.visivel');
    cy.get('MuiDialog-root').contains('Fechar').click();
  });

  it('Open TB Periopdic', () => {
    cy.visit('localhost:3000')
    cy.get('.elemento').contains('Iron').click();
    cy.get('MuiDialog-root').should('be.visivel');
    cy.get('MuiDialog-root').contains('Fechar').click();
  });
})