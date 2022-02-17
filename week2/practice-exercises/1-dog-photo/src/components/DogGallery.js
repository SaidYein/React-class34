import { useState } from "react";
import { BASE_URL } from "../helpers/env";
import DogPhoto from "./DogPhoto";
import GetButton from "./GetButton";

const DogGallery = () => {
  const [dogPhoto, setDogPhoto] = useState([]);

  const getDogPhoto = async () => {
    try {
      const result = await fetch(BASE_URL);
      const data = await result.json();
      setDogPhoto([data.message]);
    } catch (error) {
      console.log(error);
    }
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
