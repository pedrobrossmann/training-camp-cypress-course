/// <reference types="cypress" />
before(() => {
    cy.visit('https://wcaquino.me/cypress/componentes.html')
})

describe('Invoke', () => {
    it('Usando invoke 1..', () =>{
        const getValue = () => 1

        cy.wrap({ fn: getValue}).invoke('fn').should('be.equal', 1)
    })

    it('Usando invoke 2..', () =>{
        const soma = (a, b) => a + b

        cy.wrap({ fn: soma}).invoke('fn', 2, 5).should('be.equal', 7)
    })

    it('Usando invoke 3..', () =>{
        cy.get('#formNome').invoke('val', 'Texto via invoke')
        cy.window().invoke('alert', 'Dá pra ver?') // Toda janela tem o elemento window, serve para ter controle. 
        cy.get('#resultado')
            .invoke('html', '<input type="button" value="hacked!"/>')
    })
      
})