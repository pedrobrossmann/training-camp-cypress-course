/// <reference types="cypress" />
before(() => {
    cy.visit('https://wcaquino.me/cypress/componentes.html')
    cy.reload()
})

describe('Desafio do curso', () => {
    it('Exemplo usando stub', () =>{
        const stub = cy.stub().as('alerta')
        cy.on('window:alert', stub)
        cy.get('#formCadastrar').click()
            .then(() => expect(stub.getCall(0)). to.be.calledWith('Nome eh obrigatorio'))
        cy.get('#formNome').type('Maldito')

        cy.get('#formCadastrar').click()
            .then(() => expect(stub.getCall(1)). to.be.calledWith('Sobrenome eh obrigatorio'))
        cy.get('#formSobrenome').type('Kakaroto')
        
        cy.get('#formCadastrar').click()
            .then(() => expect(stub.getCall(2)). to.be.calledWith('Sexo eh obrigatorio'))
        cy.get('#formSexoMasc').click()
        
        cy.get('#formCadastrar').click()
        cy.get('#resultado')
            .find('span')
            .should('contain', 'Cadastrado!')
            
        })
    
    it('Exemplo mais comprido ', () => {
        cy.on('window:alter', msg => {
            expect(msg).to.be.equal('Nome eh obrigatorio')
            return false
        })
        cy.get('#formNome').type('Maldito')
        
        cy.on('window:alert', msg => {
            expect(msg).to.be.equal('Sobrenome eh obrigatorio')
            return false
        })
        cy.get('#formSobrenome').type('Kakaroto')

        cy.on('window:alert', msg => {
            expect(msg).to.be.equal('Sexo eh obrigatorio')
            return false
        })
        cy.get('#formSexoMasc').click()

        cy.get('#formCadastrar').click()
        
        cy.get('#resultado')
            .find('span')
            .should('contain', 'Cadastrado!')    
    })   

})    