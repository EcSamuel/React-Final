import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';

function EventFillCheck({ event }) {
  const gameURL = `https://664a82eaa300e8795d4227ab.mockapi.io/Game`;
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const gamesResponse = await axios.get(gameURL);
        setGames(gamesResponse.data);
      } catch (error) {
        console.error('Error fetching games:', error);
        setError('Failed to fetch games.');
      } finally {
        setLoading(false);
      }
    };
    fetchGames();
  }, []);

  const getRemainingSpots = () => {
    const gamePlayed = event.gamePlayed;
    const correspondingGame = games.find(g => g.title === gamePlayed);
    if (!correspondingGame) return 'Unknown';
    const remainingSpots = correspondingGame.maxPlayers - event.currentPlayers;
    return remainingSpots >= 0 ? remainingSpots : 0;
  };

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <Card.Text>This event has {getRemainingSpots()} spot(s) remaining.</Card.Text>
      )}
    </div>
  );
}

export default EventFillCheck;