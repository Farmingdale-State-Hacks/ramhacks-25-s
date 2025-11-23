describe('Schedule Section', () => {
  beforeEach(() => {
    cy.visit('/')
    // Ensure the schedule section is in view before running tests
    cy.get('#schedule').scrollIntoView();
  });

  it('should display the schedule section title', () => {
    cy.get('#schedule h2').should('contain', 'Event Schedule');
  });

  it('should display schedule items with times and descriptions', () => {
    cy.get('#schedule').find('.time').should('have.length.at.least', 1);
    cy.get('#schedule').find('h3').should('have.length.at.least', 1);
    cy.get('#schedule').find('p').should('have.length.at.least', 1);
  });

  it('should switch between Day 1 and Day 2 schedules', () => {
    // Initially, Day 1 should be selected
    cy.contains('button', 'Day 1 (April 25)').should('have.class', 'bg-primary');
    cy.contains('button', 'Day 2 (April 26)').should('not.have.class', 'bg-primary');

    // Click on Day 2 button
    cy.contains('button', 'Day 2 (April 26)').click();

    // Now Day 2 should be selected and Day 1 not
    cy.contains('button', 'Day 1 (April 25)').should('not.have.class', 'bg-primary');
    cy.contains('button', 'Day 2 (April 26)').should('have.class', 'bg-primary');
  });

  it('should display the correct hackathon date in the button labels', () => {
    cy.contains('button', 'Day 1 (April 25)').should('exist');
    cy.contains('button', 'Day 2 (April 26)').should('exist');
  });

  it('should display the overview text with the correct year', () => {
    cy.contains('Join us for 29 hours of coding, learning, and innovation. Here\'s what you can expect at RamHacks 2026.').should('exist');
  });
});
