import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Spin } from 'antd';
import CountryCard from '../components/CountryCard';
import { searchCountries } from '../actions/countryActions';
import map from 'lodash.map';
import Message from '../components/Message';
import EmptyContainer from '../components/EmptyContainer';

const ResultsListScreen = ({ match }) => {
  const dispatch = useDispatch();

  const searchResult = useSelector((state) => state.searchCountry);

  const { loading = true, error, results } = searchResult;

  const { name, type } = match.params;

  useEffect(() => {
    dispatch(searchCountries(type, name));
  }, [dispatch, match]);

  return (
    <Row gutter={[20, 48]} className='margin-extra'>
      {loading ? (
        <Spin size='large' />
      ) : error ? (
        <div className='search-error-container'>
          <EmptyContainer
            message={`No results found for a country with ${name} ${type}.`}></EmptyContainer>
        </div>
      ) : (
        map(results.data, (item, key) => {
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
