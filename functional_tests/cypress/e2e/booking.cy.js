describe('booking', () => {
  it('creates a booking for camping', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#username').type('admin')
    cy.get('#password').type('1234')
    cy.contains('Iniciar Sesión').click()
    cy.wait(500)
    cy.contains('Reservas').click()
    cy.wait(500)
    cy.contains('Camping').click()
    cy.wait(500)
    cy.contains('Desde').click()
    cy.get('#from > .inline-block').click();
    cy.get(':nth-child(23) > abbr').click();
    cy.get('#until > .inline-block').click();
    cy.get(':nth-child(26) > abbr').click();
    cy.wait(500)
    cy.contains('Siguiente').click();
    cy.contains('+').click();
    cy.contains('+').click();
    cy.wait(500)
    cy.contains('Siguiente').click();
    cy.wait(500)
  })
})
