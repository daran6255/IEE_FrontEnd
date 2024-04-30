import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { PiCurrencyInr } from "react-icons/pi";
import { FcRefresh } from "react-icons/fc";

const SummaryCard = ({ data }) => {
    return (
        <div className="container" style={{ width: '90%' }}>
            <div className="refresh-container" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <FcRefresh size={24} style={{ cursor: 'pointer' }} />
            </div>
            <div className="summary-card-container">
                <Card className="summary-card">
                    <Card.Body>
                        <Row>
                            <Col md={6} lg={3}>
                                <Card className="summary-info-card bg-custom1">
                                    <Card.Body>
                                        <Card.Title className='card-title'>No. of Customers</Card.Title>
                                        <Card.Text className='card-text'>{data.totalCustomers}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={6} lg={3}>
                                <Card className="summary-info-card bg-custom2">
                                    <Card.Body>
                                        <Card.Title className='card-title'>Total Credits Bought</Card.Title>
                                        <Card.Text className='card-text'>{data.totalCredits}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={6} lg={3}>
                                <Card className="summary-info-card bg-custom3">
                                    <Card.Body>
                                        <Card.Title className='card-title'>Used Credits</Card.Title>
                                        <Card.Text className='card-text'>{data.usedCredits}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={6} lg={3}>
                                <Card className="summary-info-card bg-custom4">
                                    <Card.Body>
                                        <Card.Title className='card-title'>Invoices Extracted</Card.Title>
                                        <Card.Text className='card-text'>{data.totalInvoiceExtracted}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={6} lg={3}>
                                <Card className="summary-info-card bg-custom5">
                                    <Card.Body>
                                        <Card.Title className='card-title'>Amount Credited</Card.Title>
                                        <Card.Text className='card-text'>
                                            <PiCurrencyInr size={20} />
                                            {data.totalAmount}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default SummaryCard;
