import React, { useEffect, useState } from 'react';
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
    } catch (error) {
      console.error('Error Adding Connection', error);
    }
  };

  return (
    <div>
      <h2>Add New User</h2>
      <form onSubmit={handleSubmit}>
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
            type="text"
            value={gameInfo}
            onChange={(e) => setGameInfo(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Your Game</button>
      </form>
    </div>
  );
}

export default AddGame;