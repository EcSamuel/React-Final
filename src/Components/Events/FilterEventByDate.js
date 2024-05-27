import React, { useState, useEffect } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import axios from 'axios';

const FilterByDate = ({ onFilterEvents }) => {
  const eventURL = `https://664a82eaa300e8795d4227ab.mockapi.io/Event`;
  const [dates, setDates] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(eventURL);
        const events = response.data;
        const uniqueDates = Array.from(new Set(events.map((event) => event.date)));
        setDates(uniqueDates);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  const handleSelectDate = (eventKey, type) => {
    if (type === 'start') {
      setStartDate(eventKey);
    } else {
      setEndDate(eventKey);
    }
    filterEventsByDateRange(eventKey, type);
  };

  const filterEventsByDateRange = (selectedDate, type) => {
    const filteredEvents = type === 'start'
      ? dates.filter((date) => date >= selectedDate && date <= endDate)
      : dates.filter((date) => date >= startDate && date <= selectedDate);

    onFilterEvents(filteredEvents);
  };

  return (
    <div>
      <DropdownButton
        id="dropdown-start-date"
        title={startDate || "Select Start Date"}
        onSelect={(eventKey) => handleSelectDate(eventKey, 'start')}
      >
        <Dropdown.Item eventKey="">All Dates</Dropdown.Item>
        {dates.map((date, index) => (
          <Dropdown.Item key={index} eventKey={date}>
            {date}
          </Dropdown.Item>
        ))}
      </DropdownButton>
      <DropdownButton
        id="dropdown-end-date"
        title={endDate || "Select End Date"}
        onSelect={(eventKey) => handleSelectDate(eventKey, 'end')}
      >
        <Dropdown.Item eventKey="">All Dates</Dropdown.Item>
        {dates.map((date, index) => (
          <Dropdown.Item key={index} eventKey={date}>
            {date}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </div>
  );
};

export default FilterByDate;