import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import GameDropdown from '../GameDropdown'; // Ensure the correct import path

function CreateEvent() {
  const eventURL = `https://664a82eaa300e8795d4227ab.mockapi.io/Event`;
  const [events, setEvents] = useState([]);
  const [eventName, setEventName] = useState('');
  const [selectedGame, setSelectedGame] = useState(null); // Store the selected game object
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const grabEvents = async () => {
      try {
        const res = await axios.get(eventURL);
        setEvents(res.data);
      } catch (error) {
        console.error('Error calling events at useEffect', error);
        setError('Failed to fetch events.');
      } finally {
        setLoading(false);
      }
    };
    grabEvents();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newEvent = {
      eventName: eventName,
      date: date,
      time: time,
      gamePlayed: selectedGame.title, // Use the selected game's id
      location: location,
      isFilled: false,
    };

    try {
      const response = await axios.post(eventURL, newEvent);
      console.log(`You have successfully added ${newEvent.eventName}`);
      console.log(response.data);
      setEventName('');
      setDate('');
      setSelectedGame(null); // Reset the selected game
      setLocation('');
    } catch (error) {
      console.error('Error Adding Connection', error);
    }
  };

  const handleSelectGame = (game) => {
    setSelectedGame(game); // Store the selected game object
  };

  return (
    <div className="container">
      <h2>Add New Event</h2>
      <Form onSubmit={handleSubmit}>
        <div>
          <label>Event Name:</label>
          <input
            type="text"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Time of Day</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Game Played</label>
          <GameDropdown onSelectGame={handleSelectGame} />
          {selectedGame && (
            <div style={{ marginTop: '20px' }}>
              <h4>Selected Game</h4>
              <p><strong>Title:</strong> {selectedGame.title}</p>
            </div>
          )}
        </div>
        <Button type="submit">Add Your Event</Button>
      </Form>
    </div>
  );
}

export default CreateEvent;