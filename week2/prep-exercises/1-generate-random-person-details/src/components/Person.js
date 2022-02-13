import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ListGroup, Card, Button } from "react-bootstrap";

const Person = ({ person, getPerson }) => {
  if (person == null) {
    return null;
  }

  return (
    <div>
      <Card style={{ width: "22rem" }}>
        <ListGroup>
          <ListGroup.Item>{`Full Name: ${
            person.first_name ? person.first_name : "--"
          } ${person.last_name ? person.last_name : "--"}`}</ListGroup.Item>
          <ListGroup.Item>{`Email: ${
            person.email ? person.email : "--"
          }`}</ListGroup.Item>
        </ListGroup>
        <Button variant="primary" size="lg" onClick={getPerson}>
          Create random person info
        </Button>
      </Card>
    </div>
  );
};

export default Person;
