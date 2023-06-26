describe('login', () => {
  it('logs on to the application and check that session is valid after page reload, and log out', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#username').type('admin')
    cy.get('#password').type('1234')
    cy.contains('Iniciar Sesión').click()
    cy.wait(500)
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
