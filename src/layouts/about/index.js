import { Container, Row, Col } from 'react-bootstrap';
import svgimage1 from '../../assets/images/data-extraction.jpg';
import svgimage2 from '../../assets/images/12977758_5107041.jpg';
import svgimage3 from '../../assets/images/13338131_5214651.jpg';
const ProductOverview = () => {
    return (
        <div className="product-overview">
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
        </div>
    );
};

export default ProductOverview;
