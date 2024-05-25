import React, {useEffect, useState} from 'react'
import { Navbar, Nav, Form, FormControl, Button, Dropdown, DropdownButton, Card } from 'react-bootstrap';
import GameDropdown from '../GameDropdown';
import AddGame from '../AddGame';

const GameList = () => {
    return (
        <>
            <AddGame/>

            Currently Supported Games

            <GameDropdown/>
          
        </>
    )








}

export default GameList