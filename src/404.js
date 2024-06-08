import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './notfound.css';

const NotFound = () => {
  return (
    <div className="not-found-bg no-scroll">
      <Container className="not-found-container">
        <Row>
          <Col>
            <h1>404</h1>
            <h2>Your adventure wasn't supposed to go this way</h2>
            <p>The page you're looking for seems to have rolled off the table.</p>
            <Link to="/">
              <Button variant="success">Return to the Tavern (Home)</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NotFound;