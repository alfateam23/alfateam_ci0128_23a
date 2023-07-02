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
    cy.contains(this.tabs.home.tabname).click();
    cy.contains(this.tabs.home.content);
  }

  openBookings() {
    cy.contains(this.tabs.createBookings.tabname).click();
    cy.contains(this.tabs.createBookings.content);
  }

  openBookingsList() {
    cy.contains(this.tabs.updateBookings.tabname).click();
    cy.contains(this.tabs.updateBookings.content);
  }

  openReports() {
    cy.contains(this.tabs.readReports.tabname).click();
    cy.contains(this.tabs.readReports.content);
  }

  openFees() {
    cy.contains(this.tabs.updateFees.tabname).click();
    cy.contains(this.tabs.updateFees.content);
  }

  openSchedules() {
    cy.contains(this.tabs.updateSchedules.tabname).click();
    cy.contains(this.tabs.updateSchedules.content);
  }

  openServices() {
    cy.contains(this.tabs.createServices.tabname).click();
    cy.contains(this.tabs.createServices.content);
  }

  openUsers() {
    cy.contains(this.tabs.updateUsers.tabname).click();
    cy.contains(this.tabs.updateUsers.content);
  }
}

module.exports = new dashboardPage();
