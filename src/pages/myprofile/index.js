import React, { useState, useEffect } from 'react';
import { createSelector } from 'reselect';
import { Row, Col, Nav } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import ProfileNavbar from '../../layouts/profilenav';
import FooterComponent from '../../layouts/footer';
import ProfileCard from '../../layouts/profilecard';
import CreditsCard from '../../layouts/creditscard';
import { changePassword } from '../../stores/thunk';


const UserProfile = () => {
    const dispatch = useDispatch();

    const [activeTab, setActiveTab] = useState('MyProfile');

    const userSelector = createSelector(
        (state) => state.Auth,
        (state) => ({
            user: state.user,
        })
    );
    const { user } = useSelector(userSelector);

    useEffect(() => {
        if (activeTab) {
            console.log("Active tab:", activeTab);
        }
    }, [activeTab]);

    if (!user) {
        return <></>;
    }

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const onPasswordChange = (oldPassword, newPassword) => {
        if (!oldPassword || !newPassword) {
            toast.error('Password is empty', { autoClose: 3000 });
            return;
        }

        if (newPassword.length < 6) {
            toast.error('Password must be minimum 6 characters', { autoClose: 3000 });
            return;
        }

        dispatch(changePassword(user.email, oldPassword, newPassword));
    }


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
                        {activeTab === 'MyProfile' && <ProfileCard name={user.name} company={user.company} email={user.email} phone={user.phone} onPasswordChange={onPasswordChange} />}
                        {activeTab === 'Credits' && <CreditsCard />}
                    </Col>
                </Row>
            </div>
            <FooterComponent />
        </>
    );
};

export default UserProfile;
