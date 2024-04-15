import React from 'react';
import { Card } from 'react-bootstrap';
import { PieChart } from 'react-minimal-pie-chart';

const InvoiceCard = ({ totalInvoiceProcessed = 100, invoiceCanBeProcessed = 60 }) => {
    // Data for the pie chart
    const usageData = [
        { title: 'Invoice Processed', value: totalInvoiceProcessed, color: '#2d733b' }, // Green color for total invoice processed
        { title: 'Invoice Can be Processed', value: invoiceCanBeProcessed, color: '#1671a6' }, // Blue color for invoice can be processed
    ];

    return (
        <Card className="credits-card" style={{ maxWidth: '300px', width: '25%', margin: '10px' }}>
            <Card.Body>
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
            </Card.Body>
        </Card>
    );
};

export default InvoiceCard;
