import React, { useState } from 'react';
import { Container, Row, Col, Card, Carousel, Table, Form, Button } from 'react-bootstrap';
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
import { FaSave, FaUndo, FaPlus, FaTimes } from 'react-icons/fa'; // Importing icons from Font Awesome
import DashBoardNavbar from '../../layouts/dbnavbar';
import upload1 from '../../assets/images/D 07-07 IN 1150 - INR 2008.jpg';
import upload2 from '../../assets/images/D 07-08 IN 1267 - INR 1580.jpg';
import upload3 from '../../assets/images/D 08-08 IN 1579 - INR 1789.jpg';
// import upload4 from '../../assets/images/D 10-08 IN 478 - INR 2250.jpg';
import upload5 from '../../assets/images/D 09-09 IN 069 - INR 346.jpg';

const ResultComparision = () => {
  const [data, setData] = useState([
    { id: 1, name: 'Item 1', value: 10 },
    { id: 2, name: 'Item 2', value: 20 },
    { id: 3, name: 'Item 3', value: 30 },
    { id: 4, name: 'Item 4', value: 40 },
    { id: 5, name: 'Item 5', value: 50 },
  ]);

  const [secondTableData, setSecondTableData] = useState([
    { id: 1, slNo: 1, items: 'Item 1', HSN: '1234', price: 10, qty: 2, units: 'pcs', amount: 20 },
    { id: 2, slNo: 2, items: 'Item 2', HSN: '5678', price: 15, qty: 3, units: 'pcs', amount: 45 },
    { id: 3, slNo: 3, items: 'Item 3', HSN: '9101', price: 20, qty: 4, units: 'pcs', amount: 80 },
    { id: 4, slNo: 4, items: 'Item 4', HSN: '1121', price: 25, qty: 5, units: 'pcs', amount: 125 },
    { id: 5, slNo: 5, items: 'Item 5', HSN: '3141', price: 30, qty: 6, units: 'pcs', amount: 180 },
  ]);

  const handleNameChange = (id, event) => {
    const newData = data.map(item => {
      if (item.id === id) {
        return { ...item, name: event.target.value };
      }
      return item;
    });
    setData(newData);
  };

  const handleValueChange = (id, event) => {
    const newValue = parseFloat(event.target.value);
    if (!isNaN(newValue)) {
      const newData = data.map(item => {
        if (item.id === id) {
          return { ...item, value: newValue };
        }
        return item;
      });
      setData(newData);
    }
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
    // Implement save logic here
    console.log('Saving data:', data);
    console.log('Saving second table data:', secondTableData);
  };

  const handleReset = () => {
    // Implement reset logic here
    console.log('Resetting data');
    // Resetting to initial state
    setData([
      { id: 1, name: 'Item 1', value: 10 },
      { id: 2, name: 'Item 2', value: 20 },
      { id: 3, name: 'Item 3', value: 30 },
      { id: 4, name: 'Item 4', value: 40 },
      { id: 5, name: 'Item 5', value: 50 },
    ]);

    setSecondTableData([
      { id: 1, slNo: 1, items: 'Item 1', HSN: '1234', price: 10, qty: 2, units: 'pcs', amount: 20 },
      { id: 2, slNo: 2, items: 'Item 2', HSN: '5678', price: 15, qty: 3, units: 'pcs', amount: 45 },
      { id: 3, slNo: 3, items: 'Item 3', HSN: '9101', price: 20, qty: 4, units: 'pcs', amount: 80 },
      { id: 4, slNo: 4, items: 'Item 4', HSN: '1121', price: 25, qty: 5, units: 'pcs', amount: 125 },
      { id: 5, slNo: 5, items: 'Item 5', HSN: '3141', price: 30, qty: 6, units: 'pcs', amount: 180 },
    ]);
  };

  // Carousel state
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
                  {/* Carousel Control Buttons */}
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
                {/* Carousel */}
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
                  {/* <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={upload4}
                      alt="Fourth slide"
                      style={{ height: '100%', objectFit: 'cover' }}
                    />
                  </Carousel.Item> */}
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
                    <Card.Title>Editable Table 1</Card.Title>
                    <Table striped bordered>
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Value</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map(item => (
                          <tr key={item.id}>
                            <td>
                              <Form.Control
                                type="text"
                                value={item.name}
                                onChange={(e) => handleNameChange(item.id, e)}
                              />
                            </td>
                            <td>
                              <Form.Control
                                type="number"
                                value={item.value}
                                onChange={(e) => handleValueChange(item.id, e)}
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
                          <th>Sl. No</th>
                          <th>Items</th>
                          <th>HSN</th>
                          <th>Price</th>
                          <th>Qty</th>
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
                              <Button variant="danger" style={{background: 'none', border: 'none'}} onClick={() => handleDeleteRow(item.id)}>
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
    </>
  );
}

export default ResultComparision;
