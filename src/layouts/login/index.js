import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const LoginComponent = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        // Add your login logic here
        console.log('Email:', email);
        console.log('Password:', password);
        setIsSubmitted(true);
        // Simulate login process
        setTimeout(() => {
            setIsSubmitted(false);
        }, 2000);
    };

    return (
        <Container>
            <div className="login-container">
                <h2 className="text-center mb-4">Login</h2>
                <Form onSubmit={handleLogin}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={isSubmitted && !email ? 'is-invalid' : ''}
                        />
                        {isSubmitted && !email && <div className="invalid-feedback">Email is required</div>}
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={isSubmitted && !password ? 'is-invalid' : ''}
                        />
                        {isSubmitted && !password && <div className="invalid-feedback">Password is required</div>}
                    </Form.Group>

                    <Button variant="primary" type="submit" block disabled={isSubmitted}>
                        {isSubmitted ? 'Logging in...' : 'Login'}
                    </Button>
                </Form>
            </div>
        </Container>
    );
};

export default LoginComponent;
