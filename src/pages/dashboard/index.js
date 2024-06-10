import React, { useRef, useState } from 'react';
import { Container, Row, Col, Card, Table, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faEye, faTrash, faFileExcel, faFileCode } from '@fortawesome/free-solid-svg-icons';
import { IoTrashSharp } from 'react-icons/io5';

import DashBoardNavbar from '../../layouts/dbnavbar';
import upload from '../../assets/images/upload.jpg';

const CustomerDashboard = () => {
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => {
    setDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    console.log('File dropped:', file);
    // Implement your file handling logic here
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log('File selected:', file);
    // Implement your file handling logic here
  };

  const handleDelete = () => {
    // Implement delete logic here
    console.log('Item deleted');
  };

  return (
    <>
      <DashBoardNavbar />
      <Container>
        <Row className="mt-4 justify-content-center">
          <Col xs={12} md={5} className="mx-auto">
            <Card
              className={`mb-4 ${dragOver ? 'border-primary' : 'border-dashed'}`}
              style={{ border: '2px dashed #ccc', width: '100%' }}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={handleClick}
            >
              <Card.Body className="text-center">
                <img src={upload} alt="Upload" style={{ width: '50%', margin: '0 auto', display: 'block' }}/>
                <p className="mt-2">Drag and drop a file here or click to browse</p>
                <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: 'none' }}
                  onChange={handleFileChange}
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Process History</Card.Title>
                <div style={{ overflowX: 'auto', textAlign: 'center' }}>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>No. of Pages</th>
                        <th>Status</th>
                        <th>Show Results</th>
                        <th>Download</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>2024-06-05</td>
                        <td>10</td>
                        <td>Processed</td>
                        <td>
                          <button style={{border: 'none'}}>
                            <FontAwesomeIcon style={{ color: 'blue' }} icon={faEye}/>
                          </button>
                        </td>
                        {/* <td><Button variant="outline-info"><FontAwesomeIcon icon={faEye} /> Show</Button></td> */}
                        <td>
                          <div className="d-flex justify-content-center">
                            <Button variant="success" className="me-2">
                              <FontAwesomeIcon icon={faFileExcel} /> Excel
                            </Button>
                            <Button variant="warning">
                              <FontAwesomeIcon icon={faFileCode} /> JSON
                            </Button>
                          </div>
                        </td>
                        <td>
                          <button style={{border: 'none'}} onClick={handleDelete}>
                            <IoTrashSharp size={20} style={{ color: 'red' }} />
                          </button>
                        </td>
                      </tr>
                      {/* More rows can be added here */}
                    </tbody>
                  </Table>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CustomerDashboard;
