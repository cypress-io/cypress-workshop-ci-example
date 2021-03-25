/// <reference types="cypress" />

describe('Example site', () => {
  it('redirects to README/', () => {
    cy.visit('/README/')
    cy.contains('h2', 'README')
  })
})
