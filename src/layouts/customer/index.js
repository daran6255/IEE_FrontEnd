import React from 'react';
import { Table } from 'react-bootstrap';

const DataTable = () => {
    const data = {
        "row1": ['1', 'test-1', 'XYZ', 'abc@gmail.com', '1234567890', '02-06-23'],
        "row2": ['2', 'test-1', 'XYZ', 'abc@gmail.com', '1234567890', '02-07-23'],
        "row3": ['3', 'test-1', 'XYZ', 'abc@gmail.com', '1234567890', '12-08-23'],
        "row4": ['4', 'test-1', 'XYZ', 'abc@gmail.com', '1234567890', '25-09-23']
    };

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
                    {Object.keys(data).map((key) => (
                        <tr key={key}>
                            {data[key].map((cell, index) => (
                                <td key={index}>{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default DataTable;
