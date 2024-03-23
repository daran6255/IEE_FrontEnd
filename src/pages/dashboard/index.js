import React, { useState } from 'react'; // Import React and useState
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import NavBarComponent from '../../layouts/navbar';
import Heading from '../../layouts/heading';
import FooterComponent from '../../layouts/footer';

const DashboardPage = () => {
  const data = {
    "header": ['SLNO', 'DATE','VENDOR','CUSTOMER','CON NO', 'CONSIGNEE', 'DESTINATION', 'WEIGHT', 'AMOUNT'],
    "row1": ['1','02-06-23','ABC','WVF','3516505', 'KARNATAKA','Madurai','0,650', '30.00'],
    "row2": ['2','02-06-23','ABC','WVF','3516506', 'KARNATAKA','Madurai','0.320', '30.00'],
    "row3": ['3','02-06-23','ABC','WVF','3516507', 'KARNATAKA','Madurai','0.360', '30.00'],
    "row4": ['4','05-06-23','ABC','WVF','3516508', 'KARNATAKA','Madurai','500', '60,00']
  };

  return (
    <>
      <NavBarComponent />
      <Heading />
      <Container fluid>
        <Row>
          <Col className="box-cell">
            <Form.Group controlId="formFile" className="mb-3 d-flex align-items-center">
              <Form.Control type="file" accept=".jpg" className="mr-2" />
              <Button className='Process-button' variant="primary">Process</Button>
            </Form.Group>
          </Col>
          <Col className="box-cell align-right">
            <Button className='download-button1' variant="primary">Download Excel</Button>
            <Button className='download-button2' variant="primary">Download Json</Button>
          </Col>
        </Row>
        <Row>
          <Col className="box-cell-ImagePreview">3 of 4</Col>
          <Col>
            <Row>
              <Col className="box-cell-JsonPreview">4 of 4 (2nd row)</Col>
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
        </Row>
      </Container>
      <FooterComponent />
    </>
  );
};

export default DashboardPage;
