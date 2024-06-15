import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal, Button, Form, Container, Row, Col } from 'react-bootstrap';

import {
    downloadJson,
    downloadExcel,
} from '../../stores/thunk';

const ExportModal = ({ requestId, show, handleClose }) => {
    const dispatch = useDispatch();

    const [exportOptions, setExportOptions] = useState({
        saveToJSON: true,
        saveToExcel: true
    });

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setExportOptions(prevOptions => ({
            ...prevOptions,
            [name]: checked
        }));
    };

    const handleDownload = () => {
        if (exportOptions.saveToJSON) {
            dispatch(downloadJson(requestId));
        }
        if (exportOptions.saveToExcel) {
            dispatch(downloadExcel(requestId));
        }
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Export Data</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Row>
                        <Col>
                            <p>All data of this batch will be exported to a single file.</p>
                            <Form>
                                <Form.Group controlId="formSaveToJSON">
                                    <Form.Check
                                        type="checkbox"
                                        label="Save to JSON"
                                        name="saveToJSON"
                                        checked={exportOptions.saveToJSON}
                                        onChange={handleCheckboxChange}
                                    />
                                </Form.Group>
                                <Form.Group controlId="formSaveToExcel">
                                    <Form.Check
                                        type="checkbox"
                                        label="Save to Excel"
                                        name="saveToExcel"
                                        checked={exportOptions.saveToExcel}
                                        onChange={handleCheckboxChange}
                                    />
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleDownload}>
                    Download
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ExportModal;
