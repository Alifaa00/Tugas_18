/// <reference types="cypress" />

describe('Reqres API Tests',() => {
    it ('PUT UPDATE NAME',() => {
        cy.request('PATCH', 'https://reqres.in/api/users/2',{
            name: 'Ifa',
            job: 'Leader',
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('name', 'Ifa');
            expect(response.body).to.have.property('job', 'Leader');
        })
    })

 })
