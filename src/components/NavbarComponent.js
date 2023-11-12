import React from "react";
import {Navbar,Container } from 'react-bootstrap'

const NavbarComponent = () => {
  return (
    <Navbar className="bg-primary" variant="dark">
    <Container>
      <Navbar.Brand href="#home">Cashier app</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          Signed in as: <a href="#login">By febz</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default NavbarComponent;
