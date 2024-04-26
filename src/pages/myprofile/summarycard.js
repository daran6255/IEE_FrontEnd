import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';


const SummaryCard = ({ data }) => {
    return (
        <div className="summary-card-container" style={{ width: '90%' }}>
            <Card className="summary-card">
                <Card.Body>
                    <Row>
                        <Col md={6} lg={3}>
                            <Card className="summary-info-card bg-custom1">
                                <Card.Body>
                                    <Card.Title className='card-title'>Total Credits</Card.Title>
                                    <Card.Text className='card-text'>{data.totalcredits}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} lg={3}>
                            <Card className="summary-info-card bg-custom2">
                                <Card.Body>
                                    <Card.Title className='card-title'>Used Credits</Card.Title>
                                    <Card.Text className='card-text'>{data.totalcredits - data.creditsavailable}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} lg={3}>
                            <Card className="summary-info-card bg-custom3">
                                <Card.Body>
                                    <Card.Title className='card-title'>Available Credits</Card.Title>
                                    <Card.Text className='card-text'>{data.creditsavailable}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} lg={3}>
                            <Card className="summary-info-card bg-custom4">
                                <Card.Body>
                                    <Card.Title className='card-title'>Extracted Invoice</Card.Title>
                                    <Card.Text className='card-text'>{(data.totalcredits - data.creditsavailable) / 5}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} lg={3}>
                            <Card className="summary-info-card bg-custom5">
                                <Card.Body>
                                    <Card.Title className='card-title'>Remaining Invoice</Card.Title>
                                    <Card.Text className='card-text'>{data.creditsavailable / 5}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} lg={3}>
                            <Card className="summary-info-card bg-custom6">
                                <Card.Body>
                                    <Card.Title className="card-title">Buy Credits</Card.Title>
                                    <div className="button-center">
                                        <Button variant="outline-primary">Buy Credits</Button>
                                    </div>
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
