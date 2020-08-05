import loc from '../support/locators'

Cypress.Commands.add('acessarContas', () =>{
    cy.get(loc.menu.contas.selectConfig).click()
    cy.get(loc.menu.contas.acessarPaginaContas).click()
})