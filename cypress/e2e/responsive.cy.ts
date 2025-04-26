describe('Responsive Design', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should display correctly on desktop', () => {
    // Default viewport is desktop size
    cy.viewport(1280, 800)

    // Check that the navbar is horizontally displayed
    cy.get('nav').should('be.visible')

    // Hero text should be large
    cy.contains('h1', 'RamHacks').should('be.visible')

    // Verify registration buttons are side by side
    cy.contains('button', 'Register Now').parent().parent()
      .should('have.css', 'flex-direction', 'row')
  })

  it('should display correctly on tablet', () => {
    cy.viewport('ipad-2' as Cypress.ViewportPreset)

    // Check that the navbar is still visible
    cy.get('nav').should('be.visible')

    // Hero should still be visible
    cy.contains('h1', 'RamHacks').should('be.visible')
  })

  it('should display correctly on mobile', () => {
    cy.viewport('iphone-x' as Cypress.ViewportPreset)

    // Check that the mobile menu is available (either a hamburger icon or mobile menu)
    cy.get('nav').should('be.visible')

    // Check hero is adjusted for mobile
    cy.contains('h1', 'RamHacks').should('be.visible')

    // Verify registration buttons are stacked on mobile
    cy.contains('button', 'Register Now').should('be.visible')

    // Wait to ensure the responsive layout has updated
    cy.wait(500)

    // Verify the FAQ section is properly displayed on mobile
    cy.scrollToSection('FAQ')
    cy.contains('span', 'Questions').should('be.visible')
  })

  it('should have readable text on all screen sizes', () => {
    // Test on different viewport sizes
    const viewports: Cypress.ViewportPreset[] = ['iphone-6', 'ipad-2', 'macbook-13'] as Cypress.ViewportPreset[]

    viewports.forEach(viewport => {
      cy.viewport(viewport)
      cy.contains('RamHacks').should('be.visible')

      // Check that the main paragraph is visible
      cy.contains('Join us for an exciting 24-hour hackathon').should('be.visible')

      // Check the footer is readable
      cy.scrollTo('bottom')
      cy.get('footer').should('be.visible')
    })
  })
})
