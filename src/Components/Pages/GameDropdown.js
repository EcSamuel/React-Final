import React, { useState } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';

const GameDropdown = () => {
  const [show, setShow] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);

  const handleSelect = (gameId) => {
    const game = games.find((g) => g.id === parseInt(gameId));
    setSelectedGame(game);
    setShow(false); // Close the dropdown after selection
  };

  const toggleDropdown = () => {
    setShow(!show);
  };

  const games = [
    {
      id: 1,
      Title: 'BlackJack',
      Maxplayers: 7,
      GameInfo:
        'Blackjack, also called twenty-one, is a popular casino game where you compete against the dealer to get as close to 21 points without going over. Using decks of cards, players try to get a higher point value than the dealer without busting.',
    },
    {
      id: 2,
      Title: 'TexasHoldEm',
      MaxPlayers: 4,
      GameInfo: `The most popular poker variant, Texas Hold'em deals two cards to each player (maximum of 10) who use them with five community cards to form their best five-card hand. Players can bet strategically throughout the hand to win the pot.`,
    },
    {
      id: 3,
      Title: 'SevenCardStud',
      MaxPlayers: 8,
      GameInfo: `An older poker game, Seven-Card Stud deals a mix of face-up and face-down cards to each player (maximum of 8) with betting rounds in between. Players use their combination of hidden and revealed cards to create the best five-card hand.`,
    },
    {
      id: 4,
      Title: 'PotLimitOmaha',
      MaxPlayers: 10,
      GameInfo: `Known for its complex strategy, Pot-Limit Omaha deals four cards to each player (maximum of 10) who can only use two of them with the five community cards to form their best hand. Betting is limited to the size of the pot, making it a game of big swings and skilled play.`,
    },
  ];

  return (
    <>
      <div>How Do You Play?</div>
      <DropdownButton
        id="dropdown-basic-button"
        title={selectedGame ? selectedGame.Title : 'Select a game'}
        show={show}
        onToggle={toggleDropdown}
        onSelect={handleSelect}
      >
        {games.map((game) => (
          <Dropdown.Item key={game.id} eventKey={game.id}>
            {game.Title}
          </Dropdown.Item>
        ))}
      </DropdownButton>
      {selectedGame && (
        <div style={{ marginTop: '20px' }}>
          <h3>{selectedGame.Title}</h3>
          <p>{selectedGame.GameInfo}</p>
          <p>
            <strong>Max Players:</strong> {selectedGame.Maxplayers}
          </p>
        </div>
      )}
    </>
  );
};

export default GameDropdown;