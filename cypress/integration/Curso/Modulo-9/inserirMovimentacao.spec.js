/// <reference types="cypress" />

import loc from '../../../support/locators';

const faker = require('faker')

before(() => {
    cy.login()
})

describe('Testando movimentacao de contas', () =>{
    it('Inserindo conta a receber quitada', () =>{
        const todaysDate = Cypress.moment().format('YYYY-MM-DD')
        const nomeConta = `Conta - ${faker.random.uuid(3)}`
     
        cy.get(loc.menu.movimentacao.selectConfig).click()
        cy.get(loc.menu.movimentacao.dataTransacao)
            .type(todaysDate)
        cy.get(loc.menu.movimentacao.dataPagamento)
            .type(todaysDate)
        cy.get(loc.menu.movimentacao.descricao).type(nomeConta)
        cy.get(loc.menu.movimentacao.valor).type(faker.random.number(100))
        cy.get(loc.menu.movimentacao.interessado).type(faker.random.uuid(3))
        cy.get(loc.menu.movimentacao.status).click()
        
        cy.clickAlert(loc.menu.movimentacao.salvarMovimentacao, 'Movimentação inserida com sucesso!')
        cy.get(loc.menu.movimentacao.listaContas).should('contain', `${nomeConta}`)

        //cy.get('.list-group li').should('have.length', 7) //Exemplo para verificar o tamanho
    })

    it('Inserindo conta com função', () =>{
        const todaysDate = Cypress.moment().format('YYYY-MM-DD')
        const nomeConta = `Conta - ${faker.random.uuid(3)}`
        const valorConta = faker.random.number(100)
        const interessado = faker.random.uuid(3) 
        
        // Como armazenar um valor de um elemento e comprar se e maior. 
        cy.adicionarNovaConta(todaysDate, todaysDate, nomeConta, valorConta, interessado)
        
        cy.clickAlert(loc.menu.movimentacao.salvarMovimentacao, 'Movimentação inserida com sucesso!')
        cy.get(loc.menu.movimentacao.listaContas).should('contain', `${nomeConta}`)
    })

    it.only('Inserindo conta e removendo ', () =>{
        const todaysDate = Cypress.moment().format('YYYY-MM-DD')
        const nomeConta = `Conta - ${faker.random.uuid(3)}`
        const valorConta = faker.random.number(100)
        const interessado = faker.random.uuid(3) 
        
        // Como armazenar um valor de um elemento e comprar se e maior. 
        cy.adicionarNovaConta(todaysDate, todaysDate, nomeConta, valorConta, interessado)
        
        cy.clickAlert(loc.menu.movimentacao.salvarMovimentacao, 'Movimentação inserida com sucesso!')
        cy.get(loc.menu.movimentacao.listaContas).should('contain', `${nomeConta}`)
        
        cy.xpath(loc.extrato.FN_excluirConta(nomeConta)).click()
        cy.alert('Movimentação removida com sucesso!')    
    })
})