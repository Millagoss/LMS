import React from 'react';

const Button = ({ label }) => {
  return <button className='play-now'>{label || 'Get Now'}</button>;
};

export default Button;
