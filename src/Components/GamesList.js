import React, { useEffect, useState } from 'react';
import {Button, Card, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { grabGames } from './Events/API';
import '../App.css'
import FilterGameByType from './FilterGameByType';
import FilterGameByMaxPlayers from './FilterGameByMaxPlayers';
// this is how and where I am mapping out the games to the DOM
function GamesList() {
    const gameURL = `https://664a82eaa300e8795d4227ab.mockapi.io/Game`;
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filteredGames, setFilteredGames] = useState([]);

    const handleFilteredGames = (games) => {
        setFilteredGames(games);
    };
// There were multiple suggestions to do loading and error loops when writing code, so I left them in as best practice, but the API's are small enough they're not popping up under regular circumstances.
    useEffect(() => {
        const grabGames = async () => {
            axios
              .get(gameURL)
              .then(res => {
                console.log(res.data);
                setGames(res.data);
              })
              .catch(error => {
                console.error('Error Adding connection at useEffect', error);
              });
          };
          grabGames();
        }, []);

    return (
        <>
            <Container className='justify-content-center'>
                <h3>Currently Supported Games</h3>
                <FilterGameByType games = {games} onFilteredGames={handleFilteredGames}/>
                <FilterGameByMaxPlayers games = {games} onFilteredGames= {handleFilteredGames}/>
            </Container>
            <Container className=''>
                <Row className='justify-content-center'>
                {filteredGames.map((game) => (
                    <Col key={game.id} sm={12} md={6} lg={4} className="mb-3">
                    <Card border='primary' className='card-display-container' style={{ width: 'mw-automatic' }}>
                        <Card.Body>
                        <Card.Title>{game.title}</Card.Title>
                        <Card.Text>Supported Players: {game.maxPlayers}</Card.Text>
                        <Card.Text>Type: {game.type}</Card.Text>
                        <Card.Text>Description: {game.gameInfo}</Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                ))}
                </Row>
            </Container>
        </>
        );
}

export default GamesList