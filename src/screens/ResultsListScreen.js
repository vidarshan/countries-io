import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'antd';
import CountryCard from '../components/CountryCard';
import { searchCountries, getAllCountries } from '../actions/countryActions';
import map from 'lodash.map';
import Message from '../components/Message';

const ResultsListScreen = ({ list, match }) => {
  const dispatch = useDispatch();

  const searchResult = useSelector((state) => state.searchCountry);

  const { loading, error, results } = searchResult;

  const { name, type } = match.params;

  useEffect(() => {
    console.log(match);

    dispatch(searchCountries(type, name));
  }, [dispatch, match]);

  return (
    <Row gutter={[20, 20]} className='margin-extra'>
      {loading ? (
        <>loading</>
      ) : error ? (
        <div className='search-error-container'>
          <Message
            type='error'
            message={`No results found for a country with ${name} ${type} `}></Message>
        </div>
      ) : (
        map(results.data, (item, key) => {
          console.log(results.data);
          return (
            <Col
              className='country-col'
              xs={24}
              sm={12}
              md={8}
              lg={8}
              xl={6}
              key={key}>
              <CountryCard country={item}></CountryCard>
            </Col>
          );
        })
      )}
    </Row>
  );
};

export default ResultsListScreen;
