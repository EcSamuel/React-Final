import React, { useEffect, useState } from 'react';
import {Button, Card, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';


function GamesList() {
    const gameURL = `https://664a82eaa300e8795d4227ab.mockapi.io/Game`;
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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
    <Container className=''>
        <Row className='justify-content-center'>
            {games.map((game) => (
                <Col key={game.id} sm={12} md={6} lg={4} className="mb-3">
                    <Card border='primary' style={{width: 'mw-automatic'}}>
                        <Card.Body>
                            <Card.Title>{game.title}</Card.Title>
                            <Card.Text>Supported Players: {game.maxPlayers}</Card.Text>
                            <Card.Text>Description: {game.gameInfo}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    </Container>
  )
}

export default GamesList