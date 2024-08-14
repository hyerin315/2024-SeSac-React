import React from 'react';
import { useState } from 'react';

const Counter = () => { // function 리터럴
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => {
        setCount(count + 1);
      }}>Increase</button>
    </div>
  );
};

export default Counter;