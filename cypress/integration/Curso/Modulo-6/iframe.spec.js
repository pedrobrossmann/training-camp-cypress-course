/// <reference types="cypress"/>

describe('Work with iFrames', () =>{
    it('Deve preencher campo de texto', () =>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('#frame1').then(iframe => {
            const bodyDoIframe = iframe.contents().find('body')
            cy.wrap(bodyDoIframe).find('#tfield')
                .type('funciona')
                .should('have.value', 'funciona')
        })
    })
})