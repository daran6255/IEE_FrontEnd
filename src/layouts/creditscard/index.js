import React from 'react';
import { Card } from 'react-bootstrap';
import { PieChart } from 'react-minimal-pie-chart';

const CreditsCard = ({ totalCredits = 100, availableCredits = 60, usedCredits = 40, totalInvoiceProcessed = 100, invoiceCanBeProcessed = 60 }) => {
    // Calculate percentage of used credits
    const usedPercentage = (usedCredits / totalCredits) * 100;

    // Data for the pie chart
    const usageData = [
        { title: 'Invoice Processed', value: totalInvoiceProcessed, color: '#2d733b' }, // Green color for total invoice processed
        { title: 'Invoice Can be Processed', value: invoiceCanBeProcessed, color: '#1671a6' }, // Blue color for invoice can be processed
        { title: 'Available', value: availableCredits, color: '#E38627' }, // Green color for available credits
        { title: 'Used', value: usedCredits, color: '#6A2135' }, // Red color for used credits
    ];

    return (
        <Card className="credits-card" style={{ width: '100%', margin: '10px' }}>
            <Card.Body>
                <div className="row">
                    {/* Column for Total Credits, Available Credits, and Used Credits */}
                    <div className="col">
                        <div className="row">
                            {/* Total Credits */}
                            <Card className="credit-info" style={{ width: '100%', margin: '10px', backgroundColor: '#2d733b', color: 'white' }}>
                                <Card.Body>
                                    <Card.Title style={{ fontSize: '15px' }}>Total Credits</Card.Title>
                                    <Card.Text style={{ fontSize: '30px', fontWeight: 'bold' }}>{totalCredits}</Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="row">
                            {/* Available Credits */}
                            <Card className="credit-info" style={{ width: '100%', margin: '10px', backgroundColor: '#1671a6', color: 'white' }}>
                                <Card.Body>
                                    <Card.Title style={{ fontSize: '15px' }}>Available Credits</Card.Title>
                                    <Card.Text style={{ fontSize: '30px', fontWeight: 'bold' }}>{availableCredits}</Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="row">
                            {/* Used Credits */}
                            <Card className="credit-info" style={{ width: '100%', margin: '10px', backgroundColor: '#9e335c', color: 'white' }}>
                                <Card.Body>
                                    <Card.Title style={{ fontSize: '15px' }}>Used Credits</Card.Title>
                                    <Card.Text style={{ fontSize: '30px', fontWeight: 'bold' }}>{usedCredits}</Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                    {/* Column for the Pie Chart */}
                    <div className="col">
                        <div className="row">
                            {/* Pie chart to visualize credit usage */}
                            <PieChart
                                data={usageData}
                                label={({ dataEntry }) => `${Math.round(dataEntry.percentage)} %`}
                                labelStyle={(index) => ({
                                    fontSize: '5px',
                                    fontFamily: 'sans-serif',
                                    color: 'white',
                                })}
                                style={{ width: '100%', height: '300px', margin: '10px' }} // Adjust the height here
                            />
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            {/* Column for Total Invoice Processed and Invoice Can be Processed */}
                            <div className="col">
                                <div className="row">
                                    {/* Total Invoice Processed */}
                                    <Card className="credit-info" style={{ width: '80%', margin: '10px', backgroundColor: '#2d733b', color: 'white' }}>
                                        <Card.Body>
                                            <Card.Title style={{ fontSize: '15px' }}>Total Invoice Processed</Card.Title>
                                            <Card.Text style={{ fontSize: '30px', fontWeight: 'bold' }}>{totalInvoiceProcessed}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div className="row">
                                    {/* Invoice Can be Processed */}
                                    <Card className="credit-info" style={{ width: '80%', margin: '10px', backgroundColor: '#1671a6', color: 'white' }}>
                                        <Card.Body>
                                            <Card.Title style={{ fontSize: '15px' }}>Invoice Can be Processed</Card.Title>
                                            <Card.Text style={{ fontSize: '30px', fontWeight: 'bold' }}>{invoiceCanBeProcessed}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                            {/* Column for the Pie Chart */}

                        </div>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};

export default CreditsCard;