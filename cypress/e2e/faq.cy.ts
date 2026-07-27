describe('FAQ Section', () => {
  beforeEach(() => {
    cy.visit('/')
    // Scroll to the FAQ section
    cy.get('#faq').scrollIntoView()
  })

  it('should display FAQ section with accordion items', () => {
    // Check section title is visible
    cy.contains('Questions').should('be.visible')

    // Verify multiple FAQ items exist
    cy.get('#faq button').should('have.length.at.least', 3)
  })

  it('should expand and collapse FAQ items when clicked', () => {
    // Get the first question button
    cy.get('#faq button').first().as('firstQuestion')

    // Click to expand
    cy.get('@firstQuestion').click()

    // Verify content is now open
    cy.get('#faq [data-state="open"]').should('exist')

    // Click again to collapse
    cy.get('@firstQuestion').click()
  })

  it('should display the "What is a hackathon?" FAQ item', () => {
    // Find the specific FAQ about "What is a hackathon?"
    cy.contains('#faq button', 'What is a hackathon?').click()

    // Verify the answer contains the expected text
    cy.contains('collaborative event').should('be.visible')
  })

  it('should have a contact email for additional questions', () => {
    // Check if the contact section is displayed
    cy.contains('Still have questions?').should('be.visible')

    // Verify the email link exists and has the correct href
    cy.contains('a', 'ferdt4@farmingdale.edu')
      .should('have.attr', 'href', 'mailto:ferdt4@farmingdale.edu')
  })
})
