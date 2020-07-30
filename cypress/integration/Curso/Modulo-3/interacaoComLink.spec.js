/// <reference types="cypress" />

describe('Cypress basic link', () => {
    it('Should visit a page and assert title', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('[href="#"]').click()
        cy.get('#resultado').should('have.text', 'Voltou!')

        cy.reload()
        cy.get('#resultado').should('have.not.text', 'Voltou!')
        cy.get('[href="#"]').click()
        cy.get('#resultado').should('have.text', 'Voltou!')

    })
})