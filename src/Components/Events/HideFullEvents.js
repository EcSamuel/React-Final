import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const HideFullEvents = ({ events, setFilteredEvents }) => {
  const [hideFullEvents, setHideFullEvents] = useState(true);

  const handleToggle = () => {
    setHideFullEvents(!hideFullEvents);
    const filteredEvents = hideFullEvents
      ? events.filter((event) => !event.isFilled)
      : events;
    setFilteredEvents(filteredEvents);
  };

  return (
    <Button onClick={handleToggle}>
      {hideFullEvents ? 'Show Full Events' : 'Hide Full Events'}
    </Button>
  );
};

export default HideFullEvents;