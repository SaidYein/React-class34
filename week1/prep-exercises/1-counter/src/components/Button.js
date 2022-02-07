import React from "react";

export const Button = ({ increment, decrement }) => {
  return (
    <div className="buttons">
      <button onClick={increment}> + </button>
      <button onClick={decrement}> - </button>
    </div>
  );
};
