import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button, Dropdown, Card, CardDeck, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import GameList from './Components/Pages/Games';
import GameDropdown from './Components/GameDropdown';
import AddGame from './Components/AddGame';
import Events from './Components/Pages/Events';
import CreateEvent from './Components/Events/CreateEvent';
import EventsList from './Components/Events/EventsList';
import FilterEventByGame from './Components/Events/FilterEventByGame';
import FilterEventByDate from './Components/Events/FilterEventByDate';
import ShowLocalEvents from './Components/Events/ShowLocalEvents';

function App() {
  const users = []; // Replace with your actual users data
  const games = []; // Replace with your actual games data

  return (
    <div>
      <div>
        <Navbar bg="dark" expand="lg" fixed="top">
          <Container className="justify-content-center">
            <Navbar.Brand style={{color: 'blue'}} href="#home">Rule Zer0 Game Finder</Navbar.Brand>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/events">Events</Link>
                </li>
                <li>
                  <Link to="/games">Games</Link>
                </li>
              </ul>
          </Container>
        </Navbar>
        <div className='main-content'>
          <Routes>
            <Route path="/events" element={<EventsPage />} /> {/*issue on this line that might come up- I had to delete the props passed in to stop it from baby raging at me*/}
            <Route path="/games" element={<Games games={games} />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

function HomePage() {
  return <h2>Welcome, User! Please Select a Menu</h2>;
}

function EventsPage({ events }) {
  return (
    <div className='d-flex justify-content-center'>
      <h2>Events</h2>
      <Events/>
    </div>
  );
}

function Games({ games }) {
  return (
    <div className='d-flex justify-content-center'>
      <h2>Games</h2>
      <GameList/>
    </div>
  );
}

export default App;
