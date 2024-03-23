import React, { useState } from 'react'; // Import React and useState
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import NavBarComponent from '../../layouts/navbar';
import Heading from '../../layouts/heading';
import FooterComponent from '../../layouts/footer';

const HomePage = () => {

  return (
    <>
      <NavBarComponent />
      <Heading />
      <Container fluid>
        <h1>Home page</h1>
      </Container>
      <FooterComponent />
    </>
  );
};

export default HomePage;
