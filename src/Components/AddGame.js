import React, { useEffect, useState } from 'react';
import { Button, Form, FormControl, Container } from 'react-bootstrap';
import axios from 'axios';

function AddGame() {
  const gameURL = `https://664a82eaa300e8795d4227ab.mockapi.io/Game`;
  const [title, setTitle] = useState('');
  const [maxPlayers, setMaxPlayers] = useState('');
  const [gameInfo, setGameInfo] = useState('');

  useEffect(() => {
    const grabGames = async () => {
      axios
        .get(gameURL)
        .then(res => {
          console.log(res.data);
        })
        .catch(error => {
          console.error('Error Adding connection at useEffect', error);
        });
    };
    grabGames();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(`yes, you pushed the button`);
    const newGame = {
      title: title,
      maxPlayers: maxPlayers,
      gameInfo: gameInfo,
    };
    try {
      const response = await axios.post(gameURL, newGame);
      console.log(`You have successfully added ${newGame.title}`);
      console.log(response.data);
      setTitle('');
      setMaxPlayers('');
      setGameInfo('');
    } catch (error) {
      console.error('Error Adding Connection', error);
    }
  };

  return (
    <Container className='readable-container justify-content-center'>
      <h3>Don't See The Game You Play? Add It Here</h3>
      <form onSubmit={handleSubmit} className='d-flex flex-wrap'>
        <div>
          <label>Game Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Maximum Players:</label>
          <input
            type="number"
            value={maxPlayers}
            onChange={(e) => setMaxPlayers(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Game Description</label>
          <input
            type="textarea"
            value={gameInfo}
            onChange={(e) => setGameInfo(e.target.value)}
            required
          />
        </div>
        <Button variant="success" type="submit">Add Your Game</Button>
      </form>
    </Container>
  );
}

export default AddGame;