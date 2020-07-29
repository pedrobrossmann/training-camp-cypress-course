/// <reference types="cypress"/>

describe('Work with popup', () =>{
    it('Deve testar o popup foi invocado diretamente', () =>{
        cy.visit('https://wcaquino.me/cypress/frame.html')
        cy.get('#otherButton').click()
        cy.on('window:alert', msg => {
            expect(msg).to.be.equal('Click OK!')
        })
    })

    it('Deve verificar se o popup foi invocado', () =>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.window().then(win => {
            cy.stub(win, 'open').as('winOpen')
        })
        cy.get('#buttonPopUp').click()
        cy.get('@winOpen').should('be.called')
    })
  describe('With links...', ()=>{
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    it.only('Check popup url', () => {
        cy.contains('Popup2')
            .should('have.prop', 'href')
            .and('equal', 'https://wcaquino.me/cypress/frame.html')
    })

  })  
})