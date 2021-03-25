/// <reference types="cypress" />

describe('Example site', () => {
  it('goes directly to README', () => {
    cy.visit('/README')
    cy.contains('h2', 'README')
  })
})
