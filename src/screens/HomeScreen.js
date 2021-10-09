import React, { useState } from 'react';
import { Input, Select } from 'antd';
import { useHistory } from 'react-router-dom';
import Message from '../components/Message';

const { Search } = Input;

const { Option } = Select;

const HomeScreen = () => {
  const history = useHistory();

  const [criteria, setCriteria] = useState('name');
  const [message, setMessage] = useState();
  const [showMessage, setShowMessage] = useState(false);
  const [placeholder, setPlaceholder] = useState(
    'example : united states of America'
  );

  function handleChange(value) {
    setCriteria(value);
    switch (value) {
      case 'name':
        setPlaceholder('example : United States of America');
        break;
      case 'currency':
        setPlaceholder('example : USD');
        break;
      case 'language':
        setPlaceholder('example : eng');
        break;
      // case 'capitalcity':
      //   setPlaceholder('example : Washington');
      //   break;
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
    setShowMessage(false);

    if (keyword) {
      history.push(`/search/${criteria}/${keyword}`);
    } else {
      setShowMessage(true);
      setMessage('Please enter your search keyword');
    }
  }

  return (
    <div className='home-screen'>
      <div className='countries-main-title'>countries.io</div>
      <div className='countries-sub-title'>
        Search for countries by name, currency, language, capital, calling code,
        region or regional bloc
      </div>

      <div className='empty-search-message-container'>
        {showMessage && <Message type='error' message={message}></Message>}
      </div>
      <div div className='countries-search-container'>
        <div className='countries-search-type'>
          <Select
            defaultValue={criteria}
            style={{ width: '100%' }}
            size='large'
            onChange={handleChange}>
            <Option value='name'>Name</Option>
            <Option value='currency'>Currency</Option>
            <Option value='language'>Language</Option>
            <Option value='capitalcity'>Capital City</Option>
            {/* <Option value='callingcode'>Calling Code</Option> */}
            <Option value='region'>Region</Option>
            {/* <Option value='regionalbloc'>Regional Bloc</Option> */}
          </Select>
        </div>
        <div className='countries-main-input'>
          <Search
            size='large'
            className='countries-input-field'
            placeholder={placeholder}
            onSearch={(event) => searchCountry(criteria, event)}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
