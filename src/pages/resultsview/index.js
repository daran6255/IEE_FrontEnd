import React, { useState } from 'react';
import { Container, Row, Col, Card, Carousel, Table, Form, Button, Modal } from 'react-bootstrap';
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
import { FaSave, FaUndo, FaPlus, FaTimes } from 'react-icons/fa'; // Importing icons from Font Awesome
import DashBoardNavbar from '../../layouts/dbnavbar';
import upload1 from '../../assets/images/D 07-07 IN 1150 - INR 2008.jpg';
import upload2 from '../../assets/images/D 07-08 IN 1267 - INR 1580.jpg';
import upload3 from '../../assets/images/D 08-08 IN 1579 - INR 1789.jpg';
import upload5 from '../../assets/images/D 09-09 IN 069 - INR 346.jpg';

const ResultComparision = () => {
  const staticLabels = [
    'Customer Name', 'Customer GST#', 'Vendor Name', 'Vendor GST#', 
    'Invoice Number', 'Invoice Date', 'Grand Total', 'Taxable Amount'
  ];

  const [data, setData] = useState([
    { id: 1, value: 'John Doe' },
    { id: 2, value: '123456789' },
    { id: 3, value: 'Acme Corp' },
    { id: 4, value: '987654321' },
    { id: 5, value: 'INV-001' },
    { id: 6, value: '2023-06-01' },
    { id: 7, value: '2000.00' },
    { id: 8, value: '1800.00' },
  ]);

  const [secondTableData, setSecondTableData] = useState([
    { id: 1, slNo: 1, items: 'Item 1', HSN: '1234', price: 10, qty: 2, units: 'pcs', amount: 20 },
    { id: 2, slNo: 2, items: 'Item 2', HSN: '5678', price: 15, qty: 3, units: 'pcs', amount: 45 },
    { id: 3, slNo: 3, items: 'Item 3', HSN: '9101', price: 20, qty: 4, units: 'pcs', amount: 80 },
    { id: 4, slNo: 4, items: 'Item 4', HSN: '1121', price: 25, qty: 5, units: 'pcs', amount: 125 },
    { id: 5, slNo: 5, items: 'Item 5', HSN: '3141', price: 30, qty: 6, units: 'pcs', amount: 180 },
  ]);

  const [showModal, setShowModal] = useState(false);

  const handleValueChange = (id, event) => {
    const newValue = event.target.value;
    const newData = data.map((item, index) => {
      if (index === id) {
        return { ...item, value: newValue };
      }
      return item;
    });
    setData(newData);
  };

  const handleSecondTableChange = (id, field, value) => {
    const newData = secondTableData.map(item => {
      if (item.id === id) {
        return { ...item, [field]: value };
      }
      return item;
    });
    setSecondTableData(newData);
  };

  const handleAddRow = () => {
    const newId = secondTableData.length ? secondTableData[secondTableData.length - 1].id + 1 : 1;
    const newRow = { id: newId, slNo: newId, items: '', HSN: '', price: 0, qty: 0, units: '', amount: 0 };
    setSecondTableData([...secondTableData, newRow]);
  };

  const handleDeleteRow = (id) => {
    const newData = secondTableData.filter(item => item.id !== id);
    setSecondTableData(newData);
  };

  const handleSave = () => {
    setShowModal(true);
  };

  const handleConfirmSave = () => {
    console.log('Saving data:', data);
    console.log('Saving second table data:', secondTableData);
    setShowModal(false);
  };

  const handleCancelSave = () => {
    setShowModal(false);
  };

  const handleReset = () => {
    setData([
      { id: 1, value: 'John Doe' },
      { id: 2, value: '123456789' },
      { id: 3, value: 'Acme Corp' },
      { id: 4, value: '987654321' },
      { id: 5, value: 'INV-001' },
      { id: 6, value: '2023-06-01' },
      { id: 7, value: '2000.00' },
      { id: 8, value: '1800.00' },
    ]);

    setSecondTableData([
      { id: 1, slNo: 1, items: 'Item 1', HSN: '1234', price: 10, qty: 2, units: 'pcs', amount: 20 },
      { id: 2, slNo: 2, items: 'Item 2', HSN: '5678', price: 15, qty: 3, units: 'pcs', amount: 45 },
      { id: 3, slNo: 3, items: 'Item 3', HSN: '9101', price: 20, qty: 4, units: 'pcs', amount: 80 },
      { id: 4, slNo: 4, items: 'Item 4', HSN: '1121', price: 25, qty: 5, units: 'pcs', amount: 125 },
      { id: 5, slNo: 5, items: 'Item 5', HSN: '3141', price: 30, qty: 6, units: 'pcs', amount: 180 },
    ]);
  };

  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <>
      <DashBoardNavbar />
      <Container fluid className="d-flex flex-column p-2">
        <Row className="flex-grow-1 m-0">
          <Col xs={12} md={6} className="d-flex flex-column p-2">
            <Card className="flex-grow-1" style={{ maxHeight: '85vh' }}>
              <Card.Header>
                <div className="d-flex justify-content-center align-items-center">
                  <div className="carousel-controls">
                    <Button
                      variant="light"
                      onClick={() => setActiveIndex(activeIndex - 1)}
                      disabled={activeIndex === 0}
                    >
                      <MdOutlineNavigateBefore size={20} />
                    </Button>
                    <Button
                      variant="light"
                      onClick={() => setActiveIndex(activeIndex + 1)}
                      disabled={activeIndex === 4}
                    >
                      <MdOutlineNavigateNext size={20} />
                    </Button>
                  </div>
                </div>
              </Card.Header>
              <Card.Body className="d-flex flex-column" style={{ overflowY: 'auto' }}>
                <Carousel controls={false} interval={null} activeIndex={activeIndex} onSelect={handleSelect} className="flex-grow-1">
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={upload1}
                      alt="First slide"
                      style={{ height: '100%', objectFit: 'cover' }}
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={upload2}
                      alt="Second slide"
                      style={{ height: '100%', objectFit: 'cover' }}
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={upload3}
                      alt="Third slide"
                      style={{ height: '100%', objectFit: 'cover' }}
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={upload5}
                      alt="Fifth slide"
                      style={{ height: '100%', objectFit: 'cover' }}
                    />
                  </Carousel.Item>
                </Carousel>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} className="d-flex flex-column p-2">
            <Row className="flex-grow-1 m-0">
              <Col xs={12} className="d-flex flex-column p-0">
                <Card className="flex-grow-1" style={{ maxHeight: '85vh' }}>
                  <Card.Header>
                    <div className="d-flex justify-content-end">
                      <Button style={{ marginRight: '5px' }} variant="secondary" onClick={handleReset}><FaUndo /> Reset</Button>
                      <Button variant="success" onClick={handleSave}><FaSave /> Save</Button>
                    </div>
                  </Card.Header>
                  <Card.Body className="d-flex flex-column" style={{ overflowY: 'auto' }}>
                    <Card.Title>Extracted Output</Card.Title>
                    <Table bordered>
                      <thead>
                        <tr>
                          <th>Entity Name</th>
                          <th>Entity Value</th>
                        </tr>
                      </thead>
                      <tbody>
                        {staticLabels.map((label, index) => (
                          <tr key={index}>
                            <td>{label}</td>
                            <td>
                              <Form.Control
                                type="text"
                                value={data[index]?.value || ''}
                                onChange={(e) => handleValueChange(index, e)}
                              />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                    <br></br>
                    <Table striped bordered>
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Item Name</th>
                          <th>HSN</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th>Units</th>
                          <th>Amount</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {secondTableData.map(item => (
                          <tr key={item.id}>
                            <td>{item.slNo}</td>
                            <td>
                              <Form.Control
                                type="text"
                                value={item.items}
                                onChange={(e) => handleSecondTableChange(item.id, 'items', e.target.value)}
                              />
                            </td>
                            <td>
                              <Form.Control
                                type="text"
                                value={item.HSN}
                                onChange={(e) => handleSecondTableChange(item.id, 'HSN', e.target.value)}
                              />
                            </td>
                            <td>
                              <Form.Control
                                type="number"
                                value={item.price}
                                onChange={(e) => handleSecondTableChange(item.id, 'price', parseFloat(e.target.value))}
                              />
                            </td>
                            <td>
                              <Form.Control
                                type="number"
                                value={item.qty}
                                onChange={(e) => handleSecondTableChange(item.id, 'qty', parseInt(e.target.value))}
                              />
                            </td>
                            <td>
                              <Form.Control
                                type="text"
                                value={item.units}
                                onChange={(e) => handleSecondTableChange(item.id, 'units', e.target.value)}
                              />
                            </td>
                            <td>
                              <Form.Control
                                type="number"
                                value={item.amount}
                                onChange={(e) => handleSecondTableChange(item.id, 'amount', parseFloat(e.target.value))}
                              />
                            </td>
                            <td>
                              <Button variant="danger" style={{ background: 'none', border: 'none' }} onClick={() => handleDeleteRow(item.id)}>
                                <FaTimes style={{ color: 'red' }} />
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                    <div className="d-flex justify-content-end">
                      <Button variant="primary" onClick={handleAddRow}>
                        <FaPlus /> Add Row
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      <Modal show={showModal} onHide={handleCancelSave}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          The modified changes can't be reset.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleCancelSave}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleConfirmSave}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ResultComparision;
