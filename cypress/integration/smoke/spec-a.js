/// <reference types="cypress" />

describe('Example site smok test', () => {
  it('loads', () => {
    cy.visit('/')
    cy.wait(5000)
    cy.contains('h1', 'cypress-workshop-ci-example').should('be.visible')
  })
})
