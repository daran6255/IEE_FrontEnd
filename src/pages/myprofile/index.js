import React, { useState, useEffect } from 'react';
import { Row, Col, Nav } from 'react-bootstrap';
import ProfileNavbar from '../../layouts/profilenav';
import FooterComponent from '../../layouts/footer';
import ProfileCard from '../../layouts/profilecard';
import CreditsCard from '../../layouts/creditscard';

const UserProfile = () => {
    const [activeTab, setActiveTab] = useState('MyProfile');

    useEffect(() => {
        console.log("Active tab:", activeTab);
    }, [activeTab]);

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <>
            <ProfileNavbar />
            <div style={{ overflowX: 'hidden' }}> {/* Ensure horizontal overflow is hidden */}
                <Row>
                    <Col sm={12} md={2}>
                        {/* Left column with profile and credits options */}
                        <Nav className="flex-column">
                            <Nav.Link onClick={() => handleTabChange('MyProfile')}>My Profile</Nav.Link>
                            <Nav.Link onClick={() => handleTabChange('Credits')}>Credits</Nav.Link>
                        </Nav>
                    </Col>
                    <Col sm={12} md={10}>
                        {/* Right column - Render ProfileCard or CreditsCard based on activeTab */}
                        {activeTab === 'MyProfile' && <ProfileCard />}
                        {activeTab === 'Credits' && <CreditsCard />}
                    </Col>
                </Row>
            </div>
            <FooterComponent />
        </>
    );
};

export default UserProfile;
