import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Form, Image, Button } from 'react-bootstrap';
import { FiUser, FiEye, FiEyeOff, FiLock, FiMail, FiPhone, FiBriefcase } from 'react-icons/fi';
import { toast } from 'react-toastify';

import logo from '../../assets/images/WVI-Logo.png';
import { registerUser } from '../../stores/thunk';
import withRouter from '../../components/common/withRouter';
import { Link } from 'react-router-dom';

const SignUpComponent = (props) => {
    const dispatch = useDispatch();

    const role = 'customer';
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

        if (password !== confirmPassword) {
            toast.error('Passwords do not match', { autoClose: 3000 });
            return;
        }

        dispatch(registerUser({ name, role, company, email, phone, password }, props.router.navigate));
    };

    return (
        <Container className="mt-4 mb-4 custom-container">
            <div className="p-3 rounded-lg shadow-lg">
                <div className="glass-effect">
                    <div className="text-center">
                        <Image className='image' src={logo} alt="Logo" style={{ maxWidth: '100px' }} />
                    </div>
                    <h2 className="text-center">SignUp</h2>
                    <Form onSubmit={handleSignUp}>
                        <Form.Group controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <div className="input-group">
                                <span className="input-group-text"><FiUser /></span>
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

                        <Form.Group controlId="formBasicCompany">
                            <Form.Label>Company</Form.Label>
                            <div className="input-group">
                                <span className="input-group-text"><FiBriefcase /></span>
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

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <div className="input-group">
                                <span className="input-group-text"><FiMail /></span>
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

                        <Form.Group controlId="formBasicPhone">
                            <Form.Label>Phone</Form.Label>
                            <div className="input-group">
                                <span className="input-group-text"><FiPhone /></span>
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

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <div className="input-group">
                                <span className="input-group-text"><FiLock /></span>
                                <Form.Control
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className={isSubmitted && !password ? 'is-invalid' : ''}
                                />
                                <span className="input-group-text" onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <FiEyeOff /> : <FiEye />}
                                </span>
                            </div>
                            {isSubmitted && !password && <div className="invalid-feedback">Password is required</div>}
                        </Form.Group>

                        <Form.Group controlId="formBasicConfirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <div className="input-group">
                                <span className="input-group-text"><FiLock /></span>
                                <Form.Control
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Confirm Password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className={isSubmitted && !confirmPassword ? 'is-invalid' : ''}
                                />
                                <span className="input-group-text" onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <FiEyeOff /> : <FiEye />}
                                </span>
                            </div>
                            {isSubmitted && !confirmPassword && <div className="invalid-feedback">Please confirm your password</div>}
                        </Form.Group>

                        <Button
                            variant="primary"
                            type="submit"
                            disabled={isSubmitted}
                            className="signup-button mt-3"
                            style={{ width: '100%' }}
                        >
                            {isSubmitted ? 'Signing Up...' : 'Register'}
                        </Button>
                    </Form>
                    <p className="mt-2 text-center">
                        Already have an account? <Link to="/login">Login</Link>
                    </p>
                </div>
            </div>
        </Container>
    );
};

export default withRouter(SignUpComponent);
