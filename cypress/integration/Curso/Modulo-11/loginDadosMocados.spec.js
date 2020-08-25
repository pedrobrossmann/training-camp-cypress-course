/// <reference types="cypress" />

import loc from '../../../support/locators';
import '../../../support/commandsContas'

describe('Dados mocados', () => {
    it('login', () =>{
        cy.server()
        cy.route({
            method: 'POST',
            url: '/signin',
            response: {
                id: 1000,
                nome: 'Usuario falso',
                token: 'UMA STRING MUITO LOCA, TAMANHO DA FORÇA JEDI'
            }
        }).as('signin')

        cy.route({
            method: 'GET',
            url: '/saldo',
            response: [{
                conta_id: 1000,
                conta: 'Banco central',
                saldo: '100',
            },
            {
                conta_id: 999,
                conta: 'Carteira',
                saldo: '10000000,00'
            }]
        
        })
        cy.login('usuario errado', 'senha errada')
    })
})