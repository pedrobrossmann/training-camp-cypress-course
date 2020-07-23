/// <reference types="cypress" />
before(() => {
    cy.visit('https://wcaquino.me/cypress/componentes.html')
})

describe('Cypress basic', () => {
    it('Valida o tamanho de itens dentro de um select', () => {


        cy.get('[data-test=dataEscolaridade] option') // Consigo fazer um assert pela quantidade de itens de um select. 
            .should('have.length', 8)
    })
    
    it('Validação de itens dentro de um select', () => {

        cy.get('[data-test=dataEscolaridade] option').then($exemploDeArray =>{
            const values = [] // Criei um arry vazio
            $exemploDeArray.each(function(){
                values.push(this.innerHTML) // Pequei as informações usando essa função "innerHTML e armazenei em values"
            })
            expect(values).to.include.members(["Superior", "Mestrado"]) // Fiz a comparação se tem os tipos dentro do array
        })
            
    })

    it('Valida usando o jQurey', () => {
        cy.get('[data-testid=dataEsportes]').select(['natacao', 'Corrida', 'nada'])
        cy.get('[data-testid=dataEsportes]').then($el => {
            // expect($el.val()).to.be.equal(['natacao', 'Corrida', 'nada'])
        expect($el.val()).to.be.deep.equal(['natacao', 'Corrida', 'nada']) // Usar o deep para comparar. 
        expect($el.val()).to.have.length(3)
        })

        cy.get('[data-testid=dataEsportes]').invoke('val').should('eql', ['natacao', 'Corrida', 'nada'])
    })
})