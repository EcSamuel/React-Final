import React, { useEffect, useState } from 'react';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import UpdateEvent from './UpdateEvent';
import axios from 'axios';
import DeleteEvent from './DeleteEvent';

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
    <>
      <>
        <Container className="d-flex">
          <Row className="justify-content-center"> {/* Center the row horizontally */}
            {events.map((event) => (
              <Col key={event.id} sm={12} md={6} lg={4} className="mb-3"> {/* Add margin for spacing */}
                <Card border="primary" style={{ width: '20vw'}}> {/* Set dark green border */}
                  <Card.Body>
                    <Card.Title>{event.eventName}</Card.Title>
                    <Card.Text>Location: {event.location}</Card.Text>
                    <Card.Text>Date: {event.date}</Card.Text>
                    <Card.Text>Begins At: {event.time}</Card.Text>
                    <Card.Text>Game Id: {event.gameId}</Card.Text>
                    <Card.Text>Event Full? {event.isFilled ? "Yes" : "No"}</Card.Text>
                    <UpdateEvent event={event}/>
                    <DeleteEvent id={event.id}/>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </>
    </>
  );
}

export default EventsList;