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

  openCreateBookings() {
    cy.contains(tabs.home.tabname).click();
    cy.contains(tabs.home.contains);
    cy.contains(tabs.createBookings.tabname).click();
    cy.contains(tabs.createBookings.content);
  }

  openUpdateBookings() {
    cy.contains(tabs.home.tabname).click();
    cy.contains(tabs.home.contains);
    cy.contains(tabs.updateBookings.tabname).click();
    cy.contains(tabs.updateBookings.content);
  }

  openReadReports() {
    cy.contains(tabs.home.tabname).click();
    cy.contains(tabs.home.contains);
    cy.contains(tabs.readReports.tabname).click();
    cy.contains(tabs.readReports.content).click();
  }

  openUpdateFees() {
    cy.contains(tabs.home.tabname).click();
    cy.contains(tabs.home.contains);
    cy.contains(tabs.updateFees.tabname).click();
    cy.contains(tabs.updateFees.content);
  }

  openUpdateSchedules() {
    cy.contains(tabs.home.tabname).click();
    cy.contains(tabs.home.contains);
    cy.contains(tabs.updateSchedules.tabname).click();
    cy.contains(tabs.updateSchedules.content);
  }

  openCreateServices() {
    cy.contains(tabs.home.tabname).click();
    cy.contains(tabs.home.contains);
    cy.contains(tabs.createServices.tabname).click();
    cy.contains(tabs.createServices.content);
  }

  openUpdateUsers() {
    cy.contains(tabs.home.tabname).click();
    cy.contains(tabs.home.contains);
    cy.contains(tabs.updateUsers.tabname).click();
    cy.contains(tabs.updateUsers.content);
  }
}

export default dashboardPage;
