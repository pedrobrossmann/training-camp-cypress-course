import loc from '../support/locators'

Cypress.Commands.add('clickAlert',(locator, menssage) =>{
    cy.get(locator).click()
    cy.on('window.alert', msg =>{
        expect(msg).to.be.equal(menssage)
    })
})

Cypress.Commands.add('login', (user, pwd) =>{
    cy.visit('http://barrigareact.wcaquino.me')
    cy.get(loc.login.user).type('testepedro@teste.com')
    cy.get(loc.login.password).type('123')
    cy.clickAlert(loc.login.btn_login, 'Bem vindo, Pedro teste!')
})