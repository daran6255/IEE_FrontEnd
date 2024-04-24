import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';


const SummaryCard = ({ data }) => {
    console.log(data);
    return (
        <div className="summary-card-container" style={{ width: '90%' }}>
            <Card className="summary-card">
                <Card.Body>
                    <Row>
                        <Col md={6} lg={3}>
                            <Card className="summary-info-card bg-custom1">
                                <Card.Body>
                                    <Card.Title className='card-title'>Total Credits</Card.Title>
                                    <Card.Text className='card-text'>{data.totalCredits}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} lg={3}>
                            <Card className="summary-info-card bg-custom2">
                                <Card.Body>
                                    <Card.Title className='card-title'>Used Credits</Card.Title>
                                    <Card.Text className='card-text'>{data.usedCredits}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} lg={3}>
                            <Card className="summary-info-card bg-custom3">
                                <Card.Body>
                                    <Card.Title className='card-title'>Available Credits</Card.Title>
                                    <Card.Text className='card-text'>{data.availableCredits}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} lg={3}>
                            <Card className="summary-info-card bg-custom4">
                                <Card.Body>
                                    <Card.Title className='card-title'>Extracted Invoice</Card.Title>
                                    <Card.Text className='card-text'>{data.totalInvoiceExtracted}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} lg={3}>
                            <Card className="summary-info-card bg-custom5">
                                <Card.Body>
                                    <Card.Title className='card-title'>Remaining Invoice</Card.Title>
                                    <Card.Text className='card-text'>{data.remainingInvoice}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} lg={3}>
                            <Card className="summary-info-card bg-custom5">
                                <Card.Body>
                                    <Card.Title>Buy Credits</Card.Title>
                                    <Button variant="outline-primary" className="mt-auto">Buy Credits</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SummaryCard;
