import React from 'react';

import { FaClock } from 'react-icons/fa';
import Button from './button.component';

const SecondBlock = ({ imgUrl, item, index }) => {
  return (
    <div className='offer-block'>
      <footer className='second-block-footer'>
        <h2>{item.text}</h2>
        <p className='offer-price'>{item.price}</p>
        <span className='description'>
          <p>- Lorem ipsum dolor sit amet.</p>
          <p>- Lorem ipsum dolor sit amet.</p>
          <p>- Lorem ipsum dolor sit amet.</p>
        </span>
        <span className='clock'>
          <Button />
        </span>
      </footer>
    </div>
  );
};

export default SecondBlock;
