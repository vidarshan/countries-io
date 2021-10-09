import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card } from 'antd';

const CountryCard = ({ country }) => {
  const history = useHistory();

  const redirectHandler = (countryName) => {
    history.push(`/country/${countryName}`);
  };

  return (
    <Card
      style={{ width: '300px', height: 'auto' }}
      cover={
        <img className='card-img-container' alt='example' src={country.flags[1]} />
      }>
      <div className='title-row'>
        <div className='country-name'>
          {country.name.official.length > 18 ? country.name.official.substring(0, 18).concat('...') : country.name.official}
          {/* {country.name.official.length > 18
            ? country.official.name.substring(0, 18).concat('...')
            : country.official.name} */}
        </div>
      </div>
      {/* <div className='top-row'>
        <div className='info-box'>
          <div className='country-calling-code-title'>Calling Code</div>
          <div className='country-phone-code'>{country.callingCodes}</div>
        </div>

        <div className='info-box'>
          <div className='country-calling-code-title'>Domain</div>
          <div className='country-phone-code'>{country.topLevelDomain}</div>
        </div>
      </div>

      <div className='middle-row'>
        <div className='info-box'>
          <div className='country-capital-title'>Capital</div>
          <div className='country-capital'>
            {country.capital.length > 6
              ? country.capital.substring(0, 6).concat('...')
              : country.capital}
          </div>
        </div>

        <div className='info-box'>
          <div className='country-region-title'>Region</div>
          <div className='country-region'>{country.region}</div>
        </div>
      </div> */}

      <div className='bottom-row'>
        <button
          className='see-more-btn'
          value='See More Details'
          onClick={() => redirectHandler(country.name)}>
          See More Details
        </button>
      </div>
    </Card>
  );
};

export default CountryCard;
