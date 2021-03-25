/// <reference types="cypress" />

describe('Example site', () => {
  it('loads', () => {
    cy.visit('/')
    cy.wait(5000)
    cy.contains('h1', 'cypress-workshop-ci-example').should('be.visible')
  })
  it('navigates to README', () => {
    cy.visit('/')
    cy.wait(5000)
    cy.contains('a', 'README').click()
    cy.location('pathname').should('equal', '/README/')
  })
})
