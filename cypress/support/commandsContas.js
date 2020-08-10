import loc from '../support/locators'

Cypress.Commands.add('acessarContas', () =>{
    cy.get(loc.menu.contas.selectConfig).click()
    cy.get(loc.menu.contas.acessarPaginaContas).click()
})

Cypress.Commands.add('adicionarNovaConta', (nome, valor, interessado, nomeTipoConta) =>{
    cy.get(loc.menu.movimentacao.selectConfig).click()
    cy.get(loc.menu.movimentacao.descricao).type(nome)
    cy.get(loc.menu.movimentacao.valor).type(valor)
    cy.get(loc.menu.movimentacao.interessado).type(interessado)
    cy.get(loc.menu.movimentacao.tipoConta).select(nomeTipoConta)
    cy.get(loc.menu.movimentacao.status).click()
})