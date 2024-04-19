import React from 'react';
import { Navbar, Nav, Image, Container, Dropdown } from 'react-bootstrap';
import { FiUser } from 'react-icons/fi';
import { FaPowerOff } from 'react-icons/fa';

import logo from '../../assets/images/WVI-Logo.png';
import './navbarStyles.css'; // Import navbar styles

const DashBoardNavbar = ({ userName }) => {
    return (
        <Navbar bg="transparent" expand="lg">
            <Container>
                <Navbar.Brand href="/" style={{ display: 'flex', alignItems: 'flex-end' }}>
                    <Image className="LogoImage" src={logo} alt="Logo" style={{ marginRight: '10px' }} />
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ marginBottom: '15px', marginLeft: '10px' }}>WinVinaya InfoSystems</span>
                    </div>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Item className="user-profile">
                            <Dropdown align="end">
                                <span style={{ color: 'black' }} className="user-name">{userName}</span>
                                <Dropdown.Toggle className='userprofile' variant="link" id="dropdown-basic">
                                    <FiUser size={24} className="user-icon" />
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href={process.env.PUBLIC_URL + '/logout'}>
                                        <FaPowerOff style={{ color: 'red' }} />&nbsp;
                                        <span>
                                            Logout
                                        </span>
                                    </Dropdown.Item>
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
