import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function NavComponent() {
  return (
    <>
      <Navbar expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#Places to stay">Places to Stay</Nav.Link>
            <Nav.Link href="#Experiences">Experiences</Nav.Link>
            <Nav.Link href="#Online Experiences">Online Experiences</Nav.Link>
            <Nav.Link href="#Services">Services</Nav.Link>
            <Nav.Link href="#Become a Host">Become a Host</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavComponent;
