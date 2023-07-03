import React from 'react';
import { Navbar, Button } from 'flowbite-react';
export const NavBar = ({setRunAdminApp}) => {
  return (
    <div>
      <Navbar
        fluid
        rounded
      >
        <Navbar.Brand>
          <img
            alt="Junquillal Logo"
            className="mr-3 h-6 sm:h-9"
            src="./Logo.png"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Aso Junquillal
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button onClick={()=>setRunAdminApp(true)}>
            Login Administradores
          </Button>
        </div>
        <Navbar.Toggle />
        <Navbar.Collapse>
          {/* eslint-disable-next-line no-useless-escape*/}
          <Navbar.Link active={(window.location.href).match(".*\/$")}  href="/">
            Home
          </Navbar.Link>
          <Navbar.Link active={(window.location.href).match(".*\/about$")} href="/about">
            Acerca De
          </Navbar.Link>
          <Navbar.Link active={(window.location.href).match(".*\/activities$")} href="/activities">
            Actividades
          </Navbar.Link>
          <Navbar.Link active={(window.location.href).match(".*\/contact$")} href="/contact">
            Contacto
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
