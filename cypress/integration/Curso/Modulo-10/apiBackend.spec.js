/// <reference types="cypress" />
const faker = require('faker')
const referenciaConta = faker.random.number(5000)

describe('Should test a service level', () =>{
    let token
    before(() => {
        cy.getToken('teste@gmail.com', 'Senha')
            .then(tkn => {
                token = tkn
            })

    })
    
    it('Validando login via API', () =>{
        cy.request({
            method: 'POST',
            url: '/signin',
            body: {
                email: "pedrobrossmann@gmail.com",
                redirecionar: false,
                senha: "01Infinity02"
            }
        }).its('body.token').should('not.be.empty')
    })

    it('Iserindo conta', () =>{
        cy.getToken('pedrobrossmann@gmail.com', '01Infinity02')
        .then(token =>{
            cy.request({
                method: 'POST',
                url: '/contas',
                headers:{ Authorization: `JWT ${token}`},
                body: {
                    nome: `Conta - ${referenciaConta}`,
                }
            }).as('response')
        })

        cy.get('@response').then(res => {
            expect(res.status).to.be.equal(201)
            expect(res.body).to.have.property('id')
            expect(res.body).to.have.property('nome', `Conta - ${referenciaConta}`)
        })
        
    })

    it('Alterando conta', () =>{
        cy.resetRest()
        cy.request({
            method: 'GET',
            url: '/contas',
            headers:{ Authorization: `JWT ${token}`},
            qs: {
                nome: 'Conta para alterar'
            }
        }).then(res => {
            cy.request({
                url: `/contas/${res.body[0].id}`,
                method: 'PUT',
                headers: { Authorization: `JWT ${token}`},
                body: {
                    nome: 'Conta alterada via rest'
                }
            }).as('response')
    
            cy.get('@response').its('status').should('be.equal', 200)
        })
       

    })

    it('Inserindo conta com o mesmo nome', () =>{
        cy.getToken('pedrobrossmann@gmail.com', '01Infinity02')
        .then(token =>{
            cy.request({
                method: 'POST',
                url: '/contas',
                headers:{ Authorization: `JWT ${token}`},
                body: {
                    nome: 'Conta mesmo nome',
                },
                failOnStatusCode: false
            }).as('response')
        })

        cy.get('@response').then(res => {
            console.log(res)
            expect(res.status).to.be.equal(400)
            expect(res.body.error).to.be.equal('Já existe uma conta com esse nome!')
        })
    
    })

    it.only('Inserindo conta com o mesmo nome', () =>{
        cy.getContaByName('Conta para movimentacoes')
            .then(contaId =>{
                cy.request({
                    method: 'POST',
                    url: 'transacoes',
                    headers:{ Authorization: `JWT ${token}`},
                    body: {
                        conta_id: contaId,
                        data_pagamento: Cypress.moment().add({days: 1}).format('DD/MM/YYYY'),
                        data_transacao: Cypress.moment().format('DD/MM/YYYY'),
                        descricao: "DESCRICAO CONTA",
                        envolvido: "EU SOU O INTERESSADO",
                        status: true,
                        tipo: "REC",
                        valor: "200",
                    }
                }).as('response')    
        })
        cy.get('@response').its('status').should('be.equal', 201)
        cy.get('@response').its('body.id').should('exist')
    })    
})
