import React from 'react';
import { Navbar, Nav, Image, Container, Button } from 'react-bootstrap';
import LoginButton from '../../components/login-button/login';
import SignupButton from '../../components/login-button/signup';
import logo from '../../assets/images/WVI-Logo.png';


const NavBarComponent = () => {
  return (
    <Navbar bg="transperent" expand="lg">
      <Container>
        <Navbar.Brand href="#">
          <Image className="LogoImage" src={logo} alt="Logo" />WinVinaya InfoSystems</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#">Market</Nav.Link>
            <Nav.Link href="#">Pricing</Nav.Link>
            <Nav.Link href="#">Community</Nav.Link>
            <Nav.Link href="#">Download</Nav.Link>
            <LoginButton />
            <SignupButton />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarComponent;
