import React from 'react';
import { Card } from 'react-bootstrap';
import { PieChart } from 'react-minimal-pie-chart'; // Import the pie chart library

const CreditsCard = ({ totalCredits, availableCredits, usageData }) => {
    return (
        <Card className="credits-card">
            <Card.Body>
                <Card.Title>Total Credits: {totalCredits}</Card.Title>
                <Card.Text>Available Credits: {availableCredits}</Card.Text>
                <div className="pie-chart">
                    {/* Pie chart to visualize credit usage */}
                    <PieChart
                        data={usageData}
                        lineWidth={15}
                        paddingAngle={5}
                        label={({ dataEntry }) => `${Math.round(dataEntry.percentage)} %`}
                        labelStyle={(index) => ({
                            fontSize: '5px',
                            fontFamily: 'sans-serif',
                        })}
                    />
                </div>
            </Card.Body>
        </Card>
    );
};

export default CreditsCard;
