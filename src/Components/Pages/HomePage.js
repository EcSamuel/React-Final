import React from 'react'
import { Container } from 'react-bootstrap'

function ShowHomePage() {
  // HomePage is pretty much just jsx and rawtext. Its an informational page but that's ok. Hoping to use it as a growing changelog for other elements I might want to write down the road.
  return (
    <Container className ='align-items-center readable-container'>
        <h2>Welcome all lovers of card, board, and tabletop gaming!</h2>
        <h3>How to use this website:</h3>
            <ul>
                <li>Search our Games Library for games you'd like to play</li>
                <li>Register New Games if you don't find the card, board, or tabletop game you'd like to host events for!</li>
                <li>Not looking to host? Look through other user's game submissions</li>
            </ul>
            <h3>Upcoming Features</h3>
            <ul>
                <li>Connect with Local Game Shops to see their event calendars, supported products, and more</li>
                <li>Connect with additional users with shared gaming interests</li>
                <li>Set Internal Preferences to games such as, "preferred host", "snacks welcome", "pet allergies", etc.</li>
                <li>Create and read reviews by verified players of the games you want to share about.</li>
                <li>Like someone you met on the site? Provide player endorsements so others know why they are a great fit for your table!</li>
            </ul>
            
        <h3>The Idea Behind Rule Zer0</h3>
          <p>Games are important to many of us. Time is precious, and the best games take work. 
            Founded around the principle of the Dungeons and Dragons and Commander Community's ideas of "session zero" and "rule zero gameplay", Rule Zer0 intends to make finding like-minded players for your favorite card, board, and tabletop game easier.</p>
    </Container>
  )
}

export default ShowHomePage