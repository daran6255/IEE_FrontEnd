import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const CreditHistoryChart = () => {
    const purchaseHistory = [
        { date: '2024-03-23', credits: 200 },
        { date: '2024-04-23', credits: 500 },
        { date: '2024-05-23', credits: 300 },
        { date: '2024-06-15', credits: 600 },
        { date: '2024-06-30', credits: 100 }
    ];

    return (
        <div>
            <h2>Credit Purchase History</h2>
            <LineChart width={500} height={300} data={purchaseHistory}>
                <XAxis dataKey="date" />
                <YAxis />
                <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                <Line type="monotone" dataKey="credits" stroke="#8884d8" />
                <Tooltip />
                <Legend />
            </LineChart>
        </div>
    );
};

export default CreditHistoryChart;
