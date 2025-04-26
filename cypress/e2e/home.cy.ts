describe('Home Page', () => {
  let ramhacksData: any;

  beforeEach(() => {
    // Load fixture data before each test
    cy.fixture('example.json').then((data) => {
      ramhacksData = data;
    });
    cy.visit('/')
  })

  it('should display the navbar', () => {
    cy.get('nav').should('be.visible')
  })

  it('should display the hero section with correct content', () => {
    cy.contains('h1', ramhacksData.name).should('be.visible')
    cy.contains('2025').should('be.visible')
    cy.contains('Fueling Innovation at Farmingdale State College').should('be.visible')

    // Check for the registration button
    cy.contains('button', 'Register Now').should('be.visible')
    cy.contains('button', 'Sponsor Us').should('be.visible')
  })

  it('should display date, location and participant information', () => {
    cy.contains(ramhacksData.date).should('be.visible')
    cy.contains(ramhacksData.location).should('be.visible')
    cy.contains(`${ramhacksData.participants}+ Participants`).should('be.visible')
  })

  it('should navigate to the correct URL when clicking Register Now', () => {
    cy.contains('button', 'Register Now').should('have.attr', 'onclick')
      .and('include', ramhacksData.contacts.registration)
  })

  it('should navigate to the correct email when clicking Sponsor Us', () => {
    cy.contains('button', 'Sponsor Us').should('have.attr', 'onclick')
      .and('include', `mailto:${ramhacksData.contacts.sponsor}`)
  })

  it('should display all main sections of the page', () => {
    // Using our custom command to scroll to each section
    ramhacksData.sections.forEach((section: string) => {
      if (section !== 'hero') {
        cy.scrollToSection(section.charAt(0).toUpperCase() + section.slice(1))
      }
    });

    // Footer is typically not a header text, so we use a different approach
    cy.scrollTo('bottom')
    cy.get('footer').should('be.visible')
  })
})
