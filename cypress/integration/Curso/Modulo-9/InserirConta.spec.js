/// <reference types="cypress" />

import loc from '../../../support/locators';
import '../../../support/commandsContas'

const faker = require('faker')

before(() => {
    cy.login()
})

let dadosConta = {
    primeiroNome: `Conta ${faker.random.number(10000)}`,
    segundoNome: `Conta ${faker.random.number(10000)}`,
    nomeAlterado: `Conta ${faker.random.number(10000)}`
}

describe('Testes relacionados a conta', ()=> {
    it('Inserir uma nova conta', () => {
        cy.acessarContas()
        
        cy.get(loc.menu.contas.nameConta).type(dadosConta.primeiroNome)
        cy.get(loc.menu.contas.salvarConta).click()

        cy.get(loc.mensagem.sucesso).should('contain', 'Conta inserida com sucesso!')
        
    })

    it('Alteração do nome da conta', () => {
        cy.acessarContas()
        
        cy.get(loc.menu.contas.nameConta).type(dadosConta.segundoNome)
        cy.get(loc.menu.contas.salvarConta).click()

        cy.get(loc.mensagem.sucesso).should('contain', 'Conta inserida com sucesso!')
        
        cy.xpath(`//table//td[contains(., '${dadosConta.segundoNome}')]/..//i[@class='far fa-edit']`).click()
        cy.get(loc.menu.contas.nameConta)
            .clear()
            .type(dadosConta.nomeAlterado)
            cy.get(loc.menu.contas.salvarConta).click()

        cy.get(loc.mensagem.sucesso).should('contain', 'Conta atualizada com sucesso!')
        cy.xpath(`//table//td[contains(., '${dadosConta.nomeAlterado}')]/..//i[@class='far fa-edit']`).click()      
    })

    it('Inserir conta com o mesmo nome', () => {
        cy.acessarContas()

        cy.get(loc.menu.contas.nameConta)
            .clear()
            .type('Conta para alterar')
        cy.get(loc.menu.contas.salvarConta).click()

        cy.get(loc.mensagem.erro).should('contain', 'Erro: Error: Request failed with status code 400')
    })

})