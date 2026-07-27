interface RamhacksFixture {
  name: string;
  date: string;
  location: string;
  participants: number;
  contacts: {
    registration: string;
    sponsor: string;
  };
  sections: string[];
}

describe('Home Page', () => {
  let ramhacksData: RamhacksFixture;

  before(() => {
    cy.fixture('example.json').then((data) => {
      ramhacksData = data;
    });
  });

  beforeEach(() => {
    cy.visit('/')
  })

  it('should display the navbar', () => {
    cy.get('nav').should('be.visible')
  })

  it('should display the hero section with correct content', () => {
    cy.contains('RamHacks').should('be.visible')
    cy.contains('2026').should('be.visible')
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

  it('should navigate when clicking Register Now', () => {
    cy.window().then((win) => {
      cy.stub(win, 'open').as('windowOpen')
    })
    cy.contains('button', 'Register Now').click()
    cy.get('@windowOpen').should('be.calledWith', ramhacksData.contacts.registration + ' ')
  })

  it('should navigate when clicking Sponsor Us', () => {
    cy.window().then((win) => {
      cy.stub(win, 'open').as('windowOpen')
    })
    cy.contains('button', 'Sponsor Us').click()
    cy.get('@windowOpen').should('be.calledWith', `mailto:${ramhacksData.contacts.sponsor}`)
  })

  it('should display all main sections of the page', () => {
    ramhacksData.sections.forEach((section: string) => {
      if (section !== 'hero') {
        cy.get(`#${section.toLowerCase()}`).scrollIntoView().should('be.visible')
      }
    });

    cy.scrollTo('bottom')
    cy.get('footer').should('be.visible')
  })
})
