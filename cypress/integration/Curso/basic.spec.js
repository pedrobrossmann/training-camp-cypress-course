/// <reference types="cypress" />

describe('Cypress basic', () => {
    it('Should visit a page and assert title', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')

        cy.title().should('be.equal', 'Campo de Treinamento')
        cy.title().should('contain', 'Campo')

        cy.title().then(title => {
            console.log(title)

            cy.get('#formNome').type(title)
        })
    })

    it.only('Should visit a page and assert title', () => {
        let syncTitle
        cy.visit('https://wcaquino.me/cypress/componentes.html')

        cy.title().then(title => {
            console.log(title)
            cy.get('#formNome').type(title)
            syncTitle = title
        })
        cy.get('[data-cy=dataSobrenome]').then($el =>{
            $el.val(syncTitle)
        })
    })
})