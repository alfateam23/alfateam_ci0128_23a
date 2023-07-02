import loginPage  from "../pageobjects/loginPage";
import dashboardPage from "../pageobjects/dashboardPage";

describe("Fees", () => {
  beforeEach(() => {
    loginPage.login();
  })

  it("Show fee for camping for a non-resident adult", () => {
    dashboardPage.openFees();
    cy.contains("16.99");
  })

  it("Show fee for camping for a resident adult", () => {
    dashboardPage.openFees();
    cy.contains("4520");
  })
})
