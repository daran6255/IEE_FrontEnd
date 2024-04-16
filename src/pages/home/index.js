import PropTypes from 'prop-types';


import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import NavBarComponent from '../../layouts/navbar';
import Banner from '../../assets/images/ai.png';
import svgimage1 from '../../assets/images/data-extraction.jpg';
import svgimage2 from '../../assets/images/12977758_5107041.jpg';
import svgimage3 from '../../assets/images/13338131_5214651.jpg';
import { FaLayerGroup, FaListAlt, FaTable, FaFileExcel, FaFileJson, FaUserCog, FaDownload, FaCreditCard, FaLock } from 'react-icons/fa';
import Customer from '../../layouts/customerreview';
import Footer from '../../layouts/footer';
import withRouter from '../../components/common/withRouter';
import './HomePage.css'; // Import custom styles for HomePage

const Home = () => {
  return (
    <div className="home-page-container">
      <NavBarComponent />
      {/* Banner Section */}
      <section className="banner-section">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <div className="banner-content">
                <h1 className="banner-heading">Discover the Power of Invoice Extraction</h1>
                <p className="banner-description">Effortlessly extract invoice data using cutting-edge OCR and entity extraction technology.</p>
                <Button variant="primary" className="banner-button">Get Started</Button>
              </div>
            </Col>
            <Col md={6}>
              <img src={Banner} alt="Banner" className="img-fluid banner-image" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* About Product Section */}
      <section className="about-product-section">
        <Container>
          <Row>
            <Col md={6}>
              <img
                src={svgimage1}
                alt="Product Image"
                className="product-image img-fluid"
              />
            </Col>
            <Col md={6}>
              <div className="product-details">
                <h2>OCR</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <ul>
                  <li>Feature 1</li>
                  <li>Feature 2</li>
                  <li>Feature 3</li>
                  {/* Add more features as needed */}
                </ul>
                <button className="btn btn-primary">Learn More</button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <div className="product-details">
                <h2>Entity Extraction</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <ul>
                  <li>Feature 1</li>
                  <li>Feature 2</li>
                  <li>Feature 3</li>
                  {/* Add more features as needed */}
                </ul>
                <button className="btn btn-primary">Learn More</button>
              </div>
            </Col>
            <Col md={6}>
              <img
                src={svgimage2}
                alt="Product Image"
                className="product-image img-fluid"
              />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <img
                src={svgimage3}
                alt="Product Image"
                className="product-image img-fluid"
              />
            </Col>
            <Col md={6}>
              <div className="product-details">
                <h2>Table Extraction</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <ul>
                  <li>Feature 1</li>
                  <li>Feature 2</li>
                  <li>Feature 3</li>
                  {/* Add more features as needed */}
                </ul>
                <button className="btn btn-primary">Learn More</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="steps-section">
        <Container>
          <Row className="justify-content-center">
            <h2 className="section-heading text-center mb-5">Steps</h2>
            <Col md={4}>
              <div className="step-card">
                <div className="step-icon">1</div>
                <h3 className="step-heading">Upload Image</h3>
                <p className="step-description">Easily upload single or bulk images of invoices to our platform.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="step-card">
                <div className="step-icon">2</div>
                <h3 className="step-heading">Extract</h3>
                <p className="step-description">Our advanced extraction technology automatically processes the images to extract relevant data.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="step-card">
                <div className="step-icon">3</div>
                <h3 className="step-heading">Download Excel</h3>
                <p className="step-description">Download the extracted data in Excel format for further analysis and processing.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="features-section">
        <Container>
          <h2 className="section-heading text-center mb-5">Product Features</h2>
          <Row className="justify-content-center">
            <Col md={4} className="mb-4">
              <div className="feature-card">
                <FaLayerGroup style={{ color: '#FFA500' }} className="feature-icon" />
                <h3 className="feature-heading">2 Layer OCR Extraction</h3>
                <p className="feature-description">Utilizes two layers of OCR technology for enhanced text extraction accuracy.</p>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div className="feature-card">
                <FaListAlt style={{ color: '#FF5733' }} className="feature-icon" />
                <h3 className="feature-heading">Entity Based Extraction</h3>
                <p className="feature-description">Automatically extracts key entities such as dates, amounts, and vendor details.</p>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div className="feature-card">
                <FaTable style={{ color: '#FFC300' }} className="feature-icon" />
                <h3 className="feature-heading">Table Based Extraction</h3>
                <p className="feature-description">Efficiently extracts tabular data from invoices while preserving structure and formatting.</p>
              </div>
            </Col>
            {/* Add more feature cards for other features */}
          </Row>
        </Container>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section">
        <Container>
          <h2 className="section-heading text-center mb-5">Pricing</h2>
          <Row className="justify-content-center">
            {/* Pay as you go */}
            <Col md={4}>
              <div className="pricing-card">
                <h3 className="pricing-plan">Pay as you go</h3>
                <p className="pricing-description">Each 5 credits cost Rs. 10</p>
                <p className="pricing-validity">Valid for 3 months</p>
                <Button variant="primary" className="pricing-button">Get Started</Button>
              </div>
            </Col>

            {/* Buy 2000 credits */}
            <Col md={4}>
              <div className="pricing-card">
                <h3 className="pricing-plan">Buy 2000 credits</h3>
                <p className="pricing-price">Rs. 4000</p>
                <p className="pricing-details">400 invoices can be extracted</p>
                <p className="pricing-validity">Valid for 3 months</p>
                <Button variant="primary" className="pricing-button">Buy Now</Button>
              </div>
            </Col>

            {/* Buy 3000 credits */}
            <Col md={4}>
              <div className="pricing-card">
                <h3 className="pricing-plan">Buy 3000 credits</h3>
                <p className="pricing-price">Rs. 6000</p>
                <p className="pricing-details">600 invoices can be extracted</p>
                <p className="pricing-validity">Valid for 3 months</p>
                <Button variant="primary" className="pricing-button">Buy Now</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Blogs Section */}
      <section className="blogs-section">
        <Customer />
      </section>
      <Footer />
    </div>
  );
};
Home.propTypes = {
  children: PropTypes.object,
};

export default withRouter(Home);

