import React, {useEffect, useState} from 'react'
import { Container, Navbar, Nav, Form, FormControl, Button, Dropdown, DropdownButton, Card } from 'react-bootstrap';
import AddGame from '../Games/AddGame';
import GamesList from '../Games/GamesList';
import axios from 'axios';

const GameList = () => {

    const [filteredGames, setFilteredGames] = useState([]);

    const handleFilteredGames = (games) => {
    setFilteredGames(games);
  };

    return (
        <Container className='d-inline'>
            <AddGame/>
            {/* Stylings were being weird here. Need to do something about the background itself there. */}
            <GamesList games={filteredGames}/>
        </Container>
    )
}

export default GameList