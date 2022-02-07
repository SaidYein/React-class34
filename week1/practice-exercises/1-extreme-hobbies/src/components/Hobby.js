import React from "react";

const Hobby = ({ item, index, emoji }) => {
  return (
    <div className="container" key={index}>
      <p className="emoji">{emoji}</p>
      <p className="item">{item}</p>
    </div>
  );
};

export default Hobby;
