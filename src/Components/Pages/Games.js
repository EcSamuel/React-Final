import React, {useEffect, useState} from 'react'
import { Container, Navbar, Nav, Form, FormControl, Button, Dropdown, DropdownButton, Card } from 'react-bootstrap';
import GameDropdown from '../GameDropdown';
import AddGame from '../AddGame';
import GamesList from '../GamesList';
import axios from 'axios';

const GameList = () => {
    return (
        <Container className='d-inline'>
            <AddGame/>
            {/* Stylings were being weird here. Need to do something about the background itself there. */}
            <h3 className='justify-content-center align-items-center'>Currently Supported Games</h3>
            <GamesList/>
        </Container>
    )
}

export default GameList