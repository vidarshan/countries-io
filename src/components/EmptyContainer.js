import React from 'react';
import { Link } from 'react-router-dom';

const EmptyContainer = ({ message }) => {
  return (
    <div className='empty-container'>
      <img src='/images/empty.png' alt='' />
      <div className='empty-container-text'>{message}</div>
      <div className='empty-container-link'>
        <Link to='/'>Go Back to Home</Link>
      </div>
    </div>
  );
};

export default EmptyContainer;
