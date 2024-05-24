import React, { useEffect, useState } from 'react';
import axios from 'axios';

function EventsList() {
  const eventURL = `https://664a82eaa300e8795d4227ab.mockapi.io/Event`;
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (loading) {
    return <div>Loading events...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {events.map((event) => (
        <div key={event.id}>
          <h2>Name: {event.eventName}</h2>
          <div>Location: {event.location}</div>
          <div>Begins At: {event.time}</div>
          <div>Game Id: {event.gameId}</div>
          <div>Event Full? {event.isFilled ? "Yes" : "No"}</div>
        </div>
      ))}

      {/* Eventually going to make a loop or map to display all of these: I know the call will show up correctly but for the moment I need to get the API data to list first.
        <EventCard/> */}
    </div>
  );
}

export default EventsList;