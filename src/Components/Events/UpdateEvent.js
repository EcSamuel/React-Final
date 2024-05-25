import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';

function UpdateEvent({ event }) {
  const eventURL = `https://664a82eaa300e8795d4227ab.mockapi.io/Event/${event.id}`;
  const [gameId, setGameId] = useState(event.gameId);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [eventName, setEventName] = useState('')

  const updateGameId = async (e) => {
    e.preventDefault();
    try {
      await axios.put(eventURL, { gameId });
      console.log('Game ID updated successfully');
    } catch (error) {
      console.error('Error updating the game ID:', error);
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

  return (
    <>
      <div>
        <h3>Change of Plans? Update Here</h3>
      </div>
      <div>
        <form onSubmit={updateGameId}>
          <input
            type="number"
            value={gameId}
            onChange={(e) => setGameId(e.target.value)}
          />
          <Button variant="secondary" type="submit">Change Your Game</Button>
        </form>
        <form onSubmit={updateEventDetails}>
          <input
          type="text"
          placeholder='New Event Name'
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <Button variant="secondary" type="submit">Change Your Event Details</Button>
        </form>
      </div>
    </>
  );
}

export default UpdateEvent;