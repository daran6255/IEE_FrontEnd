import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { Row, Col, Nav, Spinner } from 'react-bootstrap';

import Overview from '../../../layouts/overview';
import Customer from '../../../layouts/customer';
import { getCustomers } from '../../../stores/thunk';

import CreditManagement from './creditsmanagement';

const AdminDashboard = () => {
    const dispatch = useDispatch();

    const userData = createSelector(
        (state) => state.Admin,
        (state) => ({
            customers: state.customers,
            loadingCustomer: state.loadingCustomer,
        })
    );

    const { customers, loadingCustomer } = useSelector(userData);

    const [activeTab, setActiveTab] = useState('Overview');

    useEffect(() => {
        switch (activeTab) {
            case 'Overview':
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

    return (
        <div style={{ overflowX: 'hidden' }}>
            <Row>
                <Col sm={12} md={2}>
                    <Nav className="flex-column">
                        <Nav.Link onClick={() => handleTabChange('Overview')}>Overview</Nav.Link>
                        <Nav.Link onClick={() => handleTabChange('Customer')}>Customers</Nav.Link>
                        <Nav.Link onClick={() => handleTabChange('CreditsManagement')}>Credits Management</Nav.Link>
                    </Nav>
                </Col>
                <Col sm={12} md={10}>
                    {activeTab === 'Overview' && <Overview />}
                    {activeTab === 'Customer' && (loadingCustomer ?
                        <div className="d-flex justify-content-center align-items-center" style={{ height: "100%" }}><Spinner animation="border" /> </div>
                        : <Customer data={customers} />)}
                    {activeTab === 'CreditsManagement' && (loadingCustomer ?
                        <div className="d-flex justify-content-center align-items-center" style={{ height: "100%" }}><Spinner animation="border" /> </div>
                        : <CreditManagement data={customers} />)}
                    {/* {activeTab === 'CreditsManagement' && <CreditManagement />} */}
                </Col>
            </Row>
        </div>
    );
};

export default AdminDashboard;
