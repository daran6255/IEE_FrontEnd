import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios'; // Library for making HTTP requests

const BuyCreditsPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [credits, setCredits] = useState('');
    const [amount, setAmount] = useState(0);
    const [paymentSuccess, setPaymentSuccess] = useState(false);

    const calculateAmount = (credits) => {
        // Each 5 credits cost 10rs
        const pricePerCredit = 10;
        const calculatedAmount = Math.ceil(credits / 5) * pricePerCredit;
        setAmount(calculatedAmount);
    };

    const handlePayment = async () => {
        try {
            // Send payment details to server
            const response = await axios.post('/api/paytm/payment', {
                name,
                email,
                credits,
                amount
            });

            // Payment successful
            setPaymentSuccess(true);
        } catch (error) {
            // Handle payment error
            console.error('Payment failed:', error);
        }
    };

    return (
        <Container className="mt-4">
            <h2 className="text-center mb-4">Buy Credits</h2>
            <div className="d-flex justify-content-center">
                <div style={{ width: '100%', minWidth: '50%' }}>
                    <Form>
                        {/* Form fields for name, email, credits, and amount */}
                        <Form.Group controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicCredits">
                            <Form.Label>Credits</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter number of credits"
                                value={credits}
                                onChange={(e) => {
                                    setCredits(e.target.value);
                                    calculateAmount(parseInt(e.target.value));
                                }}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicAmount">
                            <Form.Label>Amount</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Amount"
                                value={`Rs. ${amount}`}
                                readOnly
                            />
                        </Form.Group>
                        <Button variant="primary" type="button" className="w-100" style={{ marginTop: '10px' }} onClick={handlePayment}>
                            Pay Now
                        </Button>
                    </Form>

                    {paymentSuccess && (
                        <Alert variant="success" className="mt-3">
                            Payment successful! Thank you for purchasing credits.
                        </Alert>
                    )}
                </div>
            </div>
        </Container >
    );
};


export default BuyCreditsPage;
