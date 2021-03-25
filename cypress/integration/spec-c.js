/// <reference types="cypress" />

describe('Example site', () => {
  it('goes directly to README', () => {
    cy.visit('/README')
    cy.wait(5000)
    cy.contains('h2', 'README')
  })
})
