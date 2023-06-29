import { beforeEach } from "mocha"
import loginPage from "../pageobjects/loginPage"

describe('Login test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Log in and open app tabs', () => {
    loginPage.login();

  })

  it('logs on to the application and check that session is valid after page reload, and log out', () => {



    cy.reload()
    cy.contains('Reservas').click()
    cy.wait(500)
    cy.reload()
    cy.contains('Lista de Reservas').click()
    cy.wait(500)
    cy.reload()
    cy.contains('Reportes').click()
    cy.wait(500)
    cy.reload()
    cy.contains('Tarifas').click()
    cy.wait(500)
    cy.reload()
    cy.contains('Usuarios').click()
    cy.wait(500)
    cy.reload()
    cy.contains('Log out').click()
  })
})
