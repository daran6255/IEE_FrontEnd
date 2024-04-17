import React, { useState, useEffect } from 'react';
import { Row, Col, Nav } from 'react-bootstrap';
import AdminNavbar from '../../layouts/adminnav';
import FooterComponent from '../../layouts/footer';
import Overview from '../../layouts/overview';
import Customer from '../../layouts/customer';
import CreditManagement from '../../layouts/creditsmanagement';

const AdminProfile = () => {
    const [activeTab, setActiveTab] = useState('AdminProfile');

    useEffect(() => {
        console.log("Active tab:", activeTab);
    }, [activeTab]);

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <>
            <AdminNavbar />
            <div style={{ overflowX: 'hidden' }}> {/* Ensure horizontal overflow is hidden */}
                <Row>
                    <Col sm={12} md={2}>
                        {/* Left column with profile and credits options */}
                        <Nav className="flex-column">
                            <Nav.Link onClick={() => handleTabChange('Overview')}>Overview</Nav.Link>
                            <Nav.Link onClick={() => handleTabChange('Customer')}>Customers</Nav.Link>
                            <Nav.Link onClick={() => handleTabChange('CreditsManagement')}>Credits Management</Nav.Link>
                            {/* <Nav.Link onClick={() => handleTabChange('Analytics')}>Analytics View</Nav.Link> */}
                        </Nav>
                    </Col>
                    <Col sm={12} md={10}>
                        {/* Right column - Render ProfileCard or CreditsCard based on activeTab */}
                        {activeTab === 'Overview' && <Overview />}
                        {activeTab === 'Customer' && <Customer />}
                        {activeTab === 'CreditsManagement' && <CreditManagement />}
                        {/* {activeTab === 'Analytics' && <CreditManagement />} */}
                    </Col>
                </Row>
            </div>
            <FooterComponent />
        </>
    );
};

export default AdminProfile;
