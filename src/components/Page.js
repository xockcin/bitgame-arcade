import React from 'react'
import Byte from './Byte'

const Page = ({ bitCount, number, toggle, text, forward }) => {
  return (
    <div>
      <Byte size={bitCount} number={number} toggle={toggle} />
      <h3>{text}</h3>
      <button onClick={forward}>forward</button>
    </div>
  );
};

export default Page