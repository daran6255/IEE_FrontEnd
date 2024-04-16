import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import { FaQuoteLeft, FaStar, FaRegStar } from 'react-icons/fa';
import './customerreview.css';

const CustomerReviewCard = ({ text, author, rating }) => {
    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < rating) {
                stars.push(<FaStar key={i} className="star-icon" />);
            } else {
                stars.push(<FaRegStar key={i} className="star-icon" />);
            }
        }
        return stars;
    };

    return (
        <div className="customer-review-card">
            <div className="customer-review-content">
                <FaQuoteLeft className="quote-icon" />
                <p className="customer-review-text">{text}</p>
                <div className="star-rating">{renderStars()}</div>
                <p className="customer-review-author">- {author}</p>
            </div>
        </div>
    );
};

const BlogsSection = () => {
    return (
        <section className="blogs-section">
            <Container>
                <h2 className="section-heading text-center mb-5">Customer Reviews</h2>
                <Row className="justify-content-center">
                    <Col>
                        <Carousel controls={false} indicators={false}>
                            <Carousel.Item>
                                <CustomerReviewCard text="The invoice extraction service provided by WinVinaya InfoSystems has greatly improved our workflow efficiency. Highly recommended!" author="John Doe" rating={5} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <CustomerReviewCard text="We've been using the invoice extraction tool for months now, and it's been a game-changer for our business. Thank you, WinVinaya InfoSystems!" author="Jane Smith" rating={4} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <CustomerReviewCard text="The level of accuracy and speed in extracting invoice data is impressive. WinVinaya InfoSystems has exceeded our expectations!" author="David Johnson" rating={5} />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default BlogsSection;
