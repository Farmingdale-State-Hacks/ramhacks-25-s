describe('FAQ Section', () => {
  beforeEach(() => {
    cy.visit('/')
    // Scroll to the FAQ section
    cy.scrollToSection('FAQ')
  })

  it('should display FAQ section with accordion items', () => {
    // Check section title is visible
    cy.contains('span', 'Questions').should('be.visible')

    // Verify multiple FAQ items exist (using AccordionItem)
    cy.get('[class*="AccordionItem"]').should('have.length.at.least', 3)
  })

  it('should expand and collapse FAQ items when clicked', () => {
    // Get the first FAQ item
    cy.get('[class*="AccordionItem"]').first().as('firstFAQ')

    // Get the first question by its trigger
    cy.get('[class*="AccordionTrigger"]').first().as('firstQuestion')

    // Click to expand
    cy.get('@firstQuestion').click()

    // Verify content is now visible (AccordionContent should have data-state="open")
    cy.get('[class*="AccordionContent"][data-state="open"]').should('exist')

    // Click again to collapse
    cy.get('@firstQuestion').click()

    // Verify it's collapsed again (checking for data-state)
    cy.get('[class*="AccordionContent"][data-state="open"]').should('not.exist')
  })

  it('should display the "What is a hackathon?" FAQ item', () => {
    // Find the specific FAQ about "What is a hackathon?"
    cy.contains('[class*="AccordionTrigger"]', 'What is a hackathon?').click()

    // Verify the answer contains the expected text
    cy.contains('[class*="AccordionContent"]', 'collaborative event').should('be.visible')
  })

  it('should have a contact email for additional questions', () => {
    // Check if the contact section is displayed
    cy.contains('Still have questions?').should('be.visible')

    // Verify the email link exists and has the correct href
    cy.contains('a', 'ferdt4@farmingdale.edu')
      .should('have.attr', 'href', 'mailto:ferdt4@farmingdale.edu')
  })
})
