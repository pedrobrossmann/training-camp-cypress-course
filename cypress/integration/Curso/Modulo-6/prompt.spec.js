/// <reference types="cypress" />
before(() => {
    cy.visit('https://wcaquino.me/cypress/componentes.html')
})

beforeEach(() =>{
    cy.reload()
})

describe('Prompt', () => {
    it('Exemplo com prompt', () => {
        cy.window().then(win => {
            cy.stub(win, 'prompt').returns('42')
        })
        cy.on('window:confirm', msg => {
            expect(msg).to.be.equal('Era 42?')
        })

        cy.on('window:alert', msg => {
            expect(msg).to.be.equal(':D')
        })

        cy.get('#prompt').click()

    })

})    