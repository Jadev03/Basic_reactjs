import React from 'react';
import './Input.css';

const Input = ({ colour, setColour }) => {
  return (
    <div>
      <input
        type='text'
        placeholder='Enter color'
        value={colour}
        onChange={(e) => setColour(e.target.value)}
        required
      />
    </div>
  );
};

export default Input;
