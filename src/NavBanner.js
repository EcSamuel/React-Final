import React, {useState, useEffect} from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './App.css';

function NavBanner() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginChange = () => {
    setIsLoggedIn(!isLoggedIn);
  }

  return (
    <Navbar expand="lg" fixed="top" className='container-fluid'>
      <Container className="justify-content-between container-fluid">
        <Navbar.Brand as={Link} to="/" id='logo-title' href="/" className='d-flex align-items-center'>
          <img
            src={`${process.env.PUBLIC_URL}/logo.png`}
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="Rule Zer0 Logo"
          />
          <div className="ms-3">
            Rule Zer0 Game Finder
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="mx-auto d-flex">
            <Nav className="me-auto">
              <Nav.Link as={Link} style={{ color: 'white' }} to="/">Home</Nav.Link>
              <Nav.Link as={Link} style={{ color: 'white' }} to="/events">Events</Nav.Link>
              <Nav.Link as={Link} style={{ color: 'white' }} to="/games">Games</Nav.Link>
            </Nav>
          </div>
          <Nav className="ms-auto">
            {isLoggedIn ? (
              <Nav.Link as={Link} style={{ color: 'white' }} to="/profile">Profile</Nav.Link>
            ) : (
              <>
                <Nav.Link as={Link} style={{ color: 'white' }} to="/login">Login</Nav.Link>
                <Nav.Link as={Link} style={{ color: 'white' }} to="/signup">Sign Up</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBanner;
