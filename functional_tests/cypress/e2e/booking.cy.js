import loginPage from "../pageobjects/loginPage";
import dashboardPage from "../pageobjects/dashboardPage";

describe('booking', () => {
  it('creates a booking for camping', () => {
    cy.visit('http://localhost:3000/')
    loginPage.login()
    dashboardPage.openBookings();
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
