import loginPage from "../pageobjects/loginPage";

describe('reports', () => {
  beforeEach(() => {
    loginPage.login();
  })

  it('check whether a profits report is shown', () => {
    cy.contains('Reportes').click()
    cy.get('.px-10 > :nth-child(1) > .rounded-lg').select('profits');
    cy.get(':nth-child(1) > .react-datepicker__input-container > .rounded-xl').click();
    cy.get(':nth-child(1) > .react-datepicker__day--001').click();
    cy.get(':nth-child(2) > .react-datepicker__input-container > .rounded-xl').click();
    cy.get('.react-datepicker__day--031').click();

  })

})
