class loginPage {
  baseUrl = "http://localhost:3000/"

  prompts = {
    login: "Iniciar Sesión",
    logout: "Log out"
  }

  credentials = {
    username: "112790958",
    password: "1234"
  }

  login() {
    cy.visit(this.baseUrl);
    cy.get('#username').type(this.credentials.username);
    cy.get('#password').type(this.credentials.password);
    cy.contains(this.prompts.login).click();
  }

  logout() {
    cy.visit(this.baseUrl);
    cy.get('#username').type(this.credentials.username);
    cy.get('#password').type(this.credentials.password);
    cy.contains(this.prompts.login).click();
    cy.contains(this.prompts.logout).click();
  }
}

module.exports = new loginPage();
