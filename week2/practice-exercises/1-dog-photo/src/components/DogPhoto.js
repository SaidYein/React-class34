import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

const DogPhoto = ({ photo }) => {
  return (
    <>
      <Card style={{ width: "22rem" }}>
        <Card.Img variant="top" src={photo} />
      </Card>
    </>
  );
};

export default DogPhoto;
