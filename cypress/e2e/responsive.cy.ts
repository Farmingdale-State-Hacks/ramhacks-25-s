describe('Responsive Design', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should display correctly on desktop', () => {
    cy.viewport(1280, 800)

    cy.get('nav').should('be.visible')
    cy.contains('h1', 'RamHacks').should('be.visible')
  })

  it('should display correctly on tablet', () => {
    cy.viewport('ipad-2' as Cypress.ViewportPreset)

    cy.get('nav').should('be.visible')
    cy.contains('h1', 'RamHacks').should('be.visible')
  })

  it('should display correctly on mobile', () => {
    cy.viewport('iphone-x' as Cypress.ViewportPreset)

    cy.get('nav').should('be.visible')
    cy.contains('h1', 'RamHacks').should('be.visible')

    // Verify hero section registration button is visible on mobile
    cy.contains('main button', 'Register Now').should('be.visible')

    cy.wait(500)

    cy.get('#faq').scrollIntoView().should('be.visible')
    cy.contains('Questions').should('be.visible')
  })

  it('should have readable text on all screen sizes', () => {
    const viewports: Cypress.ViewportPreset[] = ['iphone-6', 'ipad-2', 'macbook-13'] as Cypress.ViewportPreset[]

    viewports.forEach(viewport => {
      cy.viewport(viewport)
      cy.contains('RamHacks').should('be.visible')
      cy.contains('Join us for an exciting 24-hour hackathon').should('be.visible')

      cy.scrollTo('bottom')
      cy.get('footer').should('be.visible')
    })
  })
})
