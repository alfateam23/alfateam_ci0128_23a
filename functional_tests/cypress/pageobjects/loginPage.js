class loginPage {
  prompts = {
    login: "Iniciar Sesión",
    logout: "Log out"
  }

  credentials = {
    username: 112790958,
    password: 1234
  }

  login() {
    cy.get('#username').type(credentials.username)
    cy.get('#password').type(credentials.password)
    cy.contains(prompts.login).click()

  }

  logout() {
    cy.contains(prompts.logout).click()
  }
}

export default loginPage;
