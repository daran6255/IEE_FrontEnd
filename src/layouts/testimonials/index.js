import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const TestimonialsComponent = () => {
    return (
        <Container className="testimonials-container">
            <h2 className="text-center mb-5 testimonials-heading">Testimonials</h2>
            <Row>
                <Col md={4}>
                    <Card className="testimonial-card">
                        <Card.Body>
                            <Card.Text className="testimonial-content">
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam congue
                                ullamcorper mauris, ac vestibulum dolor luctus vel. Phasellus consequat,
                                nunc vel."
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="testimonial-footer">
                            <small className="text-muted">John Doe, CEO at XYZ Company</small>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="testimonial-card">
                        <Card.Body>
                            <Card.Text className="testimonial-content">
                                "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
                                cubilia Curae; Quisque non nulla quis sapien malesuada commodo vitae nec
                                purus. Mauris et quam non odio eleifend laoreet."
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="testimonial-footer">
                            <small className="text-muted">Jane Smith, Marketing Manager</small>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="testimonial-card">
                        <Card.Body>
                            <Card.Text className="testimonial-content">
                                "Integer porttitor quam vel purus rutrum, a ultrices dolor pharetra. Donec
                                tincidunt nisi id consequat faucibus. Mauris auctor ipsum odio, ac cursus
                                dolor blandit nec."
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="testimonial-footer">
                            <small className="text-muted">Alice Johnson, Customer</small>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default TestimonialsComponent;
