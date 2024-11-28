/// <reference types="cypress" />

describe('Reqres API Tests',() => {
    it ('PUT UPDATE JOB',() => {
        cy.request('PUT', 'https://reqres.in/api/users/2',{
            name: 'Alifa',
            job: 'Leader',
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('name', 'Alifa');
            expect(response.body).to.have.property('job', 'Leader');
        })
    })

 })
