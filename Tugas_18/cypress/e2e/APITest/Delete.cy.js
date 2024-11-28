/// <reference types="cypress" />

describe('Reqres API Tests',() => {
    it ('DELETE - USER',() => {
        cy.request('DELETE', 'https://reqres.in/api/users/2').then((response)=>{
            expect(response.status).to.eq(204);
        })
    })

 })
