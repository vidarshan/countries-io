import React, { useState } from 'react';
import { Input, Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { searchCountries } from '../actions/countryActions';
import Message from '../components/Message';

const { Search } = Input;

const { Option } = Select;

const HomeScreen = () => {
  const dispatch = useDispatch();
  const [criteria, setCriteria] = useState('name');
  const [placeholder, setPlaceholder] = useState(
    'example : united states of America'
  );

  const searchResult = useSelector((state) => state.searchCountry);

  const { loading, error, searchCountry: results } = searchResult;

  function handleChange(value) {
    setCriteria(value);
    switch (value) {
      case 'name':
        setPlaceholder('example : united states of America');
        break;
      case 'currency':
        setPlaceholder('example : USD');
        break;
      case 'language':
        setPlaceholder('example : eng');
        break;
      case 'capitalcity':
        setPlaceholder('example : Washington');
        break;
      case 'callingcode':
        setPlaceholder('example : 1');
        break;
      case 'region':
        setPlaceholder('example : Americas');
        break;
      default:
        break;
    }
  }

  function searchCountry(criteria, keyword) {
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

    console.log(error);
  }

  return (
    <div className='home-screen'>
      <div className='countries-main-title'>countries.io</div>
      <div className='countries-sub-title'>
        Search for countries by name, currency, language, capital, calling code
        or region
      </div>

      {error && (
        <div className='search-error-container'>
          <Message type='error' message={error}></Message>
        </div>
      )}
      <div div className='countries-search-container'>
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
            loading={loading}
            size='large'
            className='countries-input-field'
            placeholder={placeholder}
            allowClear
            onSearch={(event) => searchCountry(criteria, event)}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
