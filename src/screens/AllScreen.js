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
    <Row gutter={[20, 20]} className='margin-extra'>
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
    </Row>
  );
};

export default AllScreen;
