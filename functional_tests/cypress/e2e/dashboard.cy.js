import loginPage from "../pageobjects/loginPage";
import dashboardPage from "../pageobjects/dashboardPage";

describe("dashboard", () => {
  beforeEach(() => {
    loginPage.login();
  })

  it("Open dashboard home", () => {
    dashboardPage.openHome();
  })

  it("Open bookings", () => {
    dashboardPage.openBookings();
  })

  it("Open bookings list", () => {
    dashboardPage.openBookingsList();
  })

  it("Open reports", () => {
    dashboardPage.openReports();
  })

  it("Open fees", () => {
    dashboardPage.openFees();
  })

  it("Open schedules", () => {
    dashboardPage.openSchedules();
  })

  it("Open services", () => {
    dashboardPage.openServices();
  })

  it("Open users", () => {
    dashboardPage.openUsers();
  })
})
