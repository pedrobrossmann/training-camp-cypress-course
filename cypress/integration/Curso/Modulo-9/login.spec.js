/// <reference types="cypress" />

import loc from '../../../support/locators'

describe('teste login', () =>{
    it('Teste usando locators', () =>{

    cy.visit('http://barrigareact.wcaquino.me')
    cy.get(loc.login.user).type('testepedro@teste.com')
    cy.get(loc.login.password).type('123')
    cy.get(loc.login.btn_login).click()
    
    cy.clickAlert('.btn', 'Bem vindo, Pedro teste!')
    })
})