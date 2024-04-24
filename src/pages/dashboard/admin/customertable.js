import React from 'react';
import { Table } from 'react-bootstrap';
import moment from 'moment-timezone';

const CustomerTable = ({ data }) => {
    return (
        <div style={{ width: '90%', height: 'auto' }}>
            <Table striped bordered hover responsive="md">
                <thead>
                    <tr>
                        <th>Sl. No</th>
                        <th>Customer Name</th>
                        <th>Company</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Registered Date</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 && data.map((item, index) => (
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.company}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{moment.utc(item.createdAt).format()}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default CustomerTable;
