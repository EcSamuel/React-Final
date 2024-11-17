import React, { useEffect, useState } from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import '../../App.css';

function Connections() {
    const [connections, setConnections] = useState([]);
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(false);

//     TODO: Write useEffect for Connections
//      TODO: Write handlers for selection on users (menu within list)
//      TODO: Write filter handlers for users (by game, by location, by distance, by availability)


    //             TODO: Replace all commented sections below once written
    return (
        <>
            <Container className='justify-content-center readable-container'>
                <h3>User Connections</h3>
                {/*<FilterUserByGame users = {users} onFilteredUsers={handleFilteredUsers}/>*/}
                {/*<FilterUserByAvailability users = {users} onFilteredUsers={handleFilteredUsers}/>*/}
            </Container>
            <Container className=''>
                <Row className='justify-content-center'>
                {/*{filteredUsers.map((user) => (*/}
                    <Col /*key={user.id}*/ sm={12} md={6} lg={4} className="mb-3">
                        <Card border='primary' className='card-display-container' style={{ width: 'mw-automatic' }}>
                            <Card.Body>
                                <Card.Title>Replace with User Name</Card.Title>
                                <Card.Text>User Image to go here</Card.Text>
                                <Card.Text>Shared Games: </Card.Text>
                                <Card.Text>Additional Fields to be Determined</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                {/*))}*/}
                </Row>
            </Container>
        </>
    );
}

export default Connections