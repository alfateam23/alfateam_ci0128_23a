import loginPage from "../pageobjects/loginPage"
import usersPage from "../pageobjects/usersPage"

describe('users', () => {
  beforeEach(() =>{
    loginPage.login()
  })

  it('list users', () => {
    cy.contains('Usuarios').click()
    cy.contains('858574')
  })
})
