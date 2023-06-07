describe('LinusPaulingDiagram', () => {
  it('renderiza corretamente os elementos da modal', () => {
    cy.visit('http://localhost:3000/'); 
    cy.get('.elemento').contains('Hydrogen').click();
    cy.get('.shell').should('exist');
    cy.get('.sublevels').should('exist');
    cy.get('.electron').should('exist');
    cy.get('.electron-value').should('exist');
    cy.get('.electron-count').should('exist');
     // Fecha o diálogo
    cy.get('.MuiDialog-root').contains('Fechar').click();
  });
  it('renderiza corretamente as camadas do elemto Silver', () => {
    cy.visit('http://localhost:3000/'); 
    cy.get('.elemento').contains('Silver').click();
    cy.get('.shell').should(($element) => {
       // verifica se o texto contém as letras "K" "L" "M" "n"
      const text = $element.text(); // obtém o texto do elemento
      expect(text).to.include('K');
      expect(text).to.include('L');
      expect(text).to.include('M');
      expect(text).to.include('N');
    });
    cy.get('.MuiDialog-root').contains('Fechar').click();
  });

  it('renderiza corretamente as camadas do elemto Oganessônio', () => {
    cy.visit('http://localhost:3000/'); 
    cy.get('.elemento').contains('Oganessônio').click();
    cy.get('.shell').should(($element) => {
       // verifica se o texto contém as letras "K" "L" "M" "n"
      const text = $element.text(); // obtém o texto do elemento
      expect(text).to.include('K');
      expect(text).to.include('L');
      expect(text).to.include('M');
      expect(text).to.include('N');
      expect(text).to.include('O');
      expect(text).to.include('P');
      expect(text).to.include('Q');
    });
    cy.get('.MuiDialog-root').contains('Fechar').click();
  });
  
  it('renderiza corretamente as camadas do elemto Hydrogen', () => {
    cy.visit('http://localhost:3000/'); 
    cy.get('.elemento').contains('Hydrogen').click();
    cy.get('.shell').should(($element) => {
       // verifica se o texto contém as letras "K" "L" "M" "n"
      const text = $element.text(); // obtém o texto do elemento
      expect(text).to.include('K');
      expect(text).not.to.include('L');
      expect(text).not.to.include('M');
      expect(text).not.to.include('N');
      expect(text).not.to.include('O');
      expect(text).not.to.include('P');
      expect(text).not.to.include('Q');
    });
    cy.get('.MuiDialog-root').contains('Fechar').click();
  });
});