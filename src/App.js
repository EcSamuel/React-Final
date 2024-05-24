import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button, Dropdown, Card, CardDeck } from 'react-bootstrap';
import 'bootstrap'
import NavBar from './NavBar';
import './App.css';
import GameList from './Components/Pages/Games';
import GameDropdown from './Components/GameDropdown';

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
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/games">Games</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/users" element={<Users users={users} />} />
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

function Users({ users }) {
  return (
    <div>
      <h2>Users</h2>
      {/* Render users data here */}
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
