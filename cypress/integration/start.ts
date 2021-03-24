/// <reference types="cypress" />

context('Start page', () => {
  beforeEach(() => {
    cy.visit('./');
  });

  it('TestLebenInDeutschland component should be visible', () => {
    cy.get('[data-cy=TestLebenInDeutschland]').should('be.visible');
  });
});
