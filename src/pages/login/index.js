import React, { useState } from 'react';
import { Container, Form, Image, Button } from 'react-bootstrap';
import { FiUser, FiEye, FiEyeOff, FiLock } from 'react-icons/fi';
import logo from '../../assets/images/WVI-Logo.png';
import backgroundImage from '../../assets/images/login-bg-2.jpg';

const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
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
    <Container className="d-flex justify-content-center align-items-center mt-4">
      <div className="login-container p-4 rounded-lg shadow-lg">
        <div className="glass-effect">
          <div className="text-center">
            <Image className="LogoImage1" src={logo} alt="Logo" />
          </div>
          <h2 className="text-center-1">Login</h2>
          <Form onSubmit={handleLogin}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <div className="input-group">
                <span className="input-group-text bg-transparent border-end-0"><FiUser /></span>
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
            <div className="text-center">
              <a href="#" className="text-muted me-2">Forgot Password?</a>
              <span className="text-muted">|</span>
              <a href="#" className="text-muted ms-2">Create New Account</a>
            </div>
            <Button
              variant="primary"
              type="submit"
              block
              disabled={isSubmitted}
              className="login-button"
              style={{ margin: '20px', marginLeft: '100px' }}
            >
              {isSubmitted ? 'Logging in...' : 'Login'}
            </Button>
          </Form>
        </div>
      </div>
    </Container>
  );
};

export default LoginComponent;
