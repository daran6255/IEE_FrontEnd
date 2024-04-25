import React from 'react';
import { Table } from 'react-bootstrap';
import moment from 'moment-timezone';
import { PiCurrencyInr } from "react-icons/pi";

const CreditsHistory = ({ credits }) => {
    return (
        <div style={{ width: '90%', height: 'auto' }}>
            {credits.length > 0 ?
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Sl. No</th>
                            <th>Credits Purchased</th>
                            <th>Amount</th>
                            <th>Payment Status</th>
                            <th>Payment Date</th>
                            <th>Credits added at</th>
                        </tr>
                    </thead>
                    <tbody>
                        {credits.map((row, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{row.creditsBought}</td>
                                <td><PiCurrencyInr size={12} />{row.amountPaid}</td>
                                <td style={{ color: row.paymentStatus ? 'green' : 'red', fontWeight: 'bold' }}>{row.paymentStatus ? 'success' : 'failed'}</td>
                                <td>{moment.utc(row.paymentDate).format()}</td>
                                <td>{row.addedBy}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table> :
                <p>No credits purchased</p>
            }
        </div>
    );
};

export default CreditsHistory;
