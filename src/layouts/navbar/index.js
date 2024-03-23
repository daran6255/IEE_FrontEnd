import React from 'react';
import { Navbar, Nav, Image, Container, Button } from 'react-bootstrap';
import logo from '../../assets/images/WVI.png';


const NavBarComponent = () => {
  return (
    <Navbar bg="light" expand="lg" className="navbar-container">
      <Container fluid>
        <Navbar.Brand href="#home">
          <Image src={logo} alt="Logo" width="200" height="40" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
            <Button variant="primary" href="#demo">Request Demo</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarComponent;
