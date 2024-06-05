import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Dropdown, DropdownButton, ButtonGroup, Button, Container } from 'react-bootstrap';

function FilterGameByMaxPlayers({ onFilteredGames }) {
  const gameURL = `https://664a82eaa300e8795d4227ab.mockapi.io/Game`;
  const [games, setGames] = useState([]);
  const [minPlayers, setMinPlayers] = useState('');
  const [maxPlayers, setMaxPlayers] = useState('');
  const [filteredGames, setFilteredGames] = useState([]);
  const [playerCounts, setPlayerCounts] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const res = await axios.get(gameURL);
        console.log('Fetched games:', res.data);
        setGames(res.data);
        setFilteredGames(res.data); // Set the initial filtered games

        // Get unique game types from the fetched data
        const uniqueMaxPlayers = new Set(res.data.map((game) => game.maxPlayers));
        const sortedPlayerCounts = ['All', ...Array.from(uniqueMaxPlayers).sort((a, b) => a - b)];
        setPlayerCounts(sortedPlayerCounts);
      } catch (error) {
        console.error('Error fetching games:', error);
      }
    };
    fetchGames();
  }, []);

  const handleMinPlayersChange = (value) => {
    setMinPlayers(value);
    filterGames(value, maxPlayers);
  };

  const handleMaxPlayersChange = (value) => {
    setMaxPlayers(value);
    filterGames(minPlayers, value);
  };

  const filterGames = (minPlayers, maxPlayers) => {
    let filtered = games;

    if (minPlayers !== '' && minPlayers !== 'All') {
      filtered = filtered.filter((game) => game.maxPlayers >= minPlayers);
    }

    if (maxPlayers !== '' && maxPlayers !== 'All') {
      filtered = filtered.filter((game) => game.maxPlayers <= maxPlayers);
    }

    setFilteredGames(filtered);
    onFilteredGames(filtered);
  };

  return (
    <Container className='d-flex justify-content-center'>
      <DropdownButton
        id='min-players-filter'
        title={minPlayers || 'Minimum Players'}
        onSelect={handleMinPlayersChange}
      >
        {playerCounts.map((count) => (
          <Dropdown.Item key={count} eventKey={count}>
            {count === 'All' ? 'All' : `${count}`}
          </Dropdown.Item>
        ))}
      </DropdownButton>
      <label></label>
      <DropdownButton
        id='max-players-filter'
        title={maxPlayers || 'Maximum Players'}
        onSelect={handleMaxPlayersChange}
      >
        {playerCounts.map((count) => (
          <Dropdown.Item key={count} eventKey={count}>
            {count === 'All' ? 'All' : `${count}`}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </Container>
  );
}

export default FilterGameByMaxPlayers;