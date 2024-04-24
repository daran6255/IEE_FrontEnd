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
import CustomerCreditsHistory from './customercreditshistory';

const UserProfile = () => {
    const dispatch = useDispatch();

    const userData = createSelector(
        (state) => state.Admin,
        (state) => ({
            stats: state.stats,
            customers: state.customers,
            loadingStats: state.loadingStats,
            loadingCustomer: state.loadingCustomer,
        })
    );

    const { stats, customers, loadingStats, loadingCustomer } = useSelector(userData);

    const [activeTab, setActiveTab] = useState('Overview');

    useEffect(() => {
        switch (activeTab) {
            case 'Overview':
                dispatch(getDashboardStats());
                break;
            case 'Customer':
            case 'CreditsManagement':
                dispatch(getCustomers());
                break;
            default:
                break;
        }
    }, [dispatch, activeTab]);

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };
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
            <div style={{ overflowX: 'hidden' }}>
                <Row>
                    <Col sm={12} md={2}>
                        <Nav className="flex-column">
                            <Nav.Link onClick={() => handleTabChange('profile')}>My Profile</Nav.Link>
                            <Nav.Link onClick={() => handleTabChange('summary')}>Summary</Nav.Link>
                            <Nav.Link onClick={() => handleTabChange('CustomerCreditsHistory')}>Credits History</Nav.Link>
                        </Nav>
                    </Col>
                    <Col sm={12} md={10}>
                        {activeTab === 'profile' && <ProfileCard />}
                        {activeTab === 'summary' && <SummaryCard />}
                        {activeTab === 'CustomerCreditsHistory' && <CustomerCreditsHistory />}

                        {/* {activeTab === 'profile' && (loadingStats ? <div className="d-flex justify-content-center align-items-center" style={{ height: "100%" }}><Spinner animation="border" /> </div>
                            : <ProfileCard data={stats} />)}
                        {activeTab === 'summary' && (loadingStats ? <div className="d-flex justify-content-center align-items-center" style={{ height: "100%" }}><Spinner animation="border" /> </div>
                            : <SummaryCard data={stats} />)}
                        {activeTab === 'CustomerCreditsHistory' && (loadingCustomer ?
                            <div className="d-flex justify-content-center align-items-center" style={{ height: "100%" }}><Spinner animation="border" /> </div>
                            : <CustomerCreditsHistory data={customers} />)} */}
                    </Col>
                </Row>
            </div>
            <FooterComponent />
        </>
    );
};

export default UserProfile;
