import React, { useEffect, useState } from 'react';
import { Button, Form, FormControl, Container } from 'react-bootstrap';
import axios from 'axios';
import {grabGames} from './Events/API.js'
// Here is where I did not replicate the instructor code. I have tried using methods of the read and get calls but they're running more cleanly in here. When either totally refactoring this project or for the next React.js build, I believe it will be better to begin with them external and then continually test the function instead.
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
// data goes in for games to be added to the array. It is a deliberate design choice at this point to not allow games themselves to be updated or deleted.
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
// Form to submit for the games to be added via the above handleSubmit
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