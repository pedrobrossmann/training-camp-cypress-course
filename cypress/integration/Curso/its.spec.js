/// <reference types="cypress" />
before(() => {
    cy.visit('https://wcaquino.me/cypress/componentes.html')
})


describe('Its', () => {
    it('Usando its..', () =>{
        const obj = {nome: 'User', idade: 20}
        cy.wrap(obj).should('have.property', 'nome', 'User')
         
        cy.wrap(obj).its('nome').should('be.equal', 'User') // Nesse caso eu não tenho mais o objeto, peguei apenas a propriedade dentro de um objeto. 
    })

    it('Usando its 2..', () =>{
        const obj2 = {nome: 'User', idade: 20, endereco: { rua: 'rua a'}}
        cy.wrap(obj2).should('have.property', 'nome', 'User')
         
        cy.wrap(obj2).its('endereco').should('have.property', 'rua')
        cy.wrap(obj2).its('endereco').its('rua').should('contain', 'rua a') // Essa forma não e legal porque faz o retry usando o ultimo comando
        cy.wrap(obj2).its('endereco.rua').should('contains', 'rua a') // Dessa forma eu posso encadear. 
    })

    it('Usando its 2..', () =>{
        cy.title().its('length').should('be.equal', 20)
    })
      
})