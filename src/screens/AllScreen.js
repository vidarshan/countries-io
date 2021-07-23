import React, { useEffect } from 'react';
import { Row, Col, Spin } from 'antd';
import CountryCard from '../components/CountryCard';
import { useDispatch, useSelector } from 'react-redux';
import map from 'lodash.map';
import { getAllCountries } from '../actions/countryActions';
import Message from '../components/Message';

const AllScreen = () => {
  const dispatch = useDispatch();

  const allcountries = useSelector((state) => state.getAll);
  const { countries, loading, error } = allcountries;

  useEffect(() => {
    dispatch(getAllCountries());
    // eslint-disable-next-line
  }, [dispatch]);

  return (
    <Row gutter={[20, 48]} className='margin-extra'>
      {loading ? (
        <Spin size='large'></Spin>
      ) : error ? (
        <div className='search-error-container'>
          <Message message={error} type='error'></Message>
        </div>
      ) : (
        <>
          {map(countries, (country, key) => {
            return (
              <Col
                className='country-col'
                xs={24}
                sm={12}
                md={8}
                lg={8}
                xl={6}
                key={key}>
                <CountryCard country={country}></CountryCard>
              </Col>
            );
          })}
        </>
      )}
    </Row>
  );
};

export default AllScreen;
