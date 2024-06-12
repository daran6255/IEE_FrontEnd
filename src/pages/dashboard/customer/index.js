import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Card, Table, Button, ProgressBar } from 'react-bootstrap';
import { createSelector } from 'reselect'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faFileExcel, faFileCode } from '@fortawesome/free-solid-svg-icons';
import { IoTrashSharp } from 'react-icons/io5';

import DashBoardNavbar from '../../../layouts/dbnavbar';
import upload from '../../../assets/images/upload.jpg';

// import {
//   initUpload,
//   uploadInvoice
// } from '../../../helpers/backend_helper';

const CustomerDashboard = () => {

  const dispatch = useDispatch();

  const entitiesData = createSelector(
      (state) => state.Invoice,
      (state) => ({
          requestId: state.requestId,
          entities: state.entities,
          loading: state.loading,
      })
  );

  const {
      requestId,
      entities, loading } = useSelector(entitiesData);

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState('');
  const chunkSize = 5;
  const maxRetries = 3;

  const handleSelect = (selectedIndex, e) => {
    setSelectedIndex(selectedIndex);
};

const initializeUploadSession = async (totalImages) => {
    let currRequestId = null;

    // try {
    //     const response = await initUpload({ total_images: totalImages });
    //     currRequestId = response.request_id;
    // } catch (error) {
    //     setMessage('Failed to initialize upload session');
    // }

    return currRequestId;
};

const uploadImages = async (images, requestId) => {
  let uploadedCount = 0;
  const totalImages = images.length;
  
  for (let i = 0; i < totalImages; i += chunkSize) {
      const chunk = images.slice(i, i + chunkSize);
      let success = false;
      let attempts = 0;

      while (!success && attempts < maxRetries) {
          try {
              const formData = new FormData();
              formData.append('request_id', requestId);
              chunk.forEach(file => {
                  const fileName = file.name;
                  const newFile = new File([file], fileName, { type: file.type });
                  formData.append('images', newFile);
              });

              // await uploadInvoice(formData,
              //     // eslint-disable-next-line no-loop-func
              //     (progressEvent) => {
              //         const total = progressEvent.total;
              //         const current = progressEvent.loaded;
              //         setProgress((uploadedCount + current / total) / totalImages * 100);
              //     }
              // );

              uploadedCount += chunk.length;
              success = true;
          } catch (error) {
              attempts++;
              if (attempts === maxRetries) {
                  setProgress(0);
                  setMessage('Failed to upload some images after multiple attempts');
                  return;
              }
          }
      }
  }

  setMessage('Upload successful');
};

const handleFileUpload = async (event) => {
  // const formData = new FormData();

  // for (let i = 0; i < selectedFiles.length; i++) {
  //     formData.append('files[]', selectedFiles[i], selectedFiles[i].name);
  // }

  // dispatch(processInvoice(formData));

  let uploadedCount = 0;
  const files = Array.from(event.target.files);
  const imageFiles = files.filter(file => file.type.startsWith('image/'));
  const totalImages = imageFiles.length;
  console.log(totalImages);

  const currRequestId = await initializeUploadSession(totalImages);
  if (!currRequestId) {
      return
  }

  await uploadImages(imageFiles, currRequestId);
};

const isEntitiesAvailable = selectedIndex < entities.length;
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
      {/* <DashBoardNavbar /> */}
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
                  webkitdirectory="true"
                  mozdirectory="true"
                  ref={fileInputRef}
                  style={{ display: 'none' }}
                  onChange={handleFileUpload}
                />
                <ProgressBar now={progress} label={`${Math.round(progress)}%`} />
                {message && <div>{message}</div>}
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
                        <th># Pages</th>
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
