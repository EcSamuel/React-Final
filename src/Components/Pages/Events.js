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
    <div className='container justtify-content-center'>
        The Goal of Events is to display user made events that reference games within other API's.

        I know I will need to run the following functions:
        <CreateEvent/>
        <EventsList/>
        <FilterEventByGame/>
        {/* <FilterEventByDate/> */}
        <ShowLocalEvents/>
    </div>
  )
}

export default Events