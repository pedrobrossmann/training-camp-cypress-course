/// <reference types="cypress" />

before(() => {
    cy.visit('https://wcaquino.me/cypress/componentes.html')
    cy.reload()
})

describe('Teste com campos de textos', () =>{
    it('Primeiro teste', () =>{
    cy.get('#formNome').type('Nome que quero digitar', { delay: 10 })
    cy.get('#formNome').should('have.value', 'Nome que quero digitar')

    })

    it('segundo teste', () =>{
        cy.get('#elementosForm\\:sugestoes')
            .type('Nome do text area', { delay: 10 })
            .should('have.value', 'Nome do text area')
    
        })

    it('terceiro teste', () =>{
        cy.get('#formSobrenome')
            .type('nome12345{backspace}{backspace}', { delay: 100 })
            
        })
    
    it('terceiro teste', () =>{
        cy.get('#formSobrenome')
            .type('erro{selectall}acerto', { delay: 100 })
            .should('have.value', 'acerto')
                
        })       
})