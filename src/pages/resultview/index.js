import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect'
import { Container, Row, Col, Card, Table, Form, Button, Modal, Alert } from 'react-bootstrap';
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
import { FaSave, FaUndo, FaPlus, FaTimes } from 'react-icons/fa';
import { PiExport } from "react-icons/pi";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

import DashBoardNavbar from '../../layouts/dbnavbar';
import {
  getAllInvoiceData,
  getInvoiceData,
  getInvoiceFile,
  updateInvoiceData,
} from '../../stores/thunk';
import CenteredSpinner from '../../components/common/centeredSpinner';
import ExportModal from './exportModal';

const mappings = {
  singleValueEntities: {
    'Customer Name': 'CUSTOMER',
    'Customer GST#': 'CGSTIN',
    'Vendor Name': 'VENDOR',
    'Vendor GST#': 'VGSTIN',
    'Invoice Number': 'INVOICENO',
    'Invoice Date': 'INVOICEDATE',
    'Grand Total': 'GRANDTOTAL',
    'Taxable Amount': 'TAXABLEAMT'
  },
  arrayEntities: {
    'Item Name': 'ITEMNAME',
    'HSN': 'HSN',
    'Price': 'PRICE',
    'Quantity': 'QUANTITY',
    'Units': 'UNIT',
    'Amount': 'AMOUNT'
  }
};


const ResultView = () => {
  const { requestId } = useParams();
  const dispatch = useDispatch();

  const invoiceRequestData = createSelector(
    (state) => state.Invoice,
    (state) => ({
      requestData: state.requestData,
      invoiceData: state.invoiceData,
      invoiceFile: state.invoiceFile,
      loadingData: state.loadingData,
      loadingFile: state.loadingFile,
      loadingAllData: state.loadingAllData,
      updatingData: state.updatingData,
      error: state.error,
      requestError: state.requestError
    })
  );

  const {
    requestData,
    invoiceData,
    invoiceFile,
    loadingData,
    loadingFile,
    loadingAllData,
    updatingData,
    requestError } = useSelector(invoiceRequestData);

  const [showModal, setShowModal] = useState(false);
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [showExportModal, setShowExportModal] = useState(false)
  const [showExportSaveModal, setShowExportSaveModal] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0);
  const [tempActiveIndex, setTempActiveIndex] = useState(0);
  const [entitiesData, setEntitiesData] = useState(null);
  const totalData = requestData.length;

  useEffect(() => {
    if (requestId) {
      dispatch(getAllInvoiceData(requestId));
    }
  }, [dispatch, requestId]);

  useEffect(() => {
    if (requestData.length > 0) {
      dispatch(getInvoiceFile({ requestId: requestId, invoiceName: requestData[activeIndex] }));
      dispatch(getInvoiceData({ requestId: requestId, invoiceName: requestData[activeIndex] }));
    }
  }, [dispatch, requestData, requestId, activeIndex]);

  useEffect(() => {
    if (Object.keys(invoiceData).length > 0) {
      setEntitiesData(invoiceData.entities)
    }
  }, [invoiceData]);

  const handleSingleValueChange = (entity, event) => {
    const newValue = event.target.value;
    setEntitiesData(prevData => ({
      ...prevData,
      [entity]: { ...prevData[entity], value: newValue }
    }));
  };


  const handleArrayValueChange = (entity, index, event) => {
    const newValue = event.target.value;
    setEntitiesData(prevData => {
      const updatedArray = prevData[entity].map((item, i) => i === index ? { ...item, value: newValue } : item);
      return {
        ...prevData,
        [entity]: updatedArray
      };
    });
  };

  const addRow = () => {
    const newRow = { value: "" };
    setEntitiesData(prevData => {
      const updatedData = {};
      Object.keys(mappings.arrayEntities).forEach(key => {
        const entity = mappings.arrayEntities[key];
        updatedData[entity] = [...prevData[entity], newRow];
      });
      return {
        ...prevData,
        ...updatedData
      };
    });
  };

  const deleteRow = (index) => {
    setEntitiesData(prevData => {
      const updatedData = {};
      Object.keys(mappings.arrayEntities).forEach(key => {
        const entity = mappings.arrayEntities[key];
        updatedData[entity] = prevData[entity].filter((_, i) => i !== index);
      });
      return {
        ...prevData,
        ...updatedData
      };
    });
  };

  const uploadInvoiceData = () => {
    if (totalData > 0 && entitiesData != null) {
      const newEntities = JSON.parse(JSON.stringify(invoiceData));
      newEntities.entities = entitiesData;
      dispatch(updateInvoiceData({ requestId: requestId, data: newEntities }));
    }

  }

  const handleConfirmSave = () => {
    uploadInvoiceData();
    setShowModal(false);

    if (tempActiveIndex !== activeIndex) {
      setActiveIndex(tempActiveIndex)
      setShowSaveModal(false);
    }
  };

  const handleReset = () => {
    if (totalData > 0) {
      dispatch(getInvoiceData({ requestId: requestId, invoiceName: requestData[activeIndex] }));
    }
  };

  const handleDataChange = (index) => {
    setTempActiveIndex(index);

    if (JSON.stringify(entitiesData) === JSON.stringify(invoiceData.entities)) {
      setActiveIndex(index);
    }
    else {
      setShowSaveModal(true);
    }
  }

  const handleDiscardChanges = () => {
    setActiveIndex(tempActiveIndex);
    setShowSaveModal(false);
  }


  const handleExportChange = () => {
    if (JSON.stringify(entitiesData) === JSON.stringify(invoiceData.entities)) {
      setShowExportModal(true);
    }
    else {
      setShowExportSaveModal(true);
    }
  }

  const handleExportConfirmSave = () => {
    uploadInvoiceData();
    setShowExportSaveModal(false);
    handleReset();
  };


  const handleExportDiscardChanges = () => {
    setShowExportSaveModal(false);
    setShowExportModal(true);
  }


  return (
    <>
      <DashBoardNavbar />
      {requestError ?
        (<Container style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Alert variant="danger" style={{ textAlign: 'center' }}>
            <Alert.Heading>Wrong Request</Alert.Heading>
            <p>Please go to the home page.</p>
            <Link to="/">
              <Button >Go Home</Button>
            </Link>
          </Alert> </Container>) : (
          <Container fluid className="d-flex flex-column p-2">
            {loadingAllData || loadingData ? <CenteredSpinner /> :
              totalData > 0 && entitiesData != null ? <Row className="flex-grow-1 m-0">
                <Col xs={12} md={6} className="d-flex flex-column p-2">
                  <Card className="flex-grow-1" style={{ maxHeight: '85vh' }}>
                    <Card.Header>
                      <div className="d-flex justify-content-center align-items-center" style={{ height: '38px' }}>
                        {requestData[activeIndex]}
                      </div>
                    </Card.Header>
                    <Card.Body className="d-flex flex-column" style={{ overflowY: 'auto' }}>
                      {loadingFile ? <CenteredSpinner /> :
                        <Zoom>
                          <img
                            className="d-block w-100"
                            src={invoiceFile}
                            alt="First slide"
                            style={{ height: '100%', objectFit: 'cover' }}
                          />
                        </Zoom>}
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} md={6} className="d-flex flex-column p-2">
                  <Row className="flex-grow-1 m-0">
                    <Col xs={12} className="d-flex flex-column p-0">
                      <Card className="flex-grow-1" style={{ maxHeight: '85vh' }}>
                        <Card.Header>
                          <div className="d-flex justify-content-between">
                            <div className="d-flex align-items-center justify-content-start">
                              <Button
                                variant="light"
                                onClick={() => handleDataChange(activeIndex - 1)}
                                disabled={activeIndex === 0}
                                style={{ backgroundColor: 'lightgrey', marginRight: '5px' }}
                              >
                                <MdOutlineNavigateBefore size={20} />
                              </Button>
                              <Button
                                variant="light"
                                onClick={() => handleDataChange(activeIndex + 1)}
                                disabled={activeIndex === totalData - 1}
                                style={{ backgroundColor: 'lightgrey' }}
                              >
                                <MdOutlineNavigateNext size={20} />
                              </Button>
                              <div className="mx-3">
                                {<strong>{activeIndex + 1}</strong>} of {<strong>{totalData}</strong>} Invoices
                              </div>
                            </div>

                            <div>
                              <Button style={{ marginRight: '5px' }} variant="secondary" onClick={handleReset} disabled={updatingData}><FaUndo /> Reset</Button>
                              <Button style={{ marginRight: '5px' }} variant="success" onClick={() => setShowModal(true)} disabled={updatingData}><FaSave /> Save</Button>
                              <Button variant="warning" onClick={handleExportChange} disabled={updatingData}><PiExport /> Export</Button>
                            </div>
                          </div>

                        </Card.Header>
                        <Card.Body className="d-flex flex-column" style={{ overflowY: 'auto' }}>
                          <p style={{ fontSize: '24px', textAlign: 'center' }}>
                            Extracted Entities
                          </p>
                          <Table bordered>
                            <thead>
                              <tr>
                                <th>Entity Name</th>
                                <th>Entity Value</th>
                              </tr>
                            </thead>
                            <tbody>
                              {Object.entries(mappings.singleValueEntities).map(([label, entity], index) => (
                                <tr key={index}>
                                  <td>{label}</td>
                                  <td>
                                    <Form.Control
                                      type="text"
                                      value={entitiesData[entity]?.value || ''}
                                      onChange={(e) => handleSingleValueChange(entity, e)}
                                    />
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </Table>
                          <p style={{ fontSize: '24px', textAlign: 'center' }}>
                            Item Details
                          </p>
                          <Table striped bordered>
                            <thead>
                              <tr>
                                {Object.keys(mappings.arrayEntities).map(key => (
                                  <th key={key}>{key}</th>
                                ))}
                                <th>Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              {entitiesData.ITEMNAME.map((_, index) => (
                                <tr key={index}>
                                  {Object.values(mappings.arrayEntities).map(entity => (
                                    <td key={entity}>
                                      <Form.Control
                                        type="text"
                                        value={entitiesData[entity][index]?.value || ''}
                                        onChange={(e) => handleArrayValueChange(entity, index, e)}
                                      />
                                    </td>
                                  ))}
                                  <td>
                                    <Button variant="danger" style={{ background: 'none', border: 'none' }} onClick={() => deleteRow(index)}>
                                      <FaTimes style={{ color: 'red' }} />
                                    </Button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </Table>
                          <div className="d-flex justify-content-end">
                            <Button variant="primary" onClick={addRow}>
                              <FaPlus /> Add Row
                            </Button>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row> : (<Container style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Alert variant="warning" style={{ textAlign: 'center' }}>
                  <Alert.Heading>Invoice data not found</Alert.Heading>
                  <p>Please contact the admin.</p>
                  <Link to="/">
                    <Button >Go Home</Button>
                  </Link>
                </Alert> </Container>)}
          </Container>)
      }

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Any changes you make will be permanent and cannot be undone once saved. Please review your modifications carefully before proceeding to save.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleConfirmSave}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showSaveModal} onHide={() => setShowSaveModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Warning</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          You have made changes that have not been saved. If you proceed, these changes will be discarded. Do you want to continue?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleDiscardChanges}>
            Discard
          </Button>
          <Button variant="success" onClick={handleConfirmSave}>
            Save & Continue
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showExportSaveModal} onHide={() => setShowExportSaveModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Warning</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          You have made changes that have not been saved. If you proceed, these changes will be discarded. Do you want to continue?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleExportDiscardChanges}>
            Discard & Export
          </Button>
          <Button variant="success" onClick={handleExportConfirmSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>

      <ExportModal requestId={requestId} show={showExportModal} handleClose={() => setShowExportModal(false)} />
    </>
  );
}

export default ResultView;
