import React, { useRef, useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Card, Table, Button, ProgressBar, Spinner, Alert, Badge, Modal } from 'react-bootstrap';
import { createSelector } from 'reselect'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faFileExcel, faFileCode } from '@fortawesome/free-solid-svg-icons';
import { IoTrashSharp } from 'react-icons/io5';
import { FaExclamationTriangle } from 'react-icons/fa';

import upload from '../../../assets/images/upload.jpg';
import {
  uploadInvoice,
  getInvoiceRequests,
  downloadJson,
  downloadExcel,
  deleteRequests,
} from '../../../stores/thunk';

const CustomerDashboard = () => {

  const dispatch = useDispatch();

  const requestData = createSelector(
    (state) => state.Invoice,
    (state) => ({
      requests: state.requests,
      loadingRequest: state.loadingRequest,
      fileUploadingProgress: state.fileUploadingProgress,
      error: state.error,
    })
  );

  const {
    requests, loadingRequest, fileUploadingProgress, error } = useSelector(requestData);

  useEffect(() => {
    dispatch(getInvoiceRequests());
  }, [dispatch]);

  const handleFileUpload = async (event) => {
    const files = Array.from(event.target.files);
    const images = files.filter(file => file.type.startsWith('image/'));
    dispatch(uploadInvoice(images));
  };
  
  const [dragOver, setDragOver] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [requestToDelete, setRequestToDelete] = useState(null);
  const fileInputRef = useRef(null);
  const statusMap = {
    0: { variant: 'secondary', text: 'Uploading' },
    1: { variant: 'secondary', text: 'Uploaded' },
    2: { variant: 'warning', text: 'Processing' },
    3: { variant: 'success', text: 'Success' },
    4: { variant: 'danger', text: 'Failure' },
  };

  const getAllFileEntries = async (item, fileList = []) => {
    return new Promise((resolve) => {
      if (item.isFile) {
        item.file((file) => {
          if (file.type.startsWith('image/')) {
            fileList.push(file);
          }
          resolve(fileList);
        });
      } else if (item.isDirectory) {
        const dirReader = item.createReader();
        dirReader.readEntries(async (entries) => {
          for (const entry of entries) {
            await getAllFileEntries(entry, fileList);
          }
          resolve(fileList);
        });
      }
    });
  };

  const handleDrop = async (e) => {
    e.preventDefault();
    setDragOver(false);
    const items = e.dataTransfer.items;
    let files = [];
    for (const item of items) {
      const entry = item.webkitGetAsEntry();
      if (entry) {
        files = await getAllFileEntries(entry, files);
      }
    }
    dispatch(uploadInvoice(files));
  };
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleShowDelete = (requestId) => {
    setRequestToDelete(requestId);
    setShowDelete(true);
  }

  const handleDelete = () => {
    if (!requestToDelete) return
    dispatch(deleteRequests(requestToDelete));
    setShowDelete(false);
  };

  return (
    <Fragment>
      {/* <DashBoardNavbar /> */}
      <Container>
        <Row className="mt-4 justify-content-center">
          <Col xs={12} md={5} className="mx-auto">
            <Card
              className={`mb-4 ${dragOver ? 'border-primary' : 'border-dashed'}`}
              style={{ border: '2px dashed #ccc', width: '100%' }}
              onDragOver={(e) => {
                e.preventDefault();
                setDragOver(true);
              }}
              onDragLeave={() => setDragOver(false)}
              onDrop={handleDrop}
              onClick={handleClick}
            >
              <Card.Body className="text-center">
                <img src={upload} alt="Upload" style={{ width: '50%', margin: '0 auto', display: 'block' }} />
                <p className="mt-2">Drag and drop a Folder here or click to browse</p>
                <input
                  type="file"
                  webkitdirectory="true"
                  mozdirectory="true"
                  ref={fileInputRef}
                  style={{ display: 'none' }}
                  onChange={handleFileUpload}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0, 0, 0, 0.5)',
                    zIndex: 10,
                    display: dragOver ? 'flex' : 'none',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1.5rem',
                  }}
                >
                  Drop here to upload folder
                </div>
                <ProgressBar now={fileUploadingProgress} label={`${Math.round(fileUploadingProgress)}%`} />
              </Card.Body>
            </Card>
            <div className="text-center">
              <p>click button to upload files
                <Button variant="warning" style={{ marginLeft: "5px" }} onClick={handleButtonClick}>
                  Upload files
                </Button>
              </p>
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleFileUpload}
                multiple
              />
            </div>
            
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs lg="6">
            {fileUploadingProgress === 100 ? <Alert variant="success" dismissible >
              <p>
                Your invoices are being processed. You will be notified via email once complete.
              </p>
            </Alert> : null}
            {error ? <Alert variant="danger" dismissible>
              <p>
                An error occurred. Kindly attempt re-uploading after a short while.
              </p>
            </Alert> : null}
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <Card>
              <Card.Header>
                Your Request History
                <Button variant="primary" size="sm" style={{ float: 'right' }} onClick={() => dispatch(getInvoiceRequests())}>
                  Refresh
                </Button>
              </Card.Header>
              <Card.Body>
                <div style={{ overflowX: 'auto', textAlign: 'center' }}>
                  {loadingRequest ? <Spinner animation="border" /> :
                    (requests && requests.length > 0 ? <Table striped bordered hover>
                      < thead >
                        <tr>
                          <th>Sl.</th>
                          <th>Request #</th>
                          <th>Date</th>
                          <th># Pages</th>
                          <th>Status</th>
                          <th>Show Results</th>
                          <th>Download</th>
                          <th>Delete</th>
                        </tr>
                      </thead>
                      <tbody>
                        {requests.map((request, index) => {
                          const { variant, text } = statusMap[request.status];
                          return (
                            <tr key={index}>
                              <td>{index + 1}</td>
                              <td>{request.id}</td>
                              <td>{request.createdAt}</td>
                              <td>{request.totalImages}</td>
                              <td><Badge bg={variant}>{text}</Badge></td>
                              <td>
                                <Link to={`/result-view/${request.id}`}>
                                  <Button style={{ backgroundColor: 'transparent', border: 'none' }} disabled={request.status !== 3}>
                                    <FontAwesomeIcon style={{ color: 'blue' }} icon={faEye} />
                                  </Button>
                                </Link>
                              </td>
                              <td>
                                <div className="d-flex justify-content-center">
                                  <Button variant="success" className="me-2" disabled={request.status !== 3} onClick={() => dispatch(downloadExcel(request.id))}>
                                    <FontAwesomeIcon icon={faFileExcel} /> Excel
                                  </Button>
                                  <Button variant="warning" disabled={request.status !== 3} onClick={() => dispatch(downloadJson(request.id))}>
                                    <FontAwesomeIcon icon={faFileCode} /> JSON
                                  </Button>
                                </div>
                              </td>
                              <td>
                                <Button style={{ backgroundColor: 'transparent', border: 'none' }} onClick={() => handleShowDelete(request.id)} disabled={request.status !== 3 && request.status !== 4}>
                                  <IoTrashSharp size={20} style={{ color: 'red' }} />
                                </Button>
                              </td>
                            </tr>)
                        })}
                      </tbody>
                    </Table> : <p>No requests done. Please upload your invoices.</p>)}
                </div>
                <Alert variant="info" className="mt-1">
                  <small>
                    <strong>Tip:</strong> Invoice data will be automatically deleted in 5 days after processing. However, you can choose to manually delete at any time.
                  </small>
                </Alert>
              </Card.Body>
            </Card>
          </Col>
        </Row >
      </Container >
      <Modal show={showDelete} onHide={() => setShowDelete(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FaExclamationTriangle color="red" className="mb-2" />
          <strong>Warning:</strong> Once deleted, the data cannot be recovered. Please ensure you have downloaded any necessary information before proceeding.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDelete(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Confirm Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment >
  );
}

export default CustomerDashboard;
