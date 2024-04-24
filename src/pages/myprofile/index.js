import React, { useState, useEffect } from 'react';
import { createSelector } from 'reselect';
import { Row, Col, Nav, Spinner } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import ProfileNavbar from '../../layouts/profilenav';
import FooterComponent from '../../layouts/footer';
import { changePassword } from '../../stores/thunk';

import ProfileCard from './profilecard';
import SummaryCard from './summarycard';
import CreditsHistory from './creditshistory';

const UserProfile = () => {
    const dispatch = useDispatch();

    const userSelector = createSelector(
        (state) => state.Auth,
        (state) => ({
            user: state.user,
        })
    );

    const { user } = useSelector(userSelector);

    // const creditsData = createSelector(
    //     (state) => state.Customer,
    //     (state) => ({
    //         credits: state.credits,
    //         loadingCredits: state.loadingCredits,
    //     })
    // );

    // const { credits, loadingCredits } = useSelector(creditsData);

    const [activeTab, setActiveTab] = useState('profile');

    useEffect(() => {
        if (activeTab == 'creditsHistory') {
            // dispatch(getCustomers());
        }
    }, [dispatch, activeTab]);

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
        <React.Fragment>
            <ProfileNavbar userName={user.name} />
            <div style={{ overflowX: 'hidden' }}>
                <Row>
                    <Col sm={12} md={2}>
                        <Nav className="flex-column">
                            <Nav.Link onClick={() => handleTabChange('profile')}>My Profile</Nav.Link>
                            <Nav.Link onClick={() => handleTabChange('summary')}>Summary</Nav.Link>
                            <Nav.Link onClick={() => handleTabChange('creditsHistory')}>Credits History</Nav.Link>
                        </Nav>
                    </Col>
                    <Col sm={12} md={10}>
                        {activeTab === 'profile' && <ProfileCard profile={user} onPasswordChange={onPasswordChange} />}
                        {activeTab === 'summary' && <SummaryCard data={user} />}
                        {/* {activeTab === 'creditsHistory' && <CreditsHistory />} */}

                        {/* {activeTab === 'profile' && (loadingStats ? <div className="d-flex justify-content-center align-items-center" style={{ height: "100%" }}><Spinner animation="border" /> </div>
                            : <ProfileCard data={stats} />)}
                        {activeTab === 'summary' && (loadingStats ? <div className="d-flex justify-content-center align-items-center" style={{ height: "100%" }}><Spinner animation="border" /> </div>
                            : <SummaryCard data={stats} />)}
                        {activeTab === 'creditsHistory' && (loadingCustomer ?
                            <div className="d-flex justify-content-center align-items-center" style={{ height: "100%" }}><Spinner animation="border" /> </div>
                            : <CreditsHistory data={customers} />)} */}
                    </Col>
                </Row>
            </div>
            <FooterComponent />
        </React.Fragment>
    );
};

export default UserProfile;
