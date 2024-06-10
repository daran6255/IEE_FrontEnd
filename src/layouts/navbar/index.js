import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Image, Container, Button } from 'react-bootstrap';
import logo from '../../assets/images/WVI.png';
import './NavBarComponent.css'; // Import custom styles for NavBarComponent

const NavBarComponent = () => {
  return (
    <Navbar expand="lg" bg="transparent" className="navbar-custom">
      <Container>
        <Navbar.Brand href="/" style={{ display: 'flex', alignItems: 'center' }}>
          <Image className="LogoImage" src={logo} alt="Logo" style={{ width: '250px', height: '45px'}} />
          {/* <span style={{ color: 'black' }}>WinVinaya InfoSystems</span> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" >
            <Nav.Link href="#" className="nav-link">Market</Nav.Link>
            <Nav.Link href="#" className="nav-link">Pricing</Nav.Link>
            <Nav.Link href="#" className="nav-link">Community</Nav.Link>
            <Nav.Link href="#" className="nav-link">Download</Nav.Link>
            <Link to="/login">
              <Button className="custom-button" variant="primary">
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="custom-button" variant="success">
                Sign up
              </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarComponent;
