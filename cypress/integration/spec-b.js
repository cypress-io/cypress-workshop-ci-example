/// <reference types="cypress" />

describe('Example site', () => {
  it('navigates to README', () => {
    cy.visit('/')
    cy.contains('a', 'README').click()
    cy.location('pathname').should('match', '/\/readme\//i')
  })
})
