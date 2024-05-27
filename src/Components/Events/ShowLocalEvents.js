// COMPONENT INCOMPLETE! onSelectLocation doesn't work, so the dropdown maps locations but nothing else really happens with it yet.

import React, { useState, useEffect } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import axios from 'axios';

const ShowLocalEvents = ({ onSelectLocation}) => {
  const eventURL = `https://664a82eaa300e8795d4227ab.mockapi.io/Event`;
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('');

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(eventURL);
        const events = response.data;
        const uniqueLocations = Array.from(new Set(events.map((event) => event.location)));
        setLocations(uniqueLocations);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  const handleSelectLocation = (eventKey) => {
    setSelectedLocation(eventKey);
    onSelectLocation(eventKey);
  };

  return (
    <DropdownButton
      id="dropdown-basic-button"
      title={selectedLocation || "Select a location"}
      onSelect={handleSelectLocation}
    >
      <Dropdown.Item eventKey="">All Locations</Dropdown.Item>
      {locations.map((location, index) => (
        <Dropdown.Item key={index} eventKey={location}>
          {location}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
};

export default ShowLocalEvents;