import React from 'react';
import { Navbar, Nav, Image, Container, Dropdown } from 'react-bootstrap';
import { GiCoins } from "react-icons/gi";
import { FiUser } from 'react-icons/fi';
import { FaPowerOff } from "react-icons/fa";

import logo from '../../assets/images/WVI.png';
import './navbarStyles.css';

const DashBoardNavbar = ({ userName, credits }) => {
    return (
        <Navbar bg="transparent" expand="lg">
            <Container>
                <Navbar.Brand href="/" style={{ display: 'flex', alignItems: 'flex-end' }}>
                    <Image className="LogoImage" src={logo} alt="Logo" style={{ width: '250px', height:'45px' }} />
                    {/* <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ marginBottom: '15px', marginLeft: '10px' }}>WinVinaya InfoSystems</span>
                    </div> */}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Item className="credits-container">
                            <Nav.Link href="#">
                                <span className="me-2">Credits</span>
                                <span style={{ color: 'blue' }}>{credits}</span> {' '}
                                <GiCoins className="me-2" />
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Dropdown align="end">
                                <span style={{ color: 'black', marginBottom: '15px' }} className="user-name">{userName}</span>
                                <Dropdown.Toggle className='userprofile' variant="link" id="dropdown-basic">
                                    <FiUser size={24} className="user-icon" />
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="/my-profile">My Profile</Dropdown.Item>
                                    <Dropdown.Item href="#">Buy Credits</Dropdown.Item>
                                    <Dropdown.Divider />
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
        </Navbar >
    );
};

export default DashBoardNavbar;
