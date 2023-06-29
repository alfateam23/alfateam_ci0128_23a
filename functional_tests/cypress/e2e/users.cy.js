describe('users', () => {
  it('logs on to the application, disable and re-enable a user', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#username').type('admin')
    cy.get('#password').type('1234')
    cy.contains('Iniciar Sesión').click()
    cy.contains('Usuarios').click()
    cy.contains('Activo')
    cy.contains('Cambiar Estado').click()
    cy.contains('Deshabilitado')
    cy.contains('Cambiar Estado').click()
    cy.contains('Activo')
  })
})
