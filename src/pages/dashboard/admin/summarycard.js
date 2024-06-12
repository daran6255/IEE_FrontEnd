import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { PiCurrencyInr } from "react-icons/pi";
import { BiRefresh } from "react-icons/bi";

const SummaryCard = ({ data, onRefresh }) => {
    return (
        <div className="container" style={{ width: '90%' }}>
            <div className="refresh-container mb-2" style={{ display: 'flex', justifyContent: 'flex-end' }} on>
                <Button variant="outline-primary" onClick={onRefresh}>
                    <BiRefresh /> Refresh
                </Button>
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
