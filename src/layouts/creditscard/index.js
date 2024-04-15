import React from 'react';
import { Card, Row, Col, Button, Table } from 'react-bootstrap';
import { PieChart } from 'react-minimal-pie-chart';

const CreditsCard = ({ totalCredits = 100, availableCredits = 60, usedCredits = 40, totalInvoiceProcessed = 100, invoiceCanBeProcessed = 60 }) => {
    // Calculate percentage of used credits
    const usedPercentage = (usedCredits / totalCredits) * 100;

    // Data for the pie chart
    const usageData = [
        { title: 'Total credits', value: totalInvoiceProcessed, color: '#2d733b' },
        { title: 'Available credits', value: invoiceCanBeProcessed, color: '#1671a6' },
        { title: 'Used credits', value: usedCredits, color: '#9e335c' },
        { title: 'Extract Invoice', value: availableCredits, color: '#E38627' },
        { title: 'Extracted Invoice', value: availableCredits, color: '#6A2135' },
    ];
    const data = {
        "header": ['SLNO', 'DATE', 'credits purchased', 'Available', 'Amount'],
        "row1": ['1', '02-06-23', '500', '100', '300.00'],
        "row2": ['2', '02-07-23', '5000', '100', '300.00'],
        "row3": ['3', '12-08-23', '300', '100', '300.00'],
        "row4": ['4', '25-09-23', '50', '100', '600.00']
    };

    return (
        <Card className="credits-card" style={{ margin: '10px', width: '80%' }}> {/* Adjusted width here */}
            <Card.Body>
                <Row>
                    {/* Column for Total Credits, Available Credits, and Used Credits */}
                    <Col xs={12} md={4}>
                        {/* Available Credits */}
                        <Card className="credit-info" style={{ backgroundColor: '#1671a6', color: 'white', marginBottom: '10px' }}>
                            <Card.Body>
                                <Card.Title>Available Credits</Card.Title>
                                <Card.Text>{availableCredits}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={4}>
                        {/* Total Credits */}
                        <Card className="credit-info" style={{ backgroundColor: '#2d733b', color: 'white', marginBottom: '10px' }}>
                            <Card.Body>
                                <Card.Title>Total Credits</Card.Title>
                                <Card.Text>{totalCredits}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={4}>
                        {/* Used Credits & Buy Credits */}
                        <div className="d-flex flex-column justify-content-between h-100">
                            {/* Used Credits */}
                            <Card className="credit-info" style={{ backgroundColor: '#9e335c', color: 'white', marginBottom: '10px' }}>
                                <Card.Body>
                                    <Card.Title>Used Credits</Card.Title>
                                    <Card.Text>{usedCredits}</Card.Text>
                                </Card.Body>
                            </Card>
                            {/* Buy Credits Button */}
                            <Button variant="outline-primary" style={{ marginTop: 'auto' }}>Buy Credits</Button>
                        </div>
                    </Col>
                </Row>
                <Row>
                    {/* Column for Total Credits, Available Credits, and Used Credits */}
                    <Col xs={12} md={4}>
                        {/* Available Credits */}
                        <Card className="credit-info" style={{ backgroundColor: '#E38627', color: 'white', marginBottom: '10px' }}>
                            <Card.Body>
                                <Card.Title>Extract Invoice</Card.Title>
                                <Card.Text>{availableCredits}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={4}>
                        {/* Total Credits */}
                        <Card className="credit-info" style={{ backgroundColor: '#6A2135', color: 'white', marginBottom: '10px' }}>
                            <Card.Body>
                                <Card.Title>Extracted Invoice</Card.Title>
                                <Card.Text>{totalCredits}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/* Column for the Pie Chart */}
                <Row>
                    <Col xs={12} md={4}>
                        {/* Pie chart to visualize credit usage */}
                        <PieChart
                            data={usageData}
                            label={({ dataEntry }) => `${Math.round(dataEntry.percentage)} %`}
                            labelStyle={(index) => ({
                                fontSize: '7px',
                                fontFamily: 'sans-serif',
                                color: 'white',
                            })}
                            style={{ margin: '0 auto', width: '100%', height: '200px' }}
                        />
                    </Col>
                    <Col xs={12} md={8}>
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
