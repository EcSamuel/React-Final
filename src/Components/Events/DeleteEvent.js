import React from 'react'
import {Button} from 'react-bootstrap'
import axios from 'axios'
import { deleteEvent, grabEvents } from './API';

function DeleteEvent({id, setEvents}) {
  const eventURL = `https://664a82eaa300e8795d4227ab.mockapi.io/Event`;

  const handleRemove = (e) => {
    e.preventDefault();
    deleteEvent(id)
    setEvents(grabEvents())
    console.log("handleRemove ran with id: ", id)
    
  };

  return (
    <Button variant="danger" onClick={(e) => handleRemove(e)}>
      Remove Event
    </Button>
  )
}

export default DeleteEvent