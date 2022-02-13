import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../helpers/env";
import DogPhoto from "./DogPhoto";
import GetButton from "./GetButton";

const DogGallery = () => {
  const [dogPhoto, setDogPhoto] = useState([]);

  const getDogPhoto = () => {
    axios
      .get(BASE_URL)
      .then((res) => res.data.message)
      .then((data) => setDogPhoto([data]))
      .catch((error) => console.log(error));
  };
  return (
    <>
      <GetButton getDogPhoto={getDogPhoto} photo={dogPhoto} />
      {dogPhoto.length > 0 ? (
        dogPhoto.map((dogPhoto) => {
          return <DogPhoto photo={dogPhoto} />;
        })
      ) : (
        <div className="message">Click the button to get the first dog</div>
      )}
    </>
  );
};

export default DogGallery;
