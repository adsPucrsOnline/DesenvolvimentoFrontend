describe("PostcardAdd", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/addpostcard/"); // Rota para acessar a página de adicionar postcard
  });

  it("should add a new postcard", () => {
    cy.intercept("POST", "http://localhost:5000/postcards").as("savePostcard");

    cy.get('input[name="name"]').type("Postcard 1");
    cy.get('input[name="cidade"]').type("Cidade 1");
    cy.get('input[name="pais"]').type("País 1");
    cy.get('input[name="descricao"]').type("Descrição 1");
    cy.get('input[name="imageUrl"]').type("https://i.pinimg.com/originals/15/f3/3f/15f33f9ff680c4439d54e50d8e35a2cf.png");

    cy.get("button").contains("Salvar").click();

    cy.wait("@savePostcard").then((xhr) => {
      expect(xhr.response.statusCode).to.equal(201);
      // Aqui você pode fazer mais verificações se o postcard foi salvo corretamente
    });

    cy.location("pathname").should("eq", "/list");
  });
});
