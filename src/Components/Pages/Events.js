import React from 'react'
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import UpdateEvent from '../Events/UpdateEvent';
import DeleteEvent from '../Events/DeleteEvent';
import CreateEvent from '../Events/CreateEvent';
import EventsList from '../Events/EventsList';
import FilterEventByDate from '../Events/FilterEventByDate';
import FilterEventByGame from '../Events/FilterEventByGame';
import ShowLocalEvents from '../Events/ShowLocalEvents';
import HideFullEvents from '../Events/HideFullEvents';

function Events() {
  return (
    <Container className='justtify-content-center'>
        <CreateEvent/>
        <EventsList/>
    </Container>
  )
}

export default Events