import React, { useState } from "react";
import { Count } from "./Count";
import { Button } from "./Button";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const decrement = () => {
    if (count > 0) {
      setCount((prevCount) => (prevCount = prevCount - 1));
    }
  };

  const feedback =
    count > 10 ? (
      <p className="highCount">It's higher than 10!</p>
    ) : (
      <p> Keep Counting</p>
    );

  return (
    <div className="container">
      <div>{feedback}</div>
      <Count count={count} />
      <div className="button">
        <Button increment={increment} decrement={decrement} />
      </div>
    </div>
  );
};
