import React, { useEffect } from 'react';
import { Row, Col } from 'antd';
import CountryCard from '../components/CountryCard';
import { useDispatch, useSelector } from 'react-redux';
import map from 'lodash.map';
import { getAllCountries } from '../actions/countryActions';

const AllScreen = () => {
  const dispatch = useDispatch();

  const allcountries = useSelector((state) => state.getAll);
  const { countries } = allcountries;

  useEffect(() => {
    dispatch(getAllCountries());
    // eslint-disable-next-line
  }, [dispatch]);

  return (
    <Row className='margin-extra'>
      {map(countries, (country, key) => {
        return (
          <Col key={key}>
            <CountryCard country={country}></CountryCard>
          </Col>
        );
      })}
    </Row>
  );
};

export default AllScreen;
