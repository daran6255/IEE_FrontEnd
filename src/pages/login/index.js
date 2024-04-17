import React, { useState } from 'react';
import { Container, Form, Image, Button } from 'react-bootstrap';
import { FiUser, FiEye, FiEyeOff, FiLock } from 'react-icons/fi';
import { useDispatch } from 'react-redux';

import withRouter from '../../components/common/withRouter';
import { loginUser } from '../../stores/thunk';


import logo from '../../assets/images/WVI-Logo.png';

const LoginComponent = (props) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }, props.router.navigate));
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

export default withRouter(LoginComponent);
