import PropTypes from 'prop-types';


import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import NavBarComponent from '../../layouts/navbar';
import Banner from '../../assets/images/ai.png';
import svgimage1 from '../../assets/images/data-extraction.jpg';
import svgimage2 from '../../assets/images/12977758_5107041.jpg';
import svgimage3 from '../../assets/images/13338131_5214651.jpg';
import { FaLayerGroup, FaListAlt, FaTable, FaFileExcel, FaFileJson, FaUserCog, FaDownload, FaCreditCard, FaLock } from 'react-icons/fa';
import { GoIssueClosed } from "react-icons/go";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaUser, FaPaperPlane } from 'react-icons/fa';
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

      <section className="about-product-section">
        <Container>
          {/* First Row */}
          <Row className="align-items-center mb-4">
            <Col md={6}>
              <img src={svgimage1} alt="OCR Product Image" className="product-image img-fluid" />
            </Col>
            <Col md={6}>
              <div>
                <h2>OCR Technology</h2>
                <p>Optical Character Recognition (OCR) technology enables the conversion of different types of documents, such as scanned paper documents, PDF files, or images captured by a digital camera, into editable and searchable data.</p>
                <Button variant="primary">Learn More</Button>
              </div>
            </Col>
          </Row>

          {/* Second Row */}
          <Row className="align-items-center mb-4">
            <Col md={6}>
              <div>
                <h2>Entity Extraction</h2>
                <p>Entity extraction refers to the process of identifying and classifying key elements from text into predefined categories, such as names, organizations, locations, time expressions, quantities, monetary values, percentages, etc.</p>
                <Button variant="primary">Learn More</Button>
              </div>
            </Col>
            <Col md={6}>
              <img src={svgimage2} alt="Entity Extraction Product Image" className="product-image img-fluid" />
            </Col>
          </Row>

          {/* Third Row */}
          <Row className="align-items-center">
            <Col md={6}>
              <img src={svgimage3} alt="Table Extraction Product Image" className="product-image img-fluid" />
            </Col>
            <Col md={6}>
              <div>
                <h2>Table Extraction</h2>
                <p>Table extraction involves detecting and correctly extracting tabular data from images or documents, which can be transformed into a more usable format such as Excel or CSV.</p>
                <Button variant="primary">Learn More</Button>
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

      <section className="steps-section">
        <Container>
          <Row className="justify-content-center">
            <h2 className="section-heading text-center mb-5">Easy Steps</h2>
            <Col md={4} className="d-flex align-items-stretch"> {/* Flex to stretch the columns */}
              <div className="step-card">
                <div className="step-icon">1</div>
                <h3 className="step-heading">Upload Image</h3>
                <p className="step-description">Easily upload single or bulk images of invoices to our platform.</p>
              </div>
            </Col>
            <Col md={4} className="d-flex align-items-stretch">
              <div className="step-card">
                <div className="step-icon">2</div>
                <h3 className="step-heading">Extract</h3>
                <p className="step-description">Our advanced extraction technology automatically processes the images to extract relevant data.</p>
              </div>
            </Col>
            <Col md={4} className="d-flex align-items-stretch">
              <div className="step-card">
                <div className="step-icon">3</div>
                <h3 className="step-heading">Download Excel</h3>
                <p className="step-description">Download the extracted data in Excel format for further analysis and processing.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>



      <section className="pricing-section mt-5 mb-10">
        <Container>
          <h2 className="section-heading text-center mb-5">Pricing</h2>
          <div class="pricing">
            <div class="plan">
              <h2>Trial</h2>
              <div class="price">Free</div>
              <ul class="features">
                <li><GoIssueClosed color='green' /> 50 credits</li>
                <li><GoIssueClosed color='green' /> 1 User</li>
                <li><GoIssueClosed color='green' /> 10 Invoivce</li>
                <li><GoIssueClosed color='green' /> Continuous deployment</li>
                <li><AiOutlineCloseCircle color='red' /> No API support</li>
              </ul>
              <button>Try Now</button>
            </div>
            <div class="plan popular">
              <span>Most Popular</span>
              <h2>Standard</h2>
              <div class="price">$10/month</div>
              <ul class="features">
                <li><GoIssueClosed color='green' /> Unlimited Websites</li>
                <li><GoIssueClosed color='green' /> 5 Users</li>
                <li><GoIssueClosed color='green' /> 512MB Space/website</li>
                <li><GoIssueClosed color='green' /> Continuous deployment</li>
                <li><GoIssueClosed color='green' /> Email Support</li>
              </ul>
              <button>Sign In</button>
            </div>
            <div class="plan">
              <h2>Enterprise</h2>
              <div class="price">Custom plan</div>
              <ul class="features">
                <li><GoIssueClosed color='green' /> Unlimited Websites</li>
                <li><GoIssueClosed color='green' /> Unlimited Users</li>
                <li><GoIssueClosed color='green' /> Unlimited Space/website</li>
                <li><GoIssueClosed color='green' /> Continuous deployment</li>
                <li><GoIssueClosed color='green' /> 24/7 Email support</li>
              </ul>
              <button>Contact Us</button>
            </div>
          </div>
        </Container>
      </section>

      <section className="contact-us-section">
        <Container>
          <h2 className="section-heading text-center mb-5">Contact Us</h2>
          <Row className="align-items-center">
            <Col md={6} className="contact-info">
              <h3>WinVinaya InfoSystems</h3>
              <p><FaMapMarkerAlt />  Bangalore, Karnataka - 560076</p>
              <p><FaPhone /> +91 9980525374</p>
              <p><FaEnvelope /> support.iee@winvinaya.com</p>
              <div className="map-container">
                <iframe
                  title="company-location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.91878999112!2d-122.40641748469301!3d37.78583427975925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064c6d4891f%3A0xdedd7bdeb3e9c97b!2sOpenAI!5e0!3m2!1sen!2sus!4v1602343943557"
                  width="100%"
                  height="250"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"></iframe>
              </div>
            </Col>
            <Col md={6}>
              <p style={{ textAlign: 'center' }}><strong>Get In Touch With Us Today !</strong></p>
              <Form>
                <Form.Group controlId="formGroupName">
                  <Form.Label><FaUser /> Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>
                <Form.Group controlId="formGroupEmail">
                  <Form.Label><FaEnvelope /> Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formGroupMessage">
                  <Form.Label><FaPaperPlane /> Message</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Type your message here" />
                </Form.Group>
                <Button className='contact-submit' variant="primary" type="submit">
                  Send Message
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Blogs Section */}
      <section className="blogs-section mt-5">
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

