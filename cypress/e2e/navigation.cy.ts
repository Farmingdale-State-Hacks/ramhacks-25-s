describe('Navigation', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should navigate to different sections when clicking navbar links', () => {
    // Test About section navigation
    cy.contains('nav a', 'About').click()
    cy.url().should('include', '#about')
    cy.contains('About').should('be.visible')

    // Test Schedule section navigation
    cy.contains('nav a', 'Schedule').click()
    cy.url().should('include', '#schedule')
    cy.contains('Schedule').should('be.visible')

    // Test Clubs section navigation
    cy.contains('nav a', 'Clubs').click()
    cy.url().should('include', '#clubs')
    cy.contains('Clubs').should('be.visible')

    // Test Sponsors section navigation
    cy.contains('nav a', 'Sponsors').click()
    cy.url().should('include', '#sponsors')
    cy.contains('Sponsors').should('be.visible')

    // Test FAQ section navigation
    cy.contains('nav a', 'FAQ').click()
    cy.url().should('include', '#faq')
    cy.contains('FAQ').should('be.visible')
  })

  it('should have working register button in navbar', () => {
    cy.contains('nav', 'Register').should('be.visible')
    cy.contains('nav', 'Register').should('have.attr', 'href')
      .and('include', 'https://forms.gle/Xp6nnGfTPvzb7hFM9')
  })

  it('should have a working logo that links to the homepage', () => {
    // First navigate to another section
    cy.contains('nav a', 'About').click()

    // Then click on the logo and verify it takes us back to the top
    cy.get('nav').find('img[alt="RamHacks Logo"]').click()
    cy.url().should('not.include', '#about')
    cy.window().its('scrollY').should('be.closeTo', 0, 200) // Allow some tolerance for scroll position
  })
})
