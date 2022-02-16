import React from "react";

const Joke = ({ joke }) => {
  return (
    <div>
      <h1>{joke.title}</h1>
      <h2>{joke.text}</h2>
    </div>
  );
};

export default Joke;
