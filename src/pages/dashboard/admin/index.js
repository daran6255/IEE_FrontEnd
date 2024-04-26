import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { Row, Col, Nav, Spinner } from 'react-bootstrap';

import { getCustomers, getDashboardStats } from '../../../stores/thunk';

import SummaryCard from './summarycard';
import CustomerTable from './customertable';
import CreditManagement from './creditsmanagement';

const AdminDashboard = () => {
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

    return (
        <div style={{ overflowX: 'hidden' }}>
            <Row>
                <Col sm={12} md={2} className="nav-column">
                    <Nav className="flex-column">
                        <Nav.Link
                            onClick={() => handleTabChange('Overview')}
                            className={activeTab === 'Overview' ? 'active-tab' : ''}
                        >
                            My Overview
                        </Nav.Link>
                        <Nav.Link
                            onClick={() => handleTabChange('Customer')}
                            className={activeTab === 'Customer' ? 'active-tab' : ''}
                        >
                            Customers
                        </Nav.Link>
                        <Nav.Link
                            onClick={() => handleTabChange('CreditsManagement')}
                            className={activeTab === 'CreditsManagement' ? 'active-tab' : ''}
                        >
                            Credits Management
                        </Nav.Link>
                    </Nav>
                </Col>
                <Col sm={12} md={10}>
                    {activeTab === 'Overview' && (loadingStats ? <div className="d-flex justify-content-center align-items-center" style={{ height: "100%" }}><Spinner animation="border" /> </div>
                        : <SummaryCard data={stats} />)}
                    {activeTab === 'Customer' && (loadingCustomer ?
                        <div className="d-flex justify-content-center align-items-center" style={{ height: "100%" }}><Spinner animation="border" /> </div>
                        : <CustomerTable data={customers} />)}
                    {activeTab === 'CreditsManagement' && (loadingCustomer ?
                        <div className="d-flex justify-content-center align-items-center" style={{ height: "100%" }}><Spinner animation="border" /> </div>
                        : <CreditManagement data={customers} />)}
                </Col>
            </Row>
        </div>
    );
};

export default AdminDashboard;
