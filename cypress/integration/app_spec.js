describe('Acceptation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('#root container has a Accordion', () => {
    cy.get('#root')
      .get('dl')
      .should('have.class', 'Accordion')
  })

  it('Accordion has a dt element with class "Accordion-term"', () => {
    cy.get('#root')
      .get('.Accordion')
      .get('dt')
      .should('have.class', 'Accordion-term')
  })

  it('Accordion has a dd element with class "Accordion-description"', () => {
    cy.get('#root')
      .get('.Accordion')
      .get('dd')
      .should('have.class', 'Accordion-description')
  })

  it('Clicks on dt elements toggle its class to "is-active"', () => {
    cy.get('#root')
      .get('.Accordion')
      .get('dt')
      .click({multiple: true})

    cy.get('#root')
      .get('.Accordion')
      .get('dt')
      .should('have.class', 'is-active')
  })
})
