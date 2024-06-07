import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/login', { username, password });

      if (response.status === 200) {
        // Store the authentication token (e.g., JWT) in localStorage
        localStorage.setItem('authToken', response.data.token);
        // Redirect the user to the desired page or perform any other necessary actions
        console.log('Login successful');
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setError('An error occurred during login');
    }
  };

  return (
    <>
    <Container className="d-flex justify-content-center align-items-center login-container">
      <Row className="w-100 justify-content-center">
        <Col xs={12} md={6} lg={4}>
          <h2 className="text-center">To Access Rule Zer0's most powerful features, please log in below!</h2>
          {error && <p className="text-danger text-center">{error}</p>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formUsername">
              <Form.Label>Username:</Form.Label>
              <Form.Control
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
    <Container>
      <h3>Don't have an account yet? Create One <a href='/signup'>here</a></h3>
    </Container>
    </>
  );
};

export default LoginForm;
