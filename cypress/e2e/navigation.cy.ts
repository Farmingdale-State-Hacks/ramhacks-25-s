describe('Navigation', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should navigate to different sections when clicking navbar links', () => {
    // Test About section navigation
    cy.contains('nav a', 'About').click()
    cy.url().should('include', '#about')
    cy.get('#about').should('exist')

    // Test Clubs section navigation
    cy.contains('nav a', 'Clubs').click()
    cy.url().should('include', '#clubs')
    cy.get('#clubs').should('exist')

    // Test Sponsors section navigation
    cy.contains('nav a', 'Sponsors').click()
    cy.url().should('include', '#sponsors')
    cy.get('#sponsors').should('exist')

    // Test FAQ section navigation
    cy.contains('nav a', 'FAQ').click()
    cy.url().should('include', '#faq')
    cy.get('#faq').should('exist')
  })

  it('should have working register button in navbar', () => {
    cy.contains('nav a', 'Register Now').should('be.visible')
    cy.contains('nav a', 'Register Now').should('have.attr', 'href')
      .and('include', 'https://forms.gle/z7TDE94KT8CG8XhE9')
  })

  it('should have a working logo that links to the homepage', () => {
    cy.contains('nav a', 'About').click()

    cy.get('nav').find('img[alt="RamHacks Logo"]').click()
    cy.url().should('not.include', '#about')
    cy.window().its('scrollY').should('be.closeTo', 0, 200)
  })
})
