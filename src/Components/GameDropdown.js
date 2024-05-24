import React, { useState, useEffect } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import axios from "axios";

const GameDropdown = () => {
  const gameURL = `https://664a82eaa300e8795d4227ab.mockapi.io/Game`;
  const [show, setShow] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);
  const [games, setGames] = useState([]);

  useEffect(() => {
    const grabGames = async () => {
      try {
        const res = await axios.get(gameURL);
        setGames(res.data);
      } catch (error) {
        console.error("Error fetching games:", error);
      }
    };
    grabGames();
  }, []);

  const handleSelect = (game) => {
    setSelectedGame(game);
    console.log(`you have selected ${game.title}`)
    setShow(false); // Close the dropdown after selection
  };

  const toggleDropdown = () => {
    setShow(!show);
  };

  return (
    // Present suspicion is that the games.map bit doesn't work. I currently believe the reason is because I need a middle man but am uncertain. Hoping to ask Mike or a Mentor.
    <>
      <div>How Do You Play?</div>
      <DropdownButton
        id="dropdown-basic-button"
        title={selectedGame ? selectedGame.title : "Select a game"}
        show={show}
        onToggle={toggleDropdown}
        onSelect={handleSelect}
      >
        {games.map((game) => (
          <Dropdown.Item key={game.id} eventKey={game.id}>
            {game.title}
          </Dropdown.Item>
        ))}
      </DropdownButton>
      {selectedGame && (
        <div style={{ marginTop: "20px" }}>
          <h3>{selectedGame.title}</h3>
          <p>{selectedGame.gameInfo}</p>
          <p>
            <strong>Max Players:</strong> {selectedGame.maxPlayers}
          </p>
        </div>
      )}
    </>
  );
};

export default GameDropdown;
