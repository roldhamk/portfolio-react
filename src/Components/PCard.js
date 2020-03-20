import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Container from "react-bootstrap/Container";

const PCard = props => {
  return (
    <Container className="contwrap">
      <CardDeck>
        <Card className="maincard">
          <Card.Img className="cardim" variant="top" src={props.image} />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.text}</Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
    </Container>
  );
};

export default PCard;
