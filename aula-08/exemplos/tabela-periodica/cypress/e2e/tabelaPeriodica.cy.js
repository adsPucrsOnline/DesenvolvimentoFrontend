describe('TabelaPeriodica', () => {
  it('opens the dialog on element click', () => {
    cy.visit('http://localhost:3000/'); 
    // Clica no primeiro elemento
    cy.get('.elemento').first().click();
    // Verifica se o diálogo está aberto
    cy.get('.MuiDialog-root').should('be.visible');
    // Fecha o diálogo
    cy.get('.MuiDialog-root').contains('Fechar').click();
  });

  it('renderização elemento Hydrogen', () => {
    cy.visit('http://localhost:3000/'); 
    cy.get('.elemento').contains('Hydrogen').click();  
    // Verifica se o diálogo está aberto
    cy.get('.MuiDialog-root').should('be.visible');
    // Fecha o diálogo
    cy.get('.MuiDialog-root').contains('Fechar').click();
  });

  it('renderização elemento Cesium', () => {
    cy.visit('http://localhost:3000/'); 
    cy.get('.elemento').contains('Cesium').click(); 
    // Verifica se o diálogo está aberto
    cy.get('.MuiDialog-root').should('be.visible');
    // Fecha o diálogo 
    cy.get('.MuiDialog-root').contains('Fechar').click();
  });

  it('renderização elemento Thorium', () => {
    cy.visit('http://localhost:3000/'); 
    cy.get('.elemento').contains('Thorium').click();
    
    // Verifica se o diálogo está aberto
    cy.get('.MuiDialog-root').should('be.visible');

    // Fecha o diálogo 
    cy.get('.MuiDialog-root').contains('Fechar').click();
  });

  it('renderização elemento Nobélio', () => {
    cy.visit('http://localhost:3000/'); 
    cy.get('.elemento').contains('Nobélio').click();   
    // Verifica se o diálogo está aberto
    cy.get('.MuiDialog-root').should('be.visible');
    // Fecha o diálogo   
    cy.get('.MuiDialog-root').contains('Fechar').click();
  });

  it('renderização elemento Oganessônio', () => {
    cy.visit('http://localhost:3000/'); 
    cy.get('.elemento').contains('Oganessônio').click();   
    // Verifica se o diálogo está aberto
    cy.get('.MuiDialog-root').should('be.visible');
    // Fecha o diálogo    
    cy.get('.MuiDialog-root').contains('Fechar').click();
  });

  it('renderização elemento Carbon', () => {
    cy.visit('http://localhost:3000/'); 
    cy.get('.elemento').contains('Carbon').click();   
    // Verifica se o diálogo está aberto
    cy.get('.MuiDialog-root').should('be.visible');
    // Fecha o diálogo    
    cy.get('.MuiDialog-root').contains('Fechar').click();
  });
});

