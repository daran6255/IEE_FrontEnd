import React, { useState } from 'react';
import { Container, Form, Image, Button, Row, Col } from 'react-bootstrap';
import { FiUser, FiEye, FiEyeOff, FiLock, FiMail, FiPhone, FiBriefcase } from 'react-icons/fi';
import logo from '../../assets/images/WVI-Logo.png';

const SignUpComponent = () => {
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSignUp = (e) => {
        e.preventDefault();
        // Add your signup logic here
        console.log('Name:', name);
        console.log('Company:', company);
        console.log('Email:', email);
        console.log('Phone:', phone);
        console.log('Password:', password);
        console.log('Confirm Password:', confirmPassword);
        setIsSubmitted(true);
        // Simulate signup process
        setTimeout(() => {
            setIsSubmitted(false);
        }, 2000);
    };

    return (
        <Container className="d-flex justify-content-center align-items-center mt-4">
            <div className="signup-container p-4 rounded-lg shadow-lg">
                <div className="glass-effect">
                    <div className="text-center">
                        <Image className="LogoImage1" src={logo} alt="Logo" />
                    </div>
                    <h2 className="text-center-1">SignUp</h2>
                    <Form onSubmit={handleSignUp}>
                        <Row>
                            <Col>
                                <Form.Group controlId="formBasicName">
                                    <Form.Label>Name</Form.Label>
                                    <div className="input-group">
                                        <span className="input-group-text bg-transparent border-end-0"><FiUser /></span>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter your name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className={isSubmitted && !name ? 'is-invalid' : ''}
                                        />
                                    </div>
                                    {isSubmitted && !name && <div className="invalid-feedback">Name is required</div>}
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="formBasicCompany">
                                    <Form.Label>Company</Form.Label>
                                    <div className="input-group">
                                        <span className="input-group-text bg-transparent border-end-0"><FiBriefcase /></span>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter your company name"
                                            value={company}
                                            onChange={(e) => setCompany(e.target.value)}
                                            className={isSubmitted && !company ? 'is-invalid' : ''}
                                        />
                                    </div>
                                    {isSubmitted && !company && <div className="invalid-feedback">Company name is required</div>}
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <div className="input-group">
                                        <span className="input-group-text bg-transparent border-end-0"><FiMail /></span>
                                        <Form.Control
                                            type="email"
                                            placeholder="Enter email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className={isSubmitted && !email ? 'is-invalid' : ''}
                                        />
                                    </div>
                                    {isSubmitted && !email && <div className="invalid-feedback">Email is required</div>}
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="formBasicPhone">
                                    <Form.Label>Phone</Form.Label>
                                    <div className="input-group">
                                        <span className="input-group-text bg-transparent border-end-0"><FiPhone /></span>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter your phone number"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            className={isSubmitted && !phone ? 'is-invalid' : ''}
                                        />
                                    </div>
                                    {isSubmitted && !phone && <div className="invalid-feedback">Phone number is required</div>}
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <div className="input-group">
                                        <span className="input-group-text bg-transparent border-end-0"><FiLock /></span>
                                        <Form.Control
                                            type={showPassword ? 'text' : 'password'}
                                            placeholder="Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className={isSubmitted && !password ? 'is-invalid' : ''}
                                        />
                                        <span className="input-group-text bg-transparent border-start-0" onClick={() => setShowPassword(!showPassword)}>
                                            {showPassword ? <FiEyeOff /> : <FiEye />}
                                        </span>
                                    </div>
                                    {isSubmitted && !password && <div className="invalid-feedback">Password is required</div>}
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="formBasicConfirmPassword">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <div className="input-group">
                                        <span className="input-group-text bg-transparent border-end-0"><FiLock /></span>
                                        <Form.Control
                                            type={showPassword ? 'text' : 'password'}
                                            placeholder="Confirm Password"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            className={isSubmitted && !confirmPassword ? 'is-invalid' : ''}
                                        />
                                        <span className="input-group-text bg-transparent border-start-0" onClick={() => setShowPassword(!showPassword)}>
                                            {showPassword ? <FiEyeOff /> : <FiEye />}
                                        </span>
                                    </div>
                                    {isSubmitted && !confirmPassword && <div className="invalid-feedback">Please confirm your password</div>}
                                </Form.Group>
                            </Col>
                        </Row>
                        <Button
                            variant="primary"
                            type="submit"
                            disabled={isSubmitted}
                            className="signup-button"
                            style={{ margin: '20px', marginLeft: '250px' }}
                        >
                            {isSubmitted ? 'Signing Up...' : 'Register'}
                        </Button>
                    </Form>
                </div>
            </div>
        </Container >
    );
};

export default SignUpComponent;

