import React from 'react';

const AboutScreen = () => {
  return (
    <div className='about-container'>
      <img className='about-image' src='/images/location.png' alt='' />
      <div className='about-title'>countries.io</div>
      <div className='about-description'>
        Made by vidarshan with the use of restcountries.eu API
      </div>
      <div className='about-version'>Version 1.0 [July 2021]</div>
    </div>
  );
};

export default AboutScreen;
