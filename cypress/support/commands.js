Cypress.Commands.add('clickAlert',(locator, menssage) =>{
    cy.get(locator).click()
    cy.on('window.alert', msg =>{
        expect(msg).to.be.equal(menssage)
    })
})