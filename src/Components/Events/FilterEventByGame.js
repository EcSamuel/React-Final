import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Dropdown, DropdownButton } from 'react-bootstrap';

const FilterEventByGame = ({ onFilterEvents }) => {
  const eventURL = `https://664a82eaa300e8795d4227ab.mockapi.io/Event`;
  const [games, setGames] = useState([]);
  const [selectedGame, setSelectedGame] = useState('');

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(eventURL);
        const events = response.data;
        const uniqueGames = Array.from(new Set(events.map((event) => event.gamePlayed)));
        setGames(uniqueGames);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  const handleSelectGame = (eventKey) => {
    setSelectedGame(eventKey);
    filterEventsByGame(eventKey);
  };

  const filterEventsByGame = (selectedGame) => {
    const filteredEvents = selectedGame === ''
      ? games
      : games.filter((game) => game === selectedGame);

    onFilterEvents(filteredEvents);
  };

  return (
    <DropdownButton
      className='tavern-btn-filter'
      id="dropdown-basic-button"
      title={selectedGame || "Select a game"}
      onSelect={handleSelectGame}
    >
      <Dropdown.Item eventKey="">All Games</Dropdown.Item>
      {games.map((game, index) => (
        <Dropdown.Item key={index} eventKey={game}>
          {game}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
};

export default FilterEventByGame;