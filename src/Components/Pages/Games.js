import React, {useEffect, useState} from 'react'
import { Container, Navbar, Nav, Form, FormControl, Button, Dropdown, DropdownButton, Card } from 'react-bootstrap';
import GameDropdown from '../GameDropdown';
import AddGame from '../AddGame';
import GamesList from '../GamesList';
import axios from 'axios';
import FilterGameByType from '../FilterGameByType';

const GameList = () => {

    const [filteredGames, setFilteredGames] = useState([]);

    const handleFilteredGames = (games) => {
    setFilteredGames(games);
  };

    return (
        <Container className='d-inline'>
            <AddGame/>
            {/* Stylings were being weird here. Need to do something about the background itself there. */}
            <h3 className='justify-content-center align-items-center'>Currently Supported Games</h3>
            <GamesList games={filteredGames}/>
        </Container>
    )
}

export default GameList