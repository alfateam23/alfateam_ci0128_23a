class dashboardPage {
  tabs = {
    home: {
      tabname: "Home",
      content: "¡Bienvenido al Centro de control!"
    },
    createBookings: {
      tabname: "Reservas",
      content: "Seleccione la reservación"
    },
    updateBookings: {
      tabname: "Lista de Reservas",
      content: "Fecha entrada"
    },
    readReports: {
      tabname: "Reportes",
      content: "Descargar reportes"
    },
    updateFees: {
      tabname: "Tarifas",
      content: "Tarifas"
    },
    updateSchedules: {
      tabname: "Horarios",
      content: "Horarios"
    },
    createServices: {
      tabname: "Servicios",
      content: "Servicios"
    },
    updateUsers: {
      tabname: "Usuarios",
      content: "Estado de Cuenta"
    }
  }

  openHome() {
    cy.contains(tabs.home.tabname).click();
    cy.contains(tabs.home.content);
  }

  openBookings() {
    cy.contains(tabs.createBookings.tabname).click();
    cy.contains(tabs.createBookings.content);
  }

  openBookingsList() {
    cy.contains(tabs.updateBookings.tabname).click();
    cy.contains(tabs.updateBookings.content);
  }

  openReports() {
    cy.contains(tabs.readReports.tabname).click();
    cy.contains(tabs.readReports.content);
  }

  openFees() {
    cy.contains(tabs.updateFees.tabname).click();
    cy.contains(tabs.updateFees.content);
  }

  openSchedules() {
    cy.contains(tabs.updateSchedules.tabname).click();
    cy.contains(tabs.updateSchedules.content);
  }

  openServices() {
    cy.contains(tabs.createServices.tabname).click();
    cy.contains(tabs.createServices.content);
  }

  openUsers() {
    cy.contains(tabs.updateUsers.tabname).click();
    cy.contains(tabs.updateUsers.content);
  }
}

export default dashboardPage;
