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
      <ul>
        {hobbies.map((hobby, index) => (
          <li>
            <Hobby item={hobby} key={index} emoji={emojis[index]} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HobbyList;
