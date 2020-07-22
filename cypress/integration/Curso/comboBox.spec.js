/// <reference types="cypress" />
before(() => {
    cy.visit('https://wcaquino.me/cypress/componentes.html')
})

describe('uso de combo box', () =>{
    it('Pirmeiro teste de combo box', () =>{
        cy.get("[data-test=dataEscolaridade]")
        .select('2o grau incompleto')
        .should('have.value', '2grauincomp')
        .should('not.have.value', 'mestrado')

    })

    it('Segundo teste com combo multiplo', () =>{
        cy.get("[data-testid=dataEsportes]")
        .select(['natacao', 'Corrida'])
        // Para um combo multiplo eu tenho que mandar o value dentro de um array

        //TODO Validar a assertiva desse teste

    })
})