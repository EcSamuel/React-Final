import React from 'react'
import { Container } from 'react-bootstrap'

function ShowHomePage() {
  return (
    <Container className ='align-items-center readable-container'>
        <h2 className="bordered-text">Welcome all lovers of card, board, and tabletop gaming!</h2>
        <h3 className="bordered-text">How to use this website:</h3>
            <ul className="bordered-text">
                <li>Search our Games Library for games you'd like to play</li>
                <li>Register New Games if you don't find the card, board, or tabletop game you'd like to host events for!</li>
                <li>Not looking to host? Look through other user's game submissions</li>
            </ul>
            <h3>Upcoming Features</h3>
            <ul>
                <li>Connect with Local Game Shops to see their event calendars, supported products, and more</li>
                <li>Connect with additional users with shared gaming interests</li>
                <li>Set Internal Preferences to games such as, "preferred host", "snacks welcome", "pet allergies", etc.</li>
                <li>Like someone you met on the site? Provide player endorsements so others know why they are a great fit for your table!</li>
            </ul>

        <h3>Have a suggestion of a feature you'd like to see implemented?</h3>
            <p>Share with us through <a href="mailto:thethans@gmail.com">this link!</a></p>
    </Container>

  )
}

export default ShowHomePage