import React from 'react'
import UpdateEvent from './UpdateEvent';
import DeleteEvent from './DeleteEvent';

function EventCard() {
  return (
    <div>
      This is an Example Event
      <UpdateEvent/>
      <DeleteEvent/>
    </div>
  )
}

export default EventCard