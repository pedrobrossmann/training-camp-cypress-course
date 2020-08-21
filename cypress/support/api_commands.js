Cypress.Commands.add('getToken',(user, passwsd) =>{
    cy.request({
        method: 'POST',
        url: '/signin',
        body: {
            email: user,
            redirecionar: false,
            senha: passwsd
        }
    }).its('body.token').should('not.be.empty')
    .then(token =>{
        return token
    })
})

Cypress.Commands.add('resetRest', () => {
    cy.getToken('pedrobrossmann@gmail.com', '01Infinity02').then(token => {
        cy.request({
            method: 'GET',
            url: '/reset',
            headers: { Authorization: `JWT ${token}` }
        }).its('status').should('be.equal', 200)
    })
})

Cypress.Commands.add('getContaByName', (name) => {
    cy.getToken('pedrobrossmann@gmail.com', '01Infinity02').then(token => {
        cy.request({
            method: 'GET',
            url: '/contas',
            headers:{ Authorization: `JWT ${token}`},
            qs: {
                nome: name
            }
        }).then(res => {
            return res.body[0].id
        })
    })    
})