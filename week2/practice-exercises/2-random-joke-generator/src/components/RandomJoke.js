import React, { useEffect, useState } from "react";
import axios from "axios";
import Joke from "./Joke";
const BASE_URL = "https://api.jokes.one/jod?category=animal";

const RandomJoke = () => {
  const [joke, setJoke] = useState({});

  useEffect(() => {
    getJoke();
  }, []);

  const getJoke = () => {
    axios
      .get(BASE_URL)
      .then((res) => res.data.contents.jokes[0].joke)
      .then((data) => setJoke(data));
    // .catch((error) => console.log(error));
  };

  return (
    <div>
      <Joke joke={joke} />
    </div>
  );
};

export default RandomJoke;
