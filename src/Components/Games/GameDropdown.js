import React, { useState, useEffect } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import axios from 'axios';
import '../../App.css';

const GameDropdown = ({ onSelectGame }) => {
  const gameURL = `https://664a82eaa300e8795d4227ab.mockapi.io/Game`;
  const [show, setShow] = useState(false);
  const [games, setGames] = useState([]);
  const [selectedGameTitle, setSelectedGameTitle] = useState("Select a game");

  useEffect(() => {
    const grabGames = async () => {
      try {
        const res = await axios.get(gameURL);
        setGames(res.data);
      } catch (error) {
        console.error('Error fetching games:', error);
      }
    };
    grabGames();
  }, []);

  const handleSelect = (eventKey) => {
    const game = JSON.parse(eventKey);
    onSelectGame(game);
    setSelectedGameTitle(game.title);
    setShow(false);
  };

  const toggleDropdown = () => {
    setShow(!show);
  };

  return (
    <DropdownButton
      className='button-text'
      id="dropdown-basic-button"
      title={selectedGameTitle}
      show={show}
      onToggle={toggleDropdown}
      onSelect={handleSelect}
      menuRenderer={(props) => (
        <div className="dropdown-menu-container">
          <ul {...props} className="dropdown-menu custom-dropdown-menu" aria-label="dropdown-menu">
            {props.children}
          </ul>
        </div>
      )}
    >
      {games.map((game) => (
        <Dropdown.Item key={game.id} eventKey={JSON.stringify(game)}>
          {game.title}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
};

export default GameDropdown;