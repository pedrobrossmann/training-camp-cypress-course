/// <reference types="cypress" />

import loc from '../../../support/locators';
import '../../../support/commandsContas'

const faker = require('faker')

before(() => {
    cy.login()
})


const tipoContaNome = `Conta ${faker.random.number(10000)}`
const nomeConta = `Conta - ${faker.random.uuid(3)}`
const valorConta = faker.random.number(3)
const interessado = faker.random.uuid(3)

describe('Integracao com todos os recursos de conta', () =>{
    it('teste supremo', () =>{

         
        //criando tipo de conta
        cy.acessarContas()

        cy.get(loc.menu.contas.nameConta).type(tipoContaNome)
        cy.get(loc.menu.contas.salvarConta).click()
        cy.get(loc.mensagem.sucesso).should('contain', 'Conta inserida com sucesso!')

        //lançando despesa na conta
        
        cy.adicionarNovaConta(nomeConta, valorConta, interessado, tipoContaNome)
        cy.clickAlert(loc.menu.movimentacao.salvarMovimentacao, 'Movimentação inserida com sucesso!')
        cy.get(loc.menu.movimentacao.listaContas).should('contain', `${nomeConta}`)
        // acessa extrado da conta e confere o valor
        cy.get(loc.home).click()
        
        cy.xpath(loc.extrato.FN_XP_Saldo(tipoContaNome)).should('contain', (valorConta))

    })
})