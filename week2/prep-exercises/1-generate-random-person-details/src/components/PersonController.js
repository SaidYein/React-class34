import React, { useEffect, useState } from "react";
import Person from "./Person";
import Error from "./Error";

const PersonController = () => {
  const [person, setPerson] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    getPerson();
  }, []);

  const getPerson = async () => {
    try {
      const res = await fetch("https://www.randomuser.me/api?results=1");
      const data = await res.json();
      const { name, email } = data.results[0];
      const personObj = [
        {
          first_name: name.first,
          last_name: name.last,
          email: email,
        },
      ];

      //clear the div after every request to show Spinner Loader
      setPerson([]);
      // used setTimeout to mimic a delay
      setTimeout(() => {
        setPerson(personObj);
      }, 2000);
    } catch (error) {
      setError("Fetching Data Failed");
      console.log(error);
    }
  };

  if (error) {
    return <Error error={error} />;
  } else if (person.length > 0) {
    return person.map((person, index) => (
      <Person
        key={index}
        person={person}
        getPerson={getPerson}
        data-testid={`person-item-${index}`}
      />
    ));
  } else {
    return <h1>Loading...</h1>;
  }
};

export default PersonController;
