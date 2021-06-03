import React from 'react';
import { Button, Container, Jumbotron } from 'react-bootstrap';

function Banner() {
  return (
    <Container fluid>
      <Jumbotron className="bgimage">
        <h1>The Greatest Outdoors</h1>
        <p>Wishlists curated by Airbnb.</p>
        <Button variant="dark">Get inspired</Button>
      </Jumbotron>
    </Container>
  );
}

export default Banner;
