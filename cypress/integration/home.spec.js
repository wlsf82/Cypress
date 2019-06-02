describe("Home", () => {
    beforeEach(() => cy.visit("/"))

    it("Verifica URL etapa-1", () => {
        cy.get("a[href='/cadastro/etapa-1']").click()
        
        cy.url().should(
            "be.equal",
            `${Cypress.config().baseUrl}/cadastro/etapa-1`
        )
    })
})