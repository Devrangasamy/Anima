import React, { useEffect, useState } from "react";

export const Sample = () => {
  const [count, setCount] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const timer = () => {
    setCount((prev) => prev + 1);
  };
  useEffect(() => {
    const interval = setInterval(timer, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const secondTimer = () => {
  }
  
  return (
    <div>
      {count}
      <button onClick={secondTimer}>Click me</button>
    </div>
  );
};
