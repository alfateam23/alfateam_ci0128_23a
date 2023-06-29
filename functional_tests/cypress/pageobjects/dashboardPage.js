class dashboardPage {
  tabs = {
    bookings: "Reservas",
    listBookings: "Lista de Reservas",
    reports: "Reportes",
    fees: "Tarifas",
    schedule: "Horarios",
    services: "Servicios",
    users: "Usuarios"
  }

  clickBookings() {
    cy.contains(tabs.bookings).click();
  }

  clickBookingsList() {
    cy.contains(tabs.listBookings).click();
  }

  containsReports() {
    cy.contains(tabs.reports).click();
  }

  containsFees() {
    cy.contains(tabs.fees).click();
  }


}



export default dashboardPage;
