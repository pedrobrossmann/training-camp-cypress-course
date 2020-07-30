/// <reference types="cypress"/>
before(() => {
    cy.visit('https://wcaquino.me/cypress/componentes.html')
})

beforeEach(() => {
    cy.reload()
})

describe('Deve aguardar o elemtno estar disponivel', () =>{
    it('Primeiro teste espera', () => {
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo').should('exist')
        cy.get('#novoCampo').type('Funciona')
    })
    
    it.only('Should vs then', () =>{
        cy.get('#buttonListDOM').then($el =>{
            //console.log($el)
            expect($el).to.have.length(1)
            cy.get('#buttonList')
        })
    })
    
})