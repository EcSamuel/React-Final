import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import GameDropdown from '../GameDropdown';
import { grabEvents } from './API';

function UpdateEvent({ event }) {
  const eventURL = `https://664a82eaa300e8795d4227ab.mockapi.io/Event/${event.id}`;
  const [gamePlayed, setGamePlayed] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [eventName, setEventName] = useState('');
  const [selectedGame, setSelectedGame] = useState('');
  const [location, setLocation] = useState('');

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

    // Create an empty object to hold the updated details
    const updatedDetails = {};

    // Only add the fields that have new values
    if (date) updatedDetails.date = date;
    if (time) updatedDetails.time = time;
    if (eventName) updatedDetails.eventName = eventName;
    if (location) updatedDetails.location = location;

    try {
      await axios.put(eventURL, updatedDetails);
      console.log('Event details updated successfully');
      grabEvents();
    } catch (error) {
      console.error('Error updating event details:', error);
    }
  };

  const handleSelectGame = (game) => {
    setSelectedGame(game); // Store the selected game object
  };

  return (
    <>
      <Form onSubmit={updateEventDetails}>
        <Form.Control
          type="text"
          placeholder='New Event Name'
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
        />
        <Form.Control
          type="text"
          placeholder='New Event Location'
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <label>Change Event Date</label>
        <Form.Control
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <label>Change Event Time</label>
        <Form.Control
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
      </Form>
    </>
  );
}

export default UpdateEvent;