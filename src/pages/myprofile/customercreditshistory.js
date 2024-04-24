import React from 'react';
import { Table } from 'react-bootstrap';
import moment from 'moment-timezone';

const CustomerCreditsHistory = ({ data }) => {
    return (
        <div style={{ width: '90%', height: 'auto' }}>
            <Table striped bordered hover responsive="md">
                <thead>
                    <tr>
                        <th>Sl. No</th>
                        <th>Date</th>
                        <th>Added by</th>
                        <th>Available credits</th>
                        <th>Amount</th>
                        <th>Payment status</th>
                        <th>Payment Date</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.Date}</td>
                            <td>{item.addedBy}</td>
                            <td>{item.availableCredits}</td>
                            <td>{item.amountPaid}</td>
                            <td>{item.paymentStatus}</td>
                            <td>{moment.utc(item.paymentDate).format()}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default CustomerCreditsHistory;
