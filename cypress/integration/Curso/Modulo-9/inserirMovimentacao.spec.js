/// <reference types="cypress" />

import loc from '../../../support/locators';

const faker = require('faker')

before(() => {
    cy.login()
})

describe('Testando movimentacao de contas', () =>{
    it('Inserindo conta a receber quitada', () =>{
        const nomeConta = `Conta - ${faker.random.uuid(3)}`
     
        cy.get(loc.menu.movimentacao.selectConfig).click()
        cy.get(loc.menu.movimentacao.descricao).type(nomeConta)
        cy.get(loc.menu.movimentacao.valor).type(faker.random.number(100))
        cy.get(loc.menu.movimentacao.interessado).type(faker.random.uuid(3))
        cy.get(loc.menu.movimentacao.status).click()
        
        cy.clickAlert(loc.menu.movimentacao.salvarMovimentacao, 'Movimentação inserida com sucesso!')
        cy.get(loc.menu.movimentacao.listaContas).should('contain', `${nomeConta}`)

        //cy.get('.list-group li').should('have.length', 7) //Exemplo para verificar o tamanho
    })

    it('Inserindo conta com função', () =>{
        const nomeConta = `Conta - ${faker.random.uuid(3)}`
        const valorConta = faker.random.number(100)
        const interessado = faker.random.uuid(3) 
        
        // Como armazenar um valor de um elemento e comprar se e maior. 
        cy.adicionarNovaConta(nomeConta, valorConta, interessado,'Conta para alterar')
        
        cy.clickAlert(loc.menu.movimentacao.salvarMovimentacao, 'Movimentação inserida com sucesso!')
        cy.get(loc.menu.movimentacao.listaContas).should('contain', `${nomeConta}`)
    })

    it('Inserindo conta e removendo ', () =>{
        const nomeConta = `Conta - ${faker.random.uuid(3)}`
        const valorConta = faker.random.number(100)
        const interessado = faker.random.uuid(3) 
        
        // Como armazenar um valor de um elemento e comprar se e maior. 
        cy.adicionarNovaConta(nomeConta, valorConta, interessado,'Conta para alterar')
        
        cy.clickAlert(loc.menu.movimentacao.salvarMovimentacao, 'Movimentação inserida com sucesso!')
        cy.get(loc.menu.movimentacao.listaContas).should('contain', `${nomeConta}`)
        
        cy.xpath(loc.extrato.FN_excluirConta(nomeConta)).click()
        cy.alert('Movimentação removida com sucesso!')    
    })
})