import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LayoutWrapper from './Components/LayoutWrapper';
import ShowHomePage from './Components/Pages/HomePage';
import GameList from './Components/Pages/Games';
import Events from './Components/Pages/Events';
import LoginForm from './Components/Login/LoginForm';
import NavBanner from './NavBanner';
import Footer from './Footer';

export function HomePage() {
  return (
    <LayoutWrapper>
      <Container className='centered-wrapper'>
        <Container className='centered-content'>
          <ShowHomePage />
        </Container>
      </Container>
    </LayoutWrapper>
  );
}

export function EventsPage() {
  return (
    <LayoutWrapper>
      <div className='text-center'>
        <h1 className='readable-container'>Events</h1>
        <Events />
      </div>
    </LayoutWrapper>
  );
}

export function GamesPage() {
  return (
    <LayoutWrapper>
      <div className='text-center'>
        <h1 className=''>Games</h1>
        <GameList />
      </div>
    </LayoutWrapper>
  );
}

function Login() {
  return (
    <LayoutWrapper>
      <Container className='text-center'>
        <h1>To access Rule Zer0's most powerful features, please log in below</h1>
        <LoginForm />
      </Container>
    </LayoutWrapper>
  );
}

function App() {
  return (
    <div className='main-content' style={{ paddingBottom: '7%' }}>
      <NavBanner />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/games" element={<GamesPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
