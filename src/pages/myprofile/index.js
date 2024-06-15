import React, { useState, useEffect } from 'react';
import { createSelector } from 'reselect';
import { Row, Col, Nav } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import ProfileNavbar from '../../layouts/profilenav';
import FooterComponent from '../../layouts/footer';
import { changePassword } from '../../stores/thunk';

import ProfileCard from './profilecard';
import SummaryCard from './summarycard';
import CreditsHistory from './creditshistory';

import { getCustomerData, getCreditHistory } from '../../stores/thunk';
import CenteredSpinner from '../../components/common/centeredSpinner';

const UserProfile = () => {
    const dispatch = useDispatch();

    const userSelector = createSelector(
        (state) => state.Auth,
        (state) => ({
            user: state.user,
        })
    );

    const creditsData = createSelector(
        (state) => state.Customer,
        (state) => ({
            creditsHistory: state.creditsHistory,
            loadingCredits: state.loadingCredits,
        })
    );

    const customerData = createSelector(
        (state) => state.Customer,
        (state) => ({
            userData: state.userData,
            loadingData: state.loadingData,
        })
    );

    const { user } = useSelector(userSelector);
    const { userData, loadingData } = useSelector(customerData);
    const { creditsHistory, loadingCredits } = useSelector(creditsData);

    const [activeTab, setActiveTab] = useState('profile');

    useEffect(() => {
        switch (activeTab) {
            case 'summary':
                dispatch(getCustomerData());
                break;
            case 'creditsHistory':
                dispatch(getCreditHistory(user.id));
                break;
            default:
                break;
        }
    }, [dispatch, activeTab, user]);

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
                    <Col sm={12} md={2} className="nav-column">
                        <Nav className="flex-column">
                            <Nav.Link
                                onClick={() => handleTabChange('profile')}
                                className={activeTab === 'profile' ? 'active-tab' : ''}
                            >
                                My Profile
                            </Nav.Link>
                            <Nav.Link
                                onClick={() => handleTabChange('summary')}
                                className={activeTab === 'summary' ? 'active-tab' : ''}
                            >
                                Summary
                            </Nav.Link>
                            <Nav.Link
                                onClick={() => handleTabChange('creditsHistory')}
                                className={activeTab === 'creditsHistory' ? 'active-tab' : ''}
                            >
                                Credits History
                            </Nav.Link>
                        </Nav>
                    </Col>
                    <Col sm={12} md={10}>
                        {activeTab === 'profile' && <ProfileCard profile={user} onPasswordChange={onPasswordChange} />}
                        {activeTab === 'summary' && (loadingData ?
                            <CenteredSpinner />
                            : <SummaryCard data={userData} />)}
                        {activeTab === 'creditsHistory' && (loadingCredits ?
                            <CenteredSpinner />
                            : <CreditsHistory credits={creditsHistory} />)}
                    </Col>
                </Row>
            </div>
            <FooterComponent />
        </React.Fragment>
    );
};

export default UserProfile;
