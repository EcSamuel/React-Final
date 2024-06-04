import React, { useState, useEffect } from 'react';
import { Dropdown, DropdownButton, ButtonGroup, Button } from 'react-bootstrap';
import axios from 'axios';

const FilterGameByType = ({ onSelectGame }) => {
  const gameURL = `https://664a82eaa300e8795d4227ab.mockapi.io/Game`;
  const [games, setGames] = useState([]);
  const [selectedGameType, setSelectedGameType] = useState('All');
  const [filteredGames, setFilteredGames] = useState([]);
  const [gameTypes, setGameTypes] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const res = await axios.get(gameURL);
        console.log('Fetched games:', res.data);
        setGames(res.data);
        setFilteredGames(res.data); // Set the initial filtered games

        // Get unique game types from the fetched data
        const types = new Set(res.data.map(game => game.type));
        setGameTypes(['All', ...types]);
      } catch (error) {
        console.error('Error fetching games:', error);
      }
    };
    fetchGames();
  }, []);

  useEffect(() => {
    // Log the updated selectedGameType
    console.log('Selected Game Type:', selectedGameType);

    // Filter the games based on the selected game type
    if (selectedGameType === 'All') {
      setFilteredGames(games);
    } else {
      setFilteredGames(games.filter(game => game.type === selectedGameType));
    }
  }, [selectedGameType, games]);

  const handleTypeSelect = (type) => {
    setSelectedGameType(type);
  };

  return (
    <div>
      <ButtonGroup className="mb-3">
        {gameTypes.map(type => (
          <Button
            key={type}
            variant={type === selectedGameType ? 'primary' : 'secondary'}
            onClick={() => handleTypeSelect(type)}
          >
            {type}
          </Button>
        ))}
      </ButtonGroup>
      <div>
        {filteredGames.map(game => (
          <div key={game.id}>{game.name}</div>
        ))}
      </div>
    </div>
  );
};

export default FilterGameByType;