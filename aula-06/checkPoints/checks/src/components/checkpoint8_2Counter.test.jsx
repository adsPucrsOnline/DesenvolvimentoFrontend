// Counter.jsx

import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div data-testid="Counter">
      Counter Component
      <p data-testid="countdisplay">Count: {count}</p>
      <button data-testid="increment" onClick={increment}>
        Increment
      </button>
      <button data-testid="decrement" onClick={decrement}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
