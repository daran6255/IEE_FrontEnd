import React, { useState } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';

const CreditsTable = () => {
    const data = {
        "row1": ['1', 'test-1', 'XYZ', '200', '02-06-23'],
        "row2": ['2', 'test-1', 'XYZ', '300', '02-07-23'],
        "row3": ['3', 'test-1', 'XYZ', '400', '12-08-23'],
        "row4": ['4', 'test-1', 'XYZ', '500', '25-09-23']
    };

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
            { date: '2023-06-01', credits: '200', amount: '$20' },
            { date: '2023-06-05', credits: '300', amount: '$30' },
            { date: '2023-07-10', credits: '400', amount: '$40' },
            { date: '2023-08-15', credits: '500', amount: '$50' }
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
                        <th>Company</th>
                        <th>Available Credits</th>
                        <th>Last credit Buy</th>
                        <th>Action</th>
                        <th>History</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(data).map((key) => (
                        <tr key={key}>
                            {data[key].map((cell, index) => (
                                <td key={index}>{cell}</td>
                            ))}
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
                            </tr>
                        </thead>
                        <tbody>
                            {historyData.map((row, index) => (
                                <tr key={index}>
                                    <td>{row.date}</td>
                                    <td>{row.credits}</td>
                                    <td>{row.amount}</td>
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
