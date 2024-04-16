import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { Container, Row, Col, Form, Button, Carousel, Spinner, Table } from 'react-bootstrap';

import { processInvoice, downloadExcel, downloadJson } from '../../stores/thunk';

const OutputPreview = () => {
    const dispatch = useDispatch();

    const entitiesData = createSelector(
        (state) => state.Invoice,
        (state) => ({
            requestId: state.requestId,
            entities: state.entities,
            loading: state.loading,
        })
    );

    const { requestId, entities, loading } = useSelector(entitiesData);

    const [selectedFiles, setSelectedFiles] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleFileChange = (event) => {
        setSelectedFiles(event.target.files);
    };

    const handleSelect = (selectedIndex, e) => {
        setSelectedIndex(selectedIndex);
    };

    const handleUpload = async () => {
        const formData = new FormData();

        for (let i = 0; i < selectedFiles.length; i++) {
            formData.append('files[]', selectedFiles[i], selectedFiles[i].name);
        }

        dispatch(processInvoice(formData));
    };

    const isEntitiesAvailable = selectedIndex < entities.length;

    const EntitiesTable = (index) => {
        if (!isEntitiesAvailable || !entities[index].entities) {
            return <p>No entities detected</p>;
        }

        const entitiesObj = entities[index].entities;

        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Entity</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(entitiesObj).map(([key, values]) => {
                        if (key !== 'items') {
                            return (
                                <tr key={key}>
                                    <td>{key}</td>
                                    <td>{values.map((value, index) => <div key={index}>{value}</div>)}</td>
                                </tr>
                            );
                        }
                        return null;
                    })}
                </tbody>
            </Table>
        );
    };

    const ItemTable = (index) => {
        if (!isEntitiesAvailable || !entities[index].entities ||
            !entities[index].entities.items || entities[index].entities.items.length <= 1) {
            return <p>No items detected</p>;
        }

        const [header, ...rows] = entities[index].entities.items;

        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        {header.map((head, index) => (
                            <th key={index}>{head}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex}>{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </Table>
        );
    };

    return (
        <>
            <Container fluid>
                <Row>
                    <Col className="box-cell">
                        <Form>
                            <Form.Group controlId="formFileMultiple" className="mb-3 d-flex align-items-center">
                                {/* <Form.Label>Select .jpg files</Form.Label> */}
                                <Form.Control type="file" accept=".jpg" multiple className="mr-2" onChange={handleFileChange} />
                                <Button className='Process-button' variant="primary" onClick={handleUpload}>Process</Button>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col className="box-cell align-right">
                        <Button className='download-button1' variant="primary" onClick={() => dispatch(downloadExcel(requestId))} disabled={requestId === ''}>Download Excel</Button>
                        <Button className='download-button2' variant="primary" onClick={() => dispatch(downloadJson(requestId))} disabled={requestId === ''}>Download Json</Button>
                    </Col>
                </Row>
                <Row>
                    <Row className="justify-content-center text-center">
                        <Col style={{ fontWeight: 'bold' }}>
                            {`${isEntitiesAvailable && selectedFiles[selectedIndex].name} -  pages(${selectedIndex + 1} of ${selectedFiles.length})`}
                        </Col>
                    </Row>
                    <Col className="box-cell-ImagePreview text-center">
                        {selectedFiles.length > 0 ?
                            <>
                                <Row>
                                    <Carousel controls={true} interval={null} onSelect={handleSelect}>
                                        {Array.from(selectedFiles).map((file, index) => (
                                            <Carousel.Item key={index}>
                                                <img
                                                    className="d-block w-100"
                                                    src={URL.createObjectURL(file)}
                                                    alt={`Slide ${index}`}
                                                />
                                            </Carousel.Item>
                                        ))}
                                    </Carousel>
                                </Row>
                            </>
                            : <p>No Inovices Selected</p>}
                    </Col>

                    <Col>
                        <Row>
                            <Col className="box-cell-JsonPreview">
                                <div style={{ margin: '20px' }}>
                                    <h4>Invoice Entity</h4>
                                </div>
                                {loading ?
                                    <div className="d-flex justify-content-center align-items-center" style={{ height: "100%" }}><Spinner animation="border" /> </div>
                                    :
                                    isEntitiesAvailable ?
                                        <div style={{ padding: '5px' }}>{EntitiesTable(selectedIndex)}</div> :
                                        'Null'
                                }
                            </Col>
                        </Row>
                        <Row>

                            <Col className="box-cell-tablePreview">
                                <div style={{ margin: '20px' }}>
                                    <h4>Item Table</h4>
                                </div>

                                {loading ?
                                    <div className="d-flex justify-content-center align-items-center" style={{ height: "100%" }}><Spinner animation="border" /> </div> :
                                    <div>{ItemTable(selectedIndex)}</div>
                                }
                            </Col>
                        </Row>
                    </Col>
                </Row >
            </Container >
        </>
    );
};

export default OutputPreview;
