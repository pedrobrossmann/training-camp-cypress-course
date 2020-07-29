/// <reference types="cypress" />

describe('Work to file dinamic', () => {

    beforeEach(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    const foods = ['carne', 'frango', 'pizza', 'vegetariano']
    foods.forEach(food =>{
        it(`Cadastro com a comida ${food} `, function () {
    
            cy.get('#formNome').type('Nome')
            cy.get('#formSobrenome').type('Sobrenome')
            cy.get('#formSexoMasc').click()
            cy.get(`[name=formComidaFavorita][value=${food}`).click()
            //cy.xpath(`//label[contains(.,'${food}')]/preceding-sibling::input`).click()
            cy.get("[data-test=dataEscolaridade]")
                    .select('2o grau incompleto')
            
            cy.get('#formCadastrar').click()
            cy.get('#resultado > :nth-child(1)').should('contain', 'Cadastrado!')
            cy.reload()
        })
    })
        it('Deve selecionar todas as comidas', () => {
            cy.get('#formNome').type('Nome')
            cy.get('#formSobrenome').type('Sobrenome')
            cy.get('#formSexoMasc').click()
            cy.get(`[name=formComidaFavorita]`).click({multiple: true})
            
            cy.clickAlert('#formCadastrar', 'Tem certeza que voce eh vegetariano?')
        })

        it.only('Deve selecionar todas as comidas menos vegetariano', () => {
            cy.get('#formNome').type('Nome')
            cy.get('#formSobrenome').type('Sobrenome')
            cy.get('#formSexoMasc').click()
            cy.get(`[name=formComidaFavorita]`).each($el => {
                if($el.val() != 'vegetariano')
                    cy.wrap($el).click()
            })
            
            cy.clickAlert('#formCadastrar', 'Tem certeza que voce eh vegetariano?')
        })
})        