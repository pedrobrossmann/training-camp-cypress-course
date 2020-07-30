/// <reference types="cypress" />
before(() => {
    cy.visit('https://wcaquino.me/cypress/componentes.html')
})

describe('teste com radio buttom', () =>{
    it('Primeiro teste com radio buttom', () => {
    cy.get('#formSexoMasc')
        .click()
        .should('be.checked')
    cy.get('#formSexoFem')
        .should('not.be.checked')    
    })

    it('Segundo teste com radio buttom', () => {
        cy.get('#formSexoMasc')
            .click()
            .should('be.checked')
        cy.get('#formSexoFem')
            .should('not.be.checked')  
            
        cy.get("[name='formSexo']").should('have.length', 2)
        // Eu uso o [] para pesquisar a propriedade de um elemento
        // Nesse caso eu pesquisei o formSexo, e confirmei se tinha 2 dele na tela.
        })
})