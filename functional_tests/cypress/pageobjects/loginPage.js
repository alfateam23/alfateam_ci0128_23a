class loginPage {
  credentials = {
    username: "admin",
    password: "1234"
  }

  login() {
    cy.get('#username').type(this.credentials.username)
    cy.get('#password').type(this.credentials.password)
    cy.contains('Iniciar Sesión').click()
  }
}

export default loginPage;
