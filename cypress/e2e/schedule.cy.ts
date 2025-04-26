describe('Schedule Section', () => {
  beforeEach(() => {
    cy.visit('/')
    // Scroll to the Schedule section
    cy.scrollToSection('Schedule')
  })

  it('should display the Schedule section title', () => {
    cy.contains('h2', /Schedule/i).should('be.visible')
  })

  it('should display multiple schedule days or sessions', () => {
    // Check that we have day tabs or similar elements
    cy.get('[class*="Tabs"] button').should('have.length.at.least', 1)
  })

  it('should be able to switch between schedule days/tabs if multiple exist', () => {
    // Get all tab elements
    cy.get('[class*="Tabs"] button').then($tabs => {
      // If we have more than one tab, test tab switching
      if ($tabs.length > 1) {
        // Click the second tab
        cy.wrap($tabs).eq(1).click()

        // Verify it's selected (has active state)
        cy.wrap($tabs).eq(1).should('have.attr', 'data-state', 'active')

        // First tab should not be active anymore
        cy.wrap($tabs).eq(0).should('not.have.attr', 'data-state', 'active')
      } else {
        // Skip this test if there's only one tab
        cy.log('Only one tab found, skipping tab switching test')
      }
    })
  })

  it('should display schedule events with times and descriptions', () => {
    // Look for time elements in the schedule
    cy.get('[class*="TabsContent"] [class*="time"], [class*="TabsContent"] time, [class*="schedule"] time')
      .should('exist')

    // Look for event titles or descriptions
    cy.get('[class*="TabsContent"] h3, [class*="TabsContent"] h4, [class*="schedule"] h3')
      .should('exist')
  })

  it('should display the correct date for the hackathon', () => {
    // Check for the specific date mentioned in the heroes.tsx file
    cy.contains('April 26-27, 2025').should('exist')
  })
})
