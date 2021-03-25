/// <reference types="cypress" />

describe('Example site', () => {
  it('navigates to README', () => {
    cy.visit('/')
    cy.wait(5000)
    cy.contains('a', 'README').click()
    cy.location('pathname').should('equal', '/README/')
  })
})
