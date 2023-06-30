import React from 'react';
import Login from "../../../source/app/admin_dashboard/pages/Login";

describe('Login', () => {
  it('Render login component', () => {
    cy.mount(<Login/>)
  })
})
