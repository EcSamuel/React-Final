import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CreateEvent() {
  const eventURL = `https://664a82eaa300e8795d4227ab.mockapi.io/Event`;
  const [events, setEvents] = useState('');
  const [eventName, setEventName] = useState('');
  const [gameId, setGameId] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [] = useState('');


  useEffect(() => {
    const grabEvents = async () => {
      try {
        const res = await axios.get(eventURL);
        console.log(res.data);
        setEvents(res.data); // Update the state with the fetched data
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
    console.log(`yes, you pushed the button`);
    const newEvent = {
      eventName: eventName,
      date: date,
      time: time,
      gameId: gameId,
      location: location,
      isFilled: false

    };
    try {
      const response = await axios.post(eventURL, newEvent);
      console.log(`You have successfully added ${newEvent.eventName}`);
      console.log(response.data);
      setEventName('');
      setDate('');
      setGameId('');
      setLocation('');
      setGameId('');
    } catch (error) {
      console.error('Error Adding Connection', error);
    }
  };

  return (
    <div>
      <h2>Add New Event</h2>
      <form onSubmit={handleSubmit}>
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
          <label>Game ID `(this will eventually require some more smart coding probably with a switch or params)`</label>
          <input
            type="number"
            value={gameId}
            onChange={(e) => setGameId(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Your Event</button>
      </form>
    </div>
  );
}

export default CreateEvent