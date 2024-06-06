import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './App.css';

function NavBanner() {
  return (
    <Navbar expand="lg" fixed="top" className='container-fluid'>
      <Container className="justify-content-between ">
        <Navbar.Brand as={Link} to="/" style={{ color: 'white' }} id='logo-title' href="/">
          <img
            src={`${process.env.PUBLIC_URL}/logo.png`}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Rule Zer0 Logo"
          />
          Rule Zer0 Game Finder
        </Navbar.Brand>
        <Nav style={{ color: 'white' }} href="/">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/events">Events</Nav.Link>
          <Nav.Link as={Link} to="/games">Games</Nav.Link>
          <Nav.Link as={Link} to="/login">Login</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBanner;