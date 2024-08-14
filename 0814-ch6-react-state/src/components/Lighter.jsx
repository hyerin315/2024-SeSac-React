import React from 'react';
import { useState } from 'react';

const Lighter = () => {
  const [light, setLite] = useState('OFF');
  return (
    <div>
      <h1>{light}</h1>
      <button onClick={() => {
        setLite(light === 'ON' ? 'OFF' : 'ON')
      }}>Light Change</button>
    </div>
  );
};

export default Lighter;