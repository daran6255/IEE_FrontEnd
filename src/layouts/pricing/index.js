import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const PricingComponent = () => {
    return (
        <Container className="pricing-container">
            <h1 className="text-center mb-5">Our Pricing</h1>
            <Row>
                <Col md={4}>
                    <Card className="pricing-card">
                        <Card.Body>
                            <Card.Title className="text-center">Basic</Card.Title>
                            <div className="price text-center">
                                <span className="currency">$</span>
                                <span className="amount">19</span>
                                <span className="period">/month</span>
                            </div>
                            <ul className="feature-list">
                                <li className="feature">Feature 1</li>
                                <li className="feature">Feature 2</li>
                                <li className="feature">Feature 3</li>
                            </ul>
                            <Button variant="primary" >Choose Plan</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="pricing-card">
                        <Card.Body>
                            <Card.Title className="text-center">Standard</Card.Title>
                            <div className="price text-center">
                                <span className="currency">$</span>
                                <span className="amount">39</span>
                                <span className="period">/month</span>
                            </div>
                            <ul className="feature-list">
                                <li className="feature">Feature 1</li>
                                <li className="feature">Feature 2</li>
                                <li className="feature">Feature 3</li>
                                <li className="feature">Feature 4</li>
                            </ul>
                            <Button variant="primary">Choose Plan</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="pricing-card">
                        <Card.Body>
                            <Card.Title className="text-center">Premium</Card.Title>
                            <div className="price text-center">
                                <span className="currency">$</span>
                                <span className="amount">59</span>
                                <span className="period">/month</span>
                            </div>
                            <ul className="feature-list">
                                <li className="feature">Feature 1</li>
                                <li className="feature">Feature 2</li>
                                <li className="feature">Feature 3</li>
                                <li className="feature">Feature 4</li>
                                <li className="feature">Feature 5</li>
                            </ul>
                            <Button variant="primary" >Choose Plan</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default PricingComponent;
