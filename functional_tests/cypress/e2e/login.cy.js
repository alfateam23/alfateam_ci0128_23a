import loginPage from "../pageobjects/loginPage";

describe('Login page', () => {
  before(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Logs in', () => {
    loginPage.login();
  })

  it('Logs out', () => {
    loginPage.logout();
  })
})
