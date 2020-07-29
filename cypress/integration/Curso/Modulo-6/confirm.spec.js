/// <reference types="cypress" />
before(() => {
    cy.visit('https://wcaquino.me/cypress/componentes.html')
})

beforeEach(() =>{
    cy.reload()
})

describe('Confirm', () => {
    it('Exemplo com confirm', () => {
        cy.on('window:confirm', msg => {
            expect(msg).to.be.equal('Confirm Simples')
        })
        cy.on('window:alert', msg => {
            expect(msg).to.be.equal('Confirmado')
        })
        cy.get('#confirm').click()

    })

    it('Exemplo com deny', () => {
        cy.on('window:confirm', msg => {
            expect(msg).to.be.equal('Confirm Simples')
            return false
        })
        cy.on('window:alert', msg => {
            expect(msg).to.be.equal('Negado')
        })
        cy.get('#confirm').click()

    })
})    