import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { PiCurrencyInr } from "react-icons/pi";


const SummaryCard = ({ customers = '10', totalCreditsBought = '25000', usedCredits = '23456', invoicesExtracted = '500', amountCreditsPurchased = '250000' }) => {
    return (
        <div className="summary-card-container" style={{ width: '90%' }}>
            <Card className="summary-card">
                <Card.Body>
                    <Row>
                        <Col md={6} lg={3}>
                            <Card className="summary-info-card bg-custom1">
                                <Card.Body>
                                    <Card.Title className='card-title'>No. of Customers</Card.Title>
                                    <Card.Text className='card-text'>{customers}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} lg={3}>
                            <Card className="summary-info-card bg-custom2">
                                <Card.Body>
                                    <Card.Title className='card-title'>Total Credits Bought</Card.Title>
                                    <Card.Text className='card-text'>{totalCreditsBought}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} lg={3}>
                            <Card className="summary-info-card bg-custom3">
                                <Card.Body>
                                    <Card.Title className='card-title'>Used Credits</Card.Title>
                                    <Card.Text className='card-text'>{usedCredits}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} lg={3}>
                            <Card className="summary-info-card bg-custom4">
                                <Card.Body>
                                    <Card.Title className='card-title'>Invoices Extracted</Card.Title>
                                    <Card.Text className='card-text'>{invoicesExtracted}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} lg={3}>
                            <Card className="summary-info-card bg-custom5">
                                <Card.Body>
                                    <Card.Title className='card-title'>Amount Credited</Card.Title>
                                    <Card.Text className='card-text'><PiCurrencyInr size={20} />{amountCreditsPurchased}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>

                    </Row>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SummaryCard;
