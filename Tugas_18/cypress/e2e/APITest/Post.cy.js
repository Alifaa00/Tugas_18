/// <reference types="cypress" />

 describe('Reqres API Tests',() => {
    it ('POST - CREATE USER',() => {
    cy.request('POST', 'https://reqres.in/api/users',{
        name:'Alifa',
        job: 'QA',
    }).then((response)=>{
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property('name','Alifa');
        expect(response.body).to.have.property('job','QA');
        });
    })

 })
