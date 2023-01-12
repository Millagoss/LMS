import React from 'react';

import { FaLaptop } from 'react-icons/fa';

const Block = ({ data, index }) => {
  const { title, text, link } = data;
  return (
    <div key={index} className='block-container'>
      <div className='icon'>
        <FaLaptop />
      </div>
      <div className='text-container'>
        <div className='info'>
          <h3>{title}</h3>
          <h4 className='link'>{link}</h4>
        </div>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Block;
