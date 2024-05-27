import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import GameDropdown from '../GameDropdown';

function UpdateEvent({ event }) {
  const eventURL = `https://664a82eaa300e8795d4227ab.mockapi.io/Event/${event.id}`;
  // const [gameId, setGameId] = useState(event.gameId);
  const [gamePlayed, setGamePlayed] =useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [eventName, setEventName] = useState('')
  const [selectedGame, setSelectedGame] = useState('');

  const updateGamePlayed = async (e) => {
    e.preventDefault();
    try {
      await axios.put(eventURL, { gamePlayed: selectedGame.title });
      console.log(`Game updated successfully to ${selectedGame.title}`);
    } catch (error) {
      console.error(`Error updating the game played to ${selectedGame.title}`, error);
    }
  };

  const updateEventDetails = async (e) => {
    e.preventDefault();
    const updatedTime = `${date}T${time}`;
    try {
      await axios.put(eventURL, { time: updatedTime });
      console.log('Time and date updated successfully');
    } catch (error) {
      console.error('Error updating time and date:', error);
    }
  };

  const handleSelectGame = (game) => {
    setSelectedGame(game); // Store the selected game object
  };

  return (
    <>
      <div>
        <h3>Change of Plans? Update Here</h3>
      </div>
      <div>
      <Form onSubmit={updateEventDetails}>
          <input
          type="text"
          placeholder='New Event Name'
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          />
          <label>Change Event Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <label>Change Event Time</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <Button variant="secondary" type="submit">Change Your Event Details</Button>
        </Form>
        <Form onSubmit={updateGamePlayed}>
          <GameDropdown onSelectGame={handleSelectGame} />
          <Button variant="secondary" type="submit">
            Change Event's Game
          </Button>
        {/* <form onSubmit={updateGamePlayed}>
          <input
            type="text"
            value={gamePlayed}
            onChange={(e) => setGamePlayed(e.target.value)}
          />
          <Button variant="secondary" type="submit">Change Your Game</Button>
        </form> */}
        </Form>
      </div>
    </>
  );
}

export default UpdateEvent;