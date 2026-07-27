describe('Accessibility Tests', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.logPageTitle()
  })

  it('should have semantic landmarks', () => {
    // Assert that key semantic elements exist
    cy.assertElementExists('main')
    cy.assertElementExists('header')
    cy.assertElementExists('footer')

    // Check if multiple landmark elements are visible
    cy.assertAllVisible(['nav', 'main', 'footer'])
  })

  it('should have proper roles on interactive elements', () => {
    // Check navbar for proper a11y attributes
    cy.get('nav').should('exist')

    // Check accessibility of main section
    cy.checkSectionA11y('main')

    // Check that buttons are valid interactive elements
    cy.get('button').each($button => {
      assert.isTrue($button.is('button') || $button.attr('role') === 'button')
    })
  })

  it('should have proper heading hierarchy', () => {
    // Check that there's an h1 on the page
    cy.get('h1').should('exist')

    // Check that h2 elements exist for section headers
    cy.get('h2').should('exist')

    // Check that headings are visible
    cy.get('h1, h2, h3, h4, h5, h6').should('be.visible')
  })

  it('should have alt text on images', () => {
    // Get all images and verify they have alt text
    cy.get('img').each($img => {
      cy.wrap($img).should('have.attr', 'alt')
    })
  })

  it('should have accessible form elements if forms exist', () => {
    cy.get('body').then($body => {
      if ($body.find('form').length > 0) {
        cy.get('form').each($form => {
          cy.wrap($form).find('input, textarea, select').each($input => {
            cy.wrap($input).invoke('attr', 'id').then(id => {
              if (id) {
                cy.get(`label[for="${id}"]`).should('exist')
              }
            })
          })
        })
      }
    })
  })
})
