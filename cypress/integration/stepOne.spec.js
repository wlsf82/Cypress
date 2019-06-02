describe("Etapa 1", () => {
  beforeEach(() => cy.visit("/cadastro/etapa-1", {"failOnStatusCode": false}))

  it("Campo Obrigatório", () => {
      cy.get("[type='submit']").click()

      cy.get(".text-danger")
          .should("contain", "Campo obrigatório.")
  })

  it("Inserir E-mail Inválido", () => {
      cy.get("#email").type("foo@.com")
      cy.get("[type='submit']").click()
      
      cy.get(".text-danger")
          .should("contain", "E-mail inválido.")
  })

  it("Inserir E-mail Existente", () => {
      cy.get("#email").type("dofstilix@outlook.com")
      cy.get("[type='submit']").click()

      cy.get(".alert")
          .should("contain", " E-mail já cadastrado, clique aqui para efetuar seu login.")
  })
})