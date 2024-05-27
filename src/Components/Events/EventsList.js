import React, { useEffect, useState } from 'react';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import UpdateEvent from './UpdateEvent';
import axios from 'axios';
import DeleteEvent from './DeleteEvent';
import AddPlayer from './AddPlayer';
import EventFillCheck from './EventFillCheck';
import HideFullEvents from './HideFullEvents';

function EventsList() {
  const eventURL = `https://664a82eaa300e8795d4227ab.mockapi.io/Event`;
  const gameURL = `https://664a82eaa300e8795d4227ab.mockapi.io/Game`;
  const [events, setEvents] = useState([]);
  const [games, setGames] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [eventsResponse, gamesResponse] = await Promise.all([
          axios.get(eventURL),
          axios.get(gameURL),
        ]);
        setEvents(eventsResponse.data);
        setGames(gamesResponse.data);
        setFilteredEvents(eventsResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to fetch data.');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading events...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const getMaxPlayers = (event) => {
    const gamePlayed = event.gamePlayed;
    const correspondingGame = games.find((game) => game.title === gamePlayed);
    return correspondingGame ? correspondingGame.maxPlayers : 'Unknown';
  };

  return (
    <>
      <HideFullEvents events={events} setFilteredEvents={setFilteredEvents} />
      <Container className="d-flex">
        <Row className="justify-content-center">
          {filteredEvents.map((event) => (
            <Col key={event.id} sm={12} md={6} lg={4} className="mb-3">
              <Card border="primary" style={{ width: '20vw' }}>
                <Card.Body>
                  <Card.Title>{event.eventName}</Card.Title>
                  <Card.Text>Location: {event.location}</Card.Text>
                  <Card.Text>Date: {event.date}</Card.Text>
                  <Card.Text>Begins At: {event.time}</Card.Text>
                  <Card.Text>Game: {event.gamePlayed}</Card.Text>
                  <Card.Text>Current Players: {event.currentPlayers}</Card.Text>
                  <EventFillCheck event={event} />
                  <Card.Text>Event Full? {event.isFilled ? 'Yes' : 'No'}</Card.Text>
                  <AddPlayer
                    eventId={event.id}
                    currentPlayers={event.currentPlayers}
                    setEvents={setEvents}
                    events={events}
                    maxPlayers={getMaxPlayers(event)}
                  />
                  <UpdateEvent event={event} />
                  <DeleteEvent id={event.id} />
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default EventsList;