import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Card, Avatar } from 'antd';
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';

const { Meta } = Card;

const CountryCard = ({ country }) => {
  const history = useHistory();

  const redirectHandler = (countryName) => {
    history.push(`/country/${countryName}`);
  };

  return (
    <Card
      style={{ width: '300px', height: 'auto' }}
      cover={
        <img className='card-img-container' alt='example' src={country.flag} />
      }>
      <div className='title-row'>
        <div className='country-name'>
          {country.name.length > 18
            ? country.name.substring(0, 18).concat('...')
            : country.name}
        </div>
      </div>
      <div className='top-row'>
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
      </div>

      <div className='bottom-row'>
        <button
          className='see-more-btn'
          value='See More Details'
          onClick={() => redirectHandler(country.name)}>
          See More Details
        </button>
      </div>
      {/* <div className='country-language'>{country.languages[0]}</div> */}
    </Card>
  );
};

export default CountryCard;
