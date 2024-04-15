import React from 'react';
import { Row, Col } from 'react-bootstrap';
import DashBoardNavbar from '../../layouts/dbnavbar';
import FooterComponent from '../../layouts/footer';
import ProfileCard from '../../layouts/profilecard';
import CreditsCardCard from '../../layouts/creditscard';
import CreditHistoryChart from '../../layouts/creditshistory';

const DashboardPage = () => {
    return (
        <>
            <DashBoardNavbar />
            <Row>
                <Col md={3}><ProfileCard /></Col> {/* Width: 25% */}
                <Col md={9}><CreditsCardCard /></Col> {/* Width: 75% */}
            </Row>
            <Row>
                <Col><CreditHistoryChart /></Col> {/* Width: 100% */}
            </Row>
            <FooterComponent />
        </>
    );
};

export default DashboardPage;
