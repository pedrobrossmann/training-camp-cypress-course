/// <reference types="cypress" />
const faker = require('faker')

before(() => {
    cy.login()
})

describe('Testes relacionados a conta', ()=> {
    it('Insert new bill', () => {
        const nanmeTobill = `Conta ${faker.random.number(10000)}`

        cy.get('[data-test=menu-settings]').click()
        cy.get('[href="/contas"]').click()
        cy.get('[data-test=nome]').type(nanmeTobill)
        cy.get('.btn').click()

        cy.get('.toast-success').should('contain', 'Conta inserida com sucesso!')
    
    })

    it('Change bill', () => {

        const dadosDaConta = {
            primeiroNome:  `Conta ${faker.random.number(10000)}`,
            Nomealterado: `Conta ${faker.random.number(10000)}`
        }
        cy.get('[data-test=menu-settings]').click()
        cy.get('[href="/contas"]').click()
        cy.get('[data-test=nome]').type(dadosDaConta.primeiroNome)
        cy.get('.btn').click()

        cy.get('.toast-success').should('contain', 'Conta inserida com sucesso!')
        
        cy.xpath(`//table//td[contains(., '${dadosDaConta.primeiroNome}')]/..//i[@class='far fa-edit']`).click()
        cy.get('[data-test=nome]')
            .clear()
            .type(dadosDaConta.Nomealterado)
        cy.get('.btn').click()

        cy.get('.toast-success').should('contain', 'Conta atualizada com sucesso!')
        cy.xpath(`//table//td[contains(., '${dadosDaConta.Nomealterado}')]/..//i[@class='far fa-edit']`).click()    
        
    })
})