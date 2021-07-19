import React, { useState } from 'react';
import { Input, Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { searchCountries } from '../actions/countryActions';

const { Search } = Input;

const { Option } = Select;

const HomeScreen = () => {
  const dispatch = useDispatch();
  const [criteria, setCriteria] = useState('name');

  const searchResult = useSelector((state) => state.searchCountry);

  function handleChange(value) {
    setCriteria(value);
    console.log(`selected ${criteria}`);
  }

  function searchCountry(criteria, keyword) {
    console.log(criteria);
    console.log(keyword);
    switch (criteria) {
      case 'name':
        dispatch(searchCountries('name', keyword));
        break;
      case 'currency':
        dispatch(searchCountries('currency', keyword));
        break;
      case 'language':
        dispatch(searchCountries('language', keyword));
        break;
      case 'capitalcity':
        dispatch(searchCountries('capitalcity', keyword));
        break;
      case 'callingcode':
        dispatch(searchCountries('callingcode', keyword));
        break;
      case 'region':
        dispatch(searchCountries('region', keyword));
        break;
      default:
        break;
    }
  }

  return (
    <div className='home-screen'>
      <div className='countries-main-title'>countries.io</div>
      <div className='countries-sub-title'>
        Search for countries by name, currency, language, capital, calling code
        or region
      </div>
      <div className='countries-search-container'>
        <div className='countries-search-type'>
          <Select
            defaultValue={criteria}
            style={{ width: 120 }}
            size='large'
            onChange={handleChange}>
            <Option value='name'>Name</Option>
            <Option value='currency'>Currency</Option>
            <Option value='language'>Language</Option>
            <Option value='capitalcity'>Capital City</Option>
            <Option value='callingcode'>Calling Code</Option>
            <Option value='region'>Region</Option>
          </Select>
        </div>
        <div className='countries-main-input'>
          <Search
            size='large'
            className='countries-input-field'
            placeholder='Enter search text'
            allowClear
            onSearch={(event) => searchCountry(criteria, event)}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
