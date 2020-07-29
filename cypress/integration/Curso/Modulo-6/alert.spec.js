/// <reference types="cypress" />
before(() => {
    cy.visit('https://wcaquino.me/cypress/componentes.html')
})

beforeEach(() =>{
    cy.reload()
})

describe('Alert simples', () => {
    it('Exemplo com uso de alert simples', () => {
        cy.get('#alert').click()
        cy.on('window:alert', msg => {
            console.log(msg)
            expect(msg).to.be.equal('Alert Simples')
        })

    })

    it('Alert com mock ', () => {
        
        const stub = cy.stub().as('alerta')
        cy.on('window:alert', stub)
        cy.get('#alert').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Alert Simples')
        })

    })
})    