Cypress.Commands.add('clickAlert',(locator, menssage) =>{
    cy.get(locator).click()
    cy.on('window.alert', msg =>{
        expect(msg).to.be.equal(menssage)
    })
})

Cypress.Commands.add('login', (user, pwd) =>{
    cy.visit('http://barrigareact.wcaquino.me')
    cy.get('[data-test=email]').type('testepedro@teste.com')
    cy.get('[data-test=passwd]').type('123')
    cy.clickAlert('.btn', 'Bem vindo, Pedro teste!')
})