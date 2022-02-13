import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

const GetButton = ({ getDogPhoto, photo }) => {
  return (
    <>
      <Button
        variant="primary"
        size="lg"
        onClick={getDogPhoto}
        style={{ marginBottom: "2rem" }}
      >
        {photo.length > 0 ? "Get another" : "Woof Woof"}
      </Button>
    </>
  );
};

export default GetButton;
