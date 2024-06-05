import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button, Dropdown, Card, CardDeck, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LayoutWrapper from './Components/LayoutWrapper';
import ShowHomePage from './Components/Pages/HomePage';
import GameList from './Components/Pages/Games';
import Events from './Components/Pages/Events';
import Footer from './Footer';
import LoginForm from './Components/Login/LoginForm';

function App() {
  const events = [];
  const games = [];
  const users =[];
// Begin run of the Router Function and NavBar
  return (
    <>
    <Container className=''>
      <div>
        <Navbar expand="lg" fixed="top">
          <Container className="justify-content-center">
            <Navbar.Brand style={{color: 'white'}} id='logo-title' href="#home">Rule Zer0 Game Finder</Navbar.Brand>
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
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </ul>
          </Container>
        </Navbar>
        {/* Routes themselves */}
        <div className='main-content' style={{paddingBottom: '7%'}}>
          <Routes>
            <Route path="/events" element={<EventsPage events={events} />} /> {/*issue on this line that might come up- I had to delete the props passed in to stop it from baby raging at me*/}
            <Route path="/games" element={<Games games={games} />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginForm user={users}/>}/>
          </Routes>
        </div>
      </div>
    </Container>
    <Footer className="justify-content-center" expand="lg" fixed="bottom"/>
    </>
  );
}
// Page functions are called, wrapped in styling
function HomePage() {
  return (
    <LayoutWrapper>
      <Container className='centered-wrapper'>
        <Container className='centered-content'>
          <ShowHomePage/>
        </Container>
      </Container>
    </LayoutWrapper>
  );
}
// EventsPage. Some style was previously not applying correctly at this level
function EventsPage({ events }) {
  return (
    <LayoutWrapper>
      <div className='text-center'>
        <h1 className='readable-container'>Events</h1>
        <Events/>
      </div>
    </LayoutWrapper>
  );
}
// GamesPage. Removed className to verify how styling was or wasn't working.
function Games({ games }) {
  return (
    <LayoutWrapper>
      <div className='text-center'>
        <h1 className=''>Games</h1>
        <GameList />
      </div>
    </LayoutWrapper>
  );
}

function Login({user}) {
  return(
    <LayoutWrapper>
      <Container className='text-center'>
        <h1>To access Rule Zer0's most powerful features, please log in below</h1>
        <LoginForm/>
      </Container>
    </LayoutWrapper>
  )
}

export default App;