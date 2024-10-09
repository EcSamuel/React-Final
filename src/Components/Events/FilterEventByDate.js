import React, { useState, useEffect } from 'react';
import { Dropdown, DropdownButton, Container } from 'react-bootstrap';
import axios from 'axios';

/**
 * Component to filter events by date range using two dropdowns.
 * 
 * @param {Function} onFilterEvents - Callback function to filter the events, passed as a prop.
 */
const FilterByDate = ({ onFilterEvents }) => {
  // URL for fetching the events data
  const eventURL = `https://664a82eaa300e8795d4227ab.mockapi.io/Event`;
   // State variables to store the list of unique dates, selected start date, and end date
  const [dates, setDates] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // useEffect hook runs once after component mounts to fetch the event data
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(eventURL);
        const events = response.data; // Extracts event data from the API response
        // Extracts unique dates from the events and stores them in the `dates` state variable
        const uniqueDates = Array.from(new Set(events.map((event) => event.date)));
        setDates(uniqueDates);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []); // Empty dependency array means this effect runs only once after the initial render

  /**
   * Handles the selection of dates from the dropdowns.
   * Updates the selected start or end date depending on the dropdown type (start/end).
   * 
   * @param {String} eventKey - The selected date from the dropdown.
   * @param {String} type - Specifies if it's the 'start' or 'end' dropdown.
   */

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
    <Container className='d-flex'>
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
    </Container>
  );
};

export default FilterByDate;
