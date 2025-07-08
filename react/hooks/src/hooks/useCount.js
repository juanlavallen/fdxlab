import { useState } from "react";

export const useCount = (value = 0) => {
  const [count, setCount] = useState(value);

  const increment = (value = 1) => {
    setCount(count + value);
  };

  const decrement = (value = 1) => {
    if (count > 0) {
      setCount(count - value);
    }
  };

  const reset = () => {
    setCount(value);
  };

  return {
    count,
    increment,
    decrement,
    reset,
  };
};
