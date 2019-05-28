describe("POC - Work", () => {
    beforeEach(() => cy.visit("/"))

    it("Verifica Url etapa-1", () => {
        cy.passoUm()
        
        cy.url().should(
            "be.equal",
            `${Cypress.config().baseUrl}/cadastro/etapa-1`
        )
    })

    it("Campo Obrigatório", () => {
        cy.passoUm()

        cy.get("[type='submit']").click()

        cy.get(".text-danger")
            .should("contain", "Campo obrigatório.")
    })

    it("Inserir E-mail Inválido", () => {
        cy.passoUm()

        cy.get("#email").type("foo@.com")
        cy.get("[type='submit']").click()
        
        cy.get(".text-danger")
            .should("contain", "E-mail inválido.")
    })

    it("Inserir E-mail Existente", () => {
        cy.passoUm()

        cy.get("#email").type("dofstilix@outlook.com")
        cy.get("[type='submit']").click()

        cy.get(".alert")
            .should("contain", " E-mail já cadastrado, clique aqui para efetuar seu login.")
    })
})