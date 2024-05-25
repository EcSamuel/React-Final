import React from 'react'
import {Button} from 'react-bootstrap'
import axios from 'axios'

function DeleteEvent({id, onRemove}) {
  const eventURL = `https://664a82eaa300e8795d4227ab.mockapi.io/Event`;

  const handleRemove = async () => {
    try {
      console.log(`Attempting to delete event with ID: ${id} at URL: ${eventURL}/${id}`);
      await axios.delete(`${eventURL}/${id}`);
      onRemove(id);
    } catch (error) {
      console.error('Error removing event!', error);
      alert(`Error removing event: ${error.message}`);
    }
  };

  return (
    <Button variant="danger" onClick={handleRemove}>
      Remove Event
    </Button>
  )
}

export default DeleteEvent