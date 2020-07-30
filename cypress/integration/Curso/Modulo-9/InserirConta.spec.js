/// <reference types="cypress" />
const faker = require('faker')

before(() => {
    cy.login()
})

describe('Testes relacionados a conta', ()=> {
    it('Insert new bill', () => {
        cy.get('[data-test=menu-settings]').click()
        cy.get('[href="/contas"]').click()
        
        const nanmeTobill = `Conta ${faker.random.number(10000)}`
        
        cy.get('[data-test=nome]').type(nanmeTobill)
        cy.get('.btn').click()

        cy.get('.toast-success').should('contain', 'Conta inserida com sucesso!')

    
    })
})