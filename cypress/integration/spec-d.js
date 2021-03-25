/// <reference types="cypress" />

describe('Example site', () => {
  it('redirects to README/', () => {
    cy.visit('/README/')
    cy.wait(5000)
    cy.contains('h2', 'README')
  })
})
