import React from 'react';
import { Card, Row, Col, Button, Table } from 'react-bootstrap';

const CreditsCard = ({ totalCredits = 100, availableCredits = 60, usedCredits = 40, totalInvoiceProcessed = 100, invoiceCanBeProcessed = 60 }) => {
    // Calculate percentage of used credits
    const usedPercentage = (usedCredits / totalCredits) * 100;
    const data = {
        "header": ['SLNO', 'DATE', 'Prchased by', 'credits purchased', 'Available credits', 'Amount', 'Payment date', 'Payment status'],
        "row1": ['1', '02-06-23', 'customer', '500', '100', '300.00', '02-06-23', 'success'],
        "row2": ['2', '02-07-23', 'customer', '5000', '100', '300.00', '02-06-23', 'success'],
        "row3": ['3', '12-08-23', 'customer', '300', '100', '300.00', '02-06-23', 'success'],
        "row4": ['4', '25-09-23', 'customer', '50', '100', '600.00', '02-06-23', 'success'],
        "row4": ['4', '25-09-23', 'Admin', '50', '100', '', '', '']
    };

    return (
        <Card className="credits-card" style={{ margin: '10px' }}>
            <Card.Body>
                <Row>
                    {/* First Row */}
                    <Col xs={12}>
                        <Row>

                            <Col xs={4}>
                                {/* Total Credits */}
                                <Card className="credit-info" style={{ backgroundColor: '#2d733b', color: 'white', marginBottom: '10px' }}>
                                    <Card.Body>
                                        <Card.Title>Total Credits</Card.Title>
                                        <Card.Text>{totalCredits}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={4}>
                                {/* Used Credits */}
                                <Card className="credit-info" style={{ backgroundColor: '#9e335c', color: 'white', marginBottom: '10px' }}>
                                    <Card.Body>
                                        <Card.Title>Used Credits</Card.Title>
                                        <Card.Text>{usedCredits}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={4}>
                                {/* Available Credits */}
                                <Card className="credit-info" style={{ backgroundColor: '#1671a6', color: 'white', marginBottom: '10px' }}>
                                    <Card.Body>
                                        <Card.Title>Available Credits</Card.Title>
                                        <Card.Text>{availableCredits}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    {/* Second Row */}
                    <Col xs={12}>
                        <Row>
                            <Col xs={4}>
                                {/* Extracted Invoice */}
                                <Card className="credit-info" style={{ backgroundColor: '#6A2135', color: 'white', marginBottom: '10px' }}>
                                    <Card.Body>
                                        <Card.Title>Extracted Invoice</Card.Title>
                                        <Card.Text>{totalCredits}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={4}>
                                {/* Extract Invoice */}
                                <Card className="credit-info" style={{ backgroundColor: '#E38627', color: 'white', marginBottom: '10px' }}>
                                    <Card.Body>
                                        <Card.Title>Extract Invoice</Card.Title>
                                        <Card.Text>{availableCredits}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={4}>
                                {/* Buy Credits */}
                                <Card className="credit-info" style={{ marginBottom: '10px', textAlign: 'center' }}>
                                    <Card.Body>
                                        <Card.Title>Buy Credits</Card.Title>
                                        <Button variant="outline-primary" className="mt-auto">Buy Credits</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Row>
                            <Col xs={4}>
                                <Card className="credit-info" style={{ backgroundColor: '#6A2135', color: 'white', marginBottom: '10px' }}>
                                    <Card.Body>
                                        <Card.Title>Total Amount</Card.Title>
                                        <Card.Text>{totalCredits}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <div style={{ overflowX: 'auto' }}>
                            <Table striped bordered hover responsive>
                                <thead>
                                    <tr>
                                        {data.header.map((headerItem, index) => (
                                            <th key={index}>{headerItem}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.keys(data).filter(key => key !== 'header').map((rowKey, rowIndex) => (
                                        <tr key={rowIndex}>
                                            {data[rowKey].map((rowData, cellIndex) => (
                                                <td key={cellIndex}>{rowData}</td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default CreditsCard;
