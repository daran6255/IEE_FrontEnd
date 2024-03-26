import { Container, Row, Col, Button } from 'react-bootstrap';
import banner from '../../assets/images/ai.png';

const StaticBanner = () => {
    return (
        <div className="static-banner-container">
            <Container>
                <Row>
                    <Col md={6}>
                        <div className="banner-text">
                            <h1>Discover the World of Your Dreams</h1>
                            <p>Explore our amazing collection of destinations and start your journey today.</p>
                            <Button variant="primary">Explore Now</Button>
                        </div>
                    </Col>
                    <Col md={6}>
                        <img
                            src={banner}
                            alt="Banner Image"
                            className="img-fluid"
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default StaticBanner;

