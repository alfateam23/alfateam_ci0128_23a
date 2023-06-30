import loginPage from "../pageobjects/loginPage";
import dashboardPage from "../pageobjects/dashboardPage";

describe('Login page', () => {
  before(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Log in', () => {
    loginPage.login();
  })



  it('Open tab for creating bookings', () => {
    dashboardPage.createBookings();
  })

  it('Open tab for updating bookings', () => {
    dashboardPage.updateBookings();
  })

  it('Open tab for creating bookings', () => {
    dashboardPage.createBookings();
  })

  it('Open tab for updating bookings', () => {
    dashboardPage.updateBookings();
  })
})
