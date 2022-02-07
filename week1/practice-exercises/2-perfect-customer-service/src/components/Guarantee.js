import React from "react";

const Guarantee = ({ index, img, title, description }) => {
  return (
    <div key={index} className="container">
      <img src={img} alt="logo" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Guarantee;
