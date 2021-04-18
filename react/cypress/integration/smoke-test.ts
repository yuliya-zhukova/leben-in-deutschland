/// <reference types="cypress" />

context('Start page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Smoke test', () => {
    cy.get('[data-cy=Welcome]').should('be.visible');
    cy.get('[data-cy=Welcome__start-test-link]').should('be.visible').click();

    cy.url().should('include', '/test');
    cy.get('[data-cy=TestLebenInDeutschland]').should('be.visible');
    cy.get('[data-cy=TestStep]').should('be.visible');

    const numberOfAnswers = 4;
    const numberOfSteps = 5;

    for (let i = 0; i < numberOfSteps; i += 1) {
      cy.get('[data-cy=TestStep__answer]')
        .should('have.length', numberOfAnswers)
        .eq(1)
        .click();
    }

    cy.get('[data-cy=Results__item]').should('have.length', numberOfSteps);
    cy.get('[data-cy=Results__start-again-link').should('be.visible').click();

    cy.url().should('include', '/');
  });
});
