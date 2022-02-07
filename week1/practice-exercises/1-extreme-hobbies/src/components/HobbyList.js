import React from "react";
import Hobby from "./Hobby";

const HobbyList = () => {
  const emojis = ["🏄", "🧗", "🚴", "🤸"];
  const hobbies = [
    "Surfing",
    "Rock climbing",
    "Mountain biking",
    "Breakdancing",
  ];
  return (
    <div className="list">
      <h2> EXTREME HOBBIES </h2>
      {hobbies.map((hobby, index) => (
        <Hobby item={hobby} key={index} emoji={emojis[index]} />
      ))}
    </div>
  );
};

export default HobbyList;
