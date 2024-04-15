import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Image, Container, Button } from 'react-bootstrap';
import logo from '../../assets/images/WVI-Logo.png';


const NavBarComponent = () => {
  return (
    <Navbar bg="transperent" expand="lg">
      <Container>
        <Navbar.Brand href="#" style={{ display: 'flex', alignItems: 'flex-end' }}>
          <Image className="LogoImage" src={logo} alt="Logo" style={{ marginRight: '10px' }} />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ marginBottom: '15px', marginLeft: '10px' }}>WinVinaya InfoSystems</span>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#">Market</Nav.Link>
            <Nav.Link href="#">Pricing</Nav.Link>
            <Nav.Link href="#">Community</Nav.Link>
            <Nav.Link href="#">Download</Nav.Link>
            <Link to="/login">
              <Button className="custom-button" variant="primary" >
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
    </Navbar >
  );
};

export default NavBarComponent;
