import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button, Dropdown, Card, CardDeck } from 'react-bootstrap';
import 'bootstrap'
import NavBar from './NavBar';
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
import EventCard from './Components/Events/EventCard';

function App() {
  const users = []; // Replace with your actual users data
  const games = []; // Replace with your actual games data

  return (
    <div>
      <div>
        <nav>
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
        </nav>

        <Routes>
          <Route path="/events" element={<EventsPage />} /> {/*issue on this line that might come up- I had to delete the props passed in to stop it from baby raging at me*/}
          <Route path="/games" element={<Games games={games} />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </div>
  );
}

function HomePage() {
  return <h2>Welcome, User! Please Select a Menu</h2>;
}

function EventsPage({ events }) {
  return (
    <div>
      <h2>Events</h2>
      <Events/>
    </div>
  );
}

function Games({ games }) {
  return (
    <div>
      <h2>Games</h2>
      <GameList/>
    </div>
  );
}

export default App;
