import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { Container, Row, Col, Form, Button, Carousel, Spinner } from 'react-bootstrap';

import { processInvoice } from '../../stores/thunk';

const OutputPreview = () => {
    const dispatch = useDispatch();

    const entitiesData = createSelector(
        (state) => state.Invoice,
        (state) => ({
            entities: state.entities,
            loading: state.loading,
        })
    );

    const { entities, loading } = useSelector(entitiesData);

    const [selectedFiles, setSelectedFiles] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(1);

    const handleFileChange = (event) => {
        setSelectedFiles(event.target.files);
    };

    const handleSelect = (selectedIndex, e) => {
        setSelectedIndex(selectedIndex + 1);
    };

    const handleUpload = async () => {
        const formData = new FormData();

        for (let i = 0; i < selectedFiles.length; i++) {
            formData.append('files[]', selectedFiles[i], selectedFiles[i].name);
        }

        dispatch(processInvoice(formData));
    };

    const data = {
        "header": ['SLNO', 'DATE', 'VENDOR', 'CUSTOMER', 'CON NO', 'CONSIGNEE', 'DESTINATION', 'WEIGHT', 'AMOUNT'],
        "row1": ['1', '02-06-23', 'ABC', 'WVF', '3516505', 'KARNATAKA', 'Madurai', '0,650', '30.00'],
        "row2": ['2', '02-06-23', 'ABC', 'WVF', '3516506', 'KARNATAKA', 'Madurai', '0.320', '30.00'],
        "row3": ['3', '02-06-23', 'ABC', 'WVF', '3516507', 'KARNATAKA', 'Madurai', '0.360', '30.00'],
        "row4": ['4', '05-06-23', 'ABC', 'WVF', '3516508', 'KARNATAKA', 'Madurai', '500', '60,00']
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
                        <Button className='download-button1' variant="primary">Download Excel</Button>
                        <Button className='download-button2' variant="primary">Download Json</Button>
                    </Col>
                </Row>
                <Row>
                    <Col className="box-cell-ImagePreview text-center">
                        {selectedFiles.length > 0 ?
                            <>
                                <Row className="justify-content-center text-center">
                                    <Col>{selectedFiles[selectedIndex - 1].name}</Col>
                                    <Col>{selectedIndex} of {selectedFiles.length}</Col>
                                </Row>
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
                                {loading ?
                                    <Spinner animation="border" /> :
                                    <div><pre>{JSON.stringify(entities, null, 2)}</pre></div>
                                }
                            </Col>
                        </Row>
                        <Row>
                            <Col className="box-cell-tablePreview">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            {data.header.map((headerItem, index) => (
                                                <th key={index}>{headerItem}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Object.keys(data).filter(key => key !== 'header').map((rowKey, rowIndex) => (
                                            <tr key={rowIndex}>
                                                {data[rowKey].map((rowData, cellIndex) => (
                                                    <td key={cellIndex}>{rowData}</td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </Col>
                        </Row>
                    </Col>
                </Row >
            </Container >
        </>
    );
};

export default OutputPreview;
