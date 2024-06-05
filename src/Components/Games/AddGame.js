import React, { useEffect, useState } from 'react';
import { Button, Form, FormControl, Container } from 'react-bootstrap';
import axios from 'axios';
// Here is where I did not replicate the instructor code. I have tried using methods of the read and get calls but they're running more cleanly in here. When either totally refactoring this project or for the next React.js build, I believe it will be better to begin with them external and then continually test the function instead.
function AddGame() {
  const gameURL = `https://664a82eaa300e8795d4227ab.mockapi.io/Game`;
  const [title, setTitle] = useState('');
  const [maxPlayers, setMaxPlayers] = useState('');
  const [gameInfo, setGameInfo] = useState('');
  const [genre, setGenre] = useState([]);
  const [type, setType] =useState('');

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
      type: type,
      // genre: genre.length > 0 ? genre : [], // If genre is empty, set it to an empty array
    };
    try {
      const response = await axios.post(gameURL, newGame);
      console.log(`You have successfully added ${newGame.title}`);
      console.log(response.data);
      setTitle('');
      setMaxPlayers('');
      setGameInfo('');
      // setGenre([]);
      setType('');
    } catch (error) {
      console.error('Error Adding Connection', error);
    }
  };

  const genres = ["Adventure", "Strategy", "Puzzle", "RPG", "Party", "Card", "Board"];
  const types = ["Board Game", "Classical Card Game", "Trading/Collectible Card Game", "Tabletop Game", "War Game", "Role Playing Game"];

// Form to submit for the games to be added via the above handleSubmit
return(
  <Container className='readable-container justify-content-center'>
      <h3>Don't See The Game You Play? Add It Here</h3>
      <Form onSubmit={handleSubmit} className='d-flex flex-wrap justify-content-center'>
        <Container className='d-flex justify-content-around'>
        <div className="form-group">
          <Form.Label className='readable-labels'>Game Title:</Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <Form.Label className='readable-labels'>Maximum Players:</Form.Label>
          <Form.Control
            type="number"
            value={maxPlayers}
            onChange={(e) => setMaxPlayers(e.target.value)}
            required
          />
        </div>
        {/* <div className="form-group">
        <Form.Label>Genre</Form.Label>
        <Select
          isMulti
          value={genre} // Pass the genre array directly
          onChange={(selectedOptions) => setGenre(selectedOptions.map((option) => option.value))}
          options={genres.map((g) => ({ value: g, label: g }))}
          className="basic-multi-select"
          classNamePrefix="select"
        />
        </div> */}
        <div className="form-group">
          <Form.Label className='readable-labels'>Game Type</Form.Label>
          <Form.Select
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
          >
            <option value="">Select Game Type</option>
            {types.map((t, index) => (
              <option key={index} value={t}>{t}</option>
            ))}
          </Form.Select>
        </div>
        <div className="form-group">
          <Form.Label className='readable-labels'>Game Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={gameInfo}
            onChange={(e) => setGameInfo(e.target.value)}
            required
          />
        </div>
        </Container>
        <Button className='tavern-btn-submit' size='btn-sm' type="submit">Add Your Game</Button>
      </Form>
    </Container>
  );
}

export default AddGame;