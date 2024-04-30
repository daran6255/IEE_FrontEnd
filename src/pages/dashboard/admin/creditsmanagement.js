import React, { useState } from 'react';
import { createSelector } from 'reselect';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Button, Modal, Form, Spinner } from 'react-bootstrap';
import { PiCurrencyInr } from "react-icons/pi";
import { FcRefresh } from "react-icons/fc";
import moment from 'moment-timezone';
import { toast } from 'react-toastify';

import { getCustomerCreditHistory, addCredits } from '../../../stores/thunk';

const CreditsTable = ({ data }) => {
    const dispatch = useDispatch();

    const creditsData = createSelector(
        (state) => state.Admin,
        (state) => ({
            creditsHistory: state.creditsHistory,
            loadingCredits: state.loadingCredits,
            loadingAddCredits: state.loadingAddCredits,
        })
    );

    const { creditsHistory, loadingCredits, loadingAddCredits } = useSelector(creditsData);

    const [showAddModal, setShowAddModal] = useState(false);
    const [showHistoryModal, setShowHistoryModal] = useState(false);
    const [credits, setCredits] = useState('');
    const [selectedCustomer, setSelectedCustomer] = useState(null);

    const handleCloseAddModal = () => setShowAddModal(false);
    const handleShowAddModal = (customerId) => {
        setSelectedCustomer(customerId);
        setShowAddModal(true);
    }

    const handleCloseHistoryModal = () => setShowHistoryModal(false);
    const handleShowHistoryModal = () => setShowHistoryModal(true);

    const handleAddCredits = () => {
        if (selectedCustomer != null && credits > 0) {
            dispatch(addCredits({ 'userId': selectedCustomer, 'credits': credits }));
        }
        else {
            toast.error('Customer id/credits invalid!');
        }
    };

    const handleViewHistory = (userId) => {
        dispatch(getCustomerCreditHistory(userId));
        handleShowHistoryModal();
    };

    return (
        <div style={{ width: '90%', height: 'auto' }}>
            <div className="refresh-container" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <FcRefresh size={24} style={{ cursor: 'pointer' }} />
            </div>
            <Table striped bordered hover responsive="md">
                <thead>
                    <tr style={{ textAlign: 'center' }}>
                        <th>Sl. No</th>
                        <th>Customer Name</th>
                        <th>Total credits bought</th>
                        <th>Available Credits</th>
                        <th>Action</th>
                        <th>Credits History</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(data) && data.length > 0 && data.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.totalCredits}</td>
                            <td>{item.availableCredits}</td>
                            <td style={{ textAlign: 'center' }}>
                                <Button variant="info" onClick={() => handleShowAddModal(item.id)}>Add Credits</Button>
                            </td>
                            <td style={{ textAlign: 'center' }}>
                                <Button variant="warning" onClick={() => handleViewHistory(item.id)}>View</Button>
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
                    <Button variant="success" disabled={loadingAddCredits} onClick={handleAddCredits}>{loadingAddCredits ? 'Adding...' : 'Add'}</Button>
                    <Button variant="danger" onClick={handleCloseAddModal}>Cancel</Button>
                </Modal.Footer>
            </Modal>

            {/* View History Modal */}
            <Modal size="lg" show={showHistoryModal} onHide={handleCloseHistoryModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Credits Purchase History</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {Array.isArray(creditsHistory) && creditsHistory.length > 0 ? (loadingCredits ? <Spinner animation="border" /> :
                        <Table striped bordered hover responsive>
                            <thead>
                                <tr>
                                    <th>Credits Purchased</th>
                                    <th>Amount</th>
                                    <th>Payment Status</th>
                                    <th>Payment Date</th>
                                    <th>Credits added at</th>
                                </tr>
                            </thead>
                            <tbody>
                                {creditsHistory.map((row, index) => (
                                    <tr key={index}>
                                        <td>{row.creditsBought}</td>
                                        <td><PiCurrencyInr size={12} />{row.amountPaid}</td>
                                        <td style={{ color: row.paymentStatus ? 'green' : 'red', fontWeight: 'bold' }}>{row.paymentStatus ? 'success' : 'failed'}</td>
                                        <td>{moment.utc(row.paymentDate).format()}</td>
                                        <td>{row.addedBy}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>) :
                        <p>No credits purchased</p>
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleCloseHistoryModal}>Close</Button>
                </Modal.Footer>
            </Modal>


        </div>
    );
};

export default CreditsTable;
