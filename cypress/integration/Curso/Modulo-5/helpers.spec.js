/// <reference types="cypress" />

before(() => {
    cy.visit('https://wcaquino.me/cypress/componentes.html')
    cy.reload()
})

describe('Helprs', () => {
    it('Warp usando o should', () =>{

        const obj = {nome: 'User', idade: 20}
        expect(obj).to.have.property('nome')
        //expect(obj).not.to.have.property('cor')
        //obj.should('have.property', 'nome') // Eu NÃO posso fazer uma asserção diretamente, porque o OBJ não tem o should
                                              // Quem tem o shoul e a API do cypress
                                              // Para isso utilizamos o warp, para encapsular o objeto e ai utilizar o should. 
        cy.wrap(obj).should('have.property', 'nome')                               
    })
    
    it('Warp utilizando jQuery', () =>{
        const obj = {nome: 'User', idade: 20}
        expect(obj).to.have.property('nome')
        cy.wrap(obj).should('have.property', 'nome')

        cy.get('#formNome').then($elmento => {
            $elmento.val('Funciona via jQuery') // Não e recomendando porque o log do cypress se perde. 
        })                            
    })

    it('Usando warp com elemtto fora do cypress', () =>{
        const obj = {nome: 'User', idade: 20}
        expect(obj).to.have.property('nome')
        cy.wrap(obj).should('have.property', 'nome')

        cy.get('#formNome').then($elmento => {
            cy.wrap($elmento).type('Funciona via warp') // Usei o warp para acessar um elemtto que esta fora do cypress
        })                            
    })

    it('Usando warp com elemtto fora do cypress', () =>{
        const obj = {nome: 'User', idade: 20}
        expect(obj).to.have.property('nome')
        cy.wrap(obj).should('have.property', 'nome')

        const promise = new Promise((resolve, reject) =>{
            setTimeout(() => {
                resolve(10)
            }, 500)
        })
        
        cy.get('#buttonSimple').then(() => console.log('Encontrei o primeiro botão')) // Nesse caso vai imprimir em linhas separdas, já que e dificil sincronizar. Deixe na mão do cypress
        promise.then(num => console.log(num))                                         // Deixe as promiser serem gerenciadas pelo cypress, usando then ou should
        cy.get('#buttonList').then(() => console.log('Encontrei o segundo botão'))
    })

    it.only('Usando warp com elemtto fora do cypress', () =>{
        const obj = {nome: 'User', idade: 20}
        expect(obj).to.have.property('nome')
        cy.wrap(obj).should('have.property', 'nome')

        const promise = new Promise((resolve, reject) =>{
            setTimeout(() => {
                resolve(10)
            }, 500)
        })
        
        cy.get('#buttonSimple').then(() => console.log('Encontrei o primeiro botão')) // Nesse caso vai imprimir em linhas separdas, já que e dificil sincronizar. Deixe na mão do cypress
        // promise.then(num => console.log(num))                                         // Deixe as promiser serem gerenciadas pelo cypress, usando then ou should
        cy.wrap(promise).then(ret => console.log(ret))
        cy.get('#buttonList').then(() => console.log('Encontrei o segundo botão'))

        cy.wrap(1).then(num => {
            return 2
        }).should('be.equal', 2)
    })
})