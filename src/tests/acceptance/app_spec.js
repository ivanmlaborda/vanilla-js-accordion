describe('Acceptation sync data accordion', () => {
  beforeEach(() => {
    cy.visit(Cypress.config().baseUrl)
  })

  it('#root container has an Accordion', () => {
    cy.get('#root')
      .find('dl')
      .should('have.class', 'Accordion')
  })

  it('Accordion has a dt element with class "Accordion-term"', () => {
    cy.get('#root')
      .find('.Accordion')
      .find('dt')
      .should('have.class', 'Accordion-term')
  })

  it('Accordion has a dd element with class "Accordion-description"', () => {
    cy.get('#root')
      .find('.Accordion')
      .find('dd')
      .should('have.class', 'Accordion-description')
  })

  it('Clicks on dt elements toggle class "is-active"', () => {
    cy.get('#root')
      .find('.Accordion')
      .find('dt')
      .first()
      .click()
      .should('have.class', 'is-active')
      .click()
      .should('not.have.class', 'is-active')
  })

  it('Clicks on dt elements extends a description element', () => {
    cy.get('#root')
      .find('.Accordion')
      .find('dt')
      .last()
      .click()

    cy.get('#root')
      .find('.Accordion')
      .find('dd')
      .last()
      .should('have.class', 'is-extended')
  })
})

describe('Acceptation AJAX data accordion', () => {
  beforeEach(() => {
    cy.server()
    cy.route('/api/terms').as('terms')
    cy.visit(Cypress.config().baseUrl)
  })

  it('#root2 container has an Accordion', () => {
    cy.get('#root2')
      .find('dl')
      .should('have.class', 'Accordion')
  })

  it('Accordion has a dt element with class "Accordion-term"', () => {
    cy.get('#root2')
      .find('.Accordion')
      .find('dt')
      .should('have.class', 'Accordion-term')
  })

  it('Accordion has a dd element with class "Accordion-description"', () => {
    cy.get('#root2')
      .find('.Accordion')
      .find('dd')
      .should('have.class', 'Accordion-description')
  })

  it('Clicks on dt elements toggle class "is-active"', () => {
    cy.get('#root2')
      .find('.Accordion')
      .find('dt')
      .first()
      .click()
      .should('have.class', 'is-active')
      .click()
      .should('not.have.class', 'is-active')
  })

  it('Clicks on dt elements extends a description element', () => {
    cy.wait('@terms')
    cy.get('#root2')
      .find('.Accordion')
      .find('dt')
      .last()
      .click()

    cy.get('#root2')
      .find('.Accordion')
      .find('dd')
      .last()
      .should('have.class', 'is-extended')
  })

  it('Should have more than 3 dt elements', () => {
    cy.wait('@terms')
    cy.get('#root2')
      .find('dt')
      .should($dt => {
        const count = $dt.length
        expect(count).to.be.greaterThan(3)
      })
  })
})
