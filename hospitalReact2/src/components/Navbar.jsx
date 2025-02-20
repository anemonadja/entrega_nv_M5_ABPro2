import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';


const NavbarReact = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
          <Navbar.Brand href="/home">
            <img
              alt=""
              src="/src/assets/logo.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Hospital React
          </Navbar.Brand>
        </Container>
      <Container> 
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="./home">Inicio</Nav.Link>
            <Nav.Link href="./doctores">Doctores</Nav.Link>
            <Nav.Link href="./contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarReact;