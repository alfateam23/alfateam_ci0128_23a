describe('reports', () => {
  it('check whether a profits report is shown', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#username').type('admin')
    cy.get('#password').type('1234')
    cy.contains('Iniciar Sesión').click()
    cy.wait(500)
    cy.contains('Reportes').click()
    cy.wait(500)
    cy.get('.px-10 > :nth-child(1) > .rounded-lg').select('profits');
    cy.get(':nth-child(1) > .react-datepicker__input-container > .rounded-xl').click();
    cy.get(':nth-child(1) > .react-datepicker__day--001').click();
    cy.get(':nth-child(2) > .react-datepicker__input-container > .rounded-xl').click();
    cy.get(':nth-child(5) > .react-datepicker__day--030').click();
    cy.wait(500)
    cy.contains('Tipo de Procedencia')
  })
  it('check whether a profits report can be downloaded', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#username').type('admin')
    cy.get('#password').type('1234')
    cy.contains('Iniciar Sesión').click()
    cy.wait(500)
    cy.contains('Reportes').click()
    cy.wait(500)
    cy.get('.px-10 > :nth-child(1) > .rounded-lg').select('profits');
    cy.get(':nth-child(1) > .react-datepicker__input-container > .rounded-xl').click();
    cy.get(':nth-child(1) > .react-datepicker__day--001').click();
    cy.get(':nth-child(2) > .react-datepicker__input-container > .rounded-xl').click();
    cy.get(':nth-child(5) > .react-datepicker__day--030').click();
    cy.contains('Descargar reportes').click()
    cy.wait(500)
    cy.verifyDownload('Reportes_Junquillal.xlsx')
  })
})
