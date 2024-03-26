import React from 'react';
import { Navbar, Nav, Image, Container, Dropdown } from 'react-bootstrap';
import { GiCoins } from "react-icons/gi";
import { FiUser } from 'react-icons/fi';
import LogoutButton from '../../components/login-button/logout';
import logo from '../../assets/images/WVI-Logo.png';
import './navbarStyles.css'; // Import navbar styles

const DashBoardNavbar = () => {
    return (
        <Navbar bg="transparent" expand="lg">
            <Container>
                <Navbar.Brand href="#">
                    <Image className="LogoImage" src={logo} alt="Logo" />WinVinaya InfoSystems</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Item className="credits-container">
                            <Nav.Link href="#">
                                <span className="me-2">Credits</span>
                                <GiCoins className="me-2" />
                                <span>100</span> {/* Replace with dynamic credits value */}
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Dropdown align="end">
                                <Dropdown.Toggle className='userprofile' variant="link" id="dropdown-basic">
                                    <FiUser size={24} className="user-icon" />
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#">My Profile</Dropdown.Item>
                                    <Dropdown.Item href="#">Credits Usage</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item><LogoutButton /></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default DashBoardNavbar;
