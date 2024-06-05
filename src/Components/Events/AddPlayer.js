import React from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';

const AddPlayer = ({ eventId, currentPlayers, setEvents, events, maxPlayers }) => {
  const handleAddPlayer = async () => {
    try {
      const updatedPlayers = currentPlayers + 1;
      const updatedEvent = {
        currentPlayers: updatedPlayers,
        isFilled: updatedPlayers >= maxPlayers,
      };

      await axios.put(`https://664a82eaa300e8795d4227ab.mockapi.io/Event/${eventId}`, updatedEvent);

      const updatedEvents = events.map((event) =>
        event.id === eventId
          ? {
              ...event,
              currentPlayers: updatedPlayers,
              isFilled: updatedPlayers >= maxPlayers,
            }
          : event
      );

      setEvents(updatedEvents);
    } catch (error) {
      console.error('Error updating current players:', error);
    }
  };

  return <Button className='tavern-btn' onClick={handleAddPlayer}>Add Player</Button>;
};

export default AddPlayer;