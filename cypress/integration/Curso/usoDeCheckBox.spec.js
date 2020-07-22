/// <reference types="cypress" />
before(() => {
    cy.visit('https://wcaquino.me/cypress/componentes.html')
})

describe('Uso de check box', () =>{
    it('Primeiro deste de check box', () =>{
        cy.get("[name='formComidaFavorita']").click({ multiple: true })
        
        cy.get('#formComidaPizza')
            .should('be.checked')
    })
})