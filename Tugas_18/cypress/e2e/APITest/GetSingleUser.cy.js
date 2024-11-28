/// <reference types="cypress" />

describe('Reqres API Tests',() => {
    it ('Get Single User',() => {
    cy.request('GET', 'https://reqres.in/api/users/2')
        .then((response)=>{
            expect(response.status).to.eq(200);
            expect(response.body.data).to.have.property('id',2);
        })
    })

 })
