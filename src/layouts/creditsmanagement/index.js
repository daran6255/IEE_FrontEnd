import React, { useState } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';
import { PiCurrencyInr } from "react-icons/pi";
import moment from 'moment-timezone';

const CreditsTable = ({ data }) => {

    const [showAddModal, setShowAddModal] = useState(false);
    const [showHistoryModal, setShowHistoryModal] = useState(false);
    const [credits, setCredits] = useState('');
    const [historyData, setHistoryData] = useState([]);

    const handleCloseAddModal = () => setShowAddModal(false);
    const handleShowAddModal = () => setShowAddModal(true);

    const handleCloseHistoryModal = () => setShowHistoryModal(false);
    const handleShowHistoryModal = () => setShowHistoryModal(true);



    const handleAddCredits = () => {
        // Add logic here to handle adding credits
        console.log("Adding credits:", credits);
        handleCloseAddModal(); // Close the add credits modal after adding credits
    };

    const handleViewHistory = () => {
        // Fetch history data from API or somewhere else and set it in the state
        const exampleHistoryData = [
            { date: '2023-06-01', addedby: 'customer', credits: '200', amount: '20', paymentdate: '2023-06-01', status: 'success' },
            { date: '2023-06-05', addedby: 'Admin', credits: '300', amount: '30', paymentdate: '', status: '' },
            { date: '2023-07-10', addedby: 'customer', credits: '400', amount: '40', paymentdate: '2023-06-01', status: 'success' },
            { date: '2023-08-15', addedby: 'Admin', credits: '500', amount: '50', paymentdate: '', status: '' }
        ];
        setHistoryData(exampleHistoryData);
        handleShowHistoryModal(); // Show the history modal
    };

    return (
        <div style={{ width: '90%', height: 'auto' }}>
            <Table striped bordered hover responsive="md">
                <thead>
                    <tr>
                        <th>Sl. No</th>
                        <th>Customer Name</th>
                        <th>Total credits bought</th>
                        <th>Available Credits</th>
                        <th>Action</th>
                        <th>Credits History</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.totalCredits}</td>
                            <td>{item.availableCredits}</td>
                            <td>
                                <Button variant="info" onClick={handleShowAddModal}>Add Credits</Button>
                            </td>
                            <td>
                                <Button variant="warning" onClick={handleViewHistory}>View</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            {/* Add Credits Modal */}
            <Modal show={showAddModal} onHide={handleCloseAddModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Credits</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="formCredits">
                        <Form.Label>Enter Credits:</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Enter credits"
                            value={credits}
                            onChange={(e) => setCredits(e.target.value)}
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleCloseAddModal}>Cancel</Button>
                    <Button variant="success" onClick={handleAddCredits}>Add</Button>
                </Modal.Footer>
            </Modal>

            {/* View History Modal */}
            <Modal size="lg" show={showHistoryModal} onHide={handleCloseHistoryModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Credits Purchase History</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>Date of Purchase</th>
                                <th>Credits Purchased</th>

                                <th>Amount</th>
                                <th>Credits added by</th>
                                <th>Payment Date</th>
                                <th>Payment Status</th>

                            </tr>
                        </thead>
                        <tbody>
                            {historyData.map((row, index) => (
                                <tr key={index}>
                                    <td>{row.date}</td>
                                    <td>{row.credits}</td>
                                    <td><PiCurrencyInr size={12} />{row.amount}</td>
                                    <td>{row.addedby}</td>
                                    <td>{row.paymentdate}</td>
                                    <td style={{ color: row.status === 'success' ? 'green' : 'red', fontWeight: 'bold' }}>{row.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleCloseHistoryModal}>Close</Button>
                </Modal.Footer>
            </Modal>


        </div>
    );
};

export default CreditsTable;
