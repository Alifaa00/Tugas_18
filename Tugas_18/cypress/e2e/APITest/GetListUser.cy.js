/// <reference types="cypress" />

 describe('Reqres API Tests',() => {
    it ('Get List User',() => {
        cy.request('GET', 'https://reqres.in/api/users?page=2').then((response)=>{
            expect(response.status).to.eq(200);
            expect(response.body.data).to.not.be.null            
        })
    })

 })
