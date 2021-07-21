import React, { useState } from 'react';
import { Input, Select } from 'antd';
import { useHistory } from 'react-router-dom';

const { Search } = Input;

const { Option } = Select;

const HomeScreen = () => {
  const history = useHistory();

  const [criteria, setCriteria] = useState('name');
  const [keyword, setKeyword] = useState();
  const [disabled, setDisabled] = useState(false);
  const [placeholder, setPlaceholder] = useState(
    'example : united states of America'
  );

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
    console.log(keyword);

    if (keyword) {
      history.push(`/search/${criteria}/${keyword}`);
    } else {
      console.log('wddwe');
    }
  }

  return (
    <div className='home-screen'>
      <div className='countries-main-title'>countries.io</div>
      <div className='countries-sub-title'>
        Search for countries by name, currency, language, capital, calling code
        or region
      </div>
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
            size='large'
            className='countries-input-field'
            disabled={disabled}
            placeholder={placeholder}
            onSearch={(event) => searchCountry(criteria, event)}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
