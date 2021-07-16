import React, { useEffect } from 'react';
import { Row, Col, Divider } from 'antd';
import CountryCard from '../components/CountryCard';
import { useDispatch, useSelector } from 'react-redux';
import map from 'lodash.map';
import { getAllCountries } from '../actions/countryActions';
import Layout from 'antd/lib/layout/layout';

const style = { background: '#0092ff', padding: '8px 0' };

const AllScreen = () => {
  const dispatch = useDispatch();

  const allcountries = useSelector((state) => state.getAll);
  const { countries } = allcountries;

  useEffect(() => {
    dispatch(getAllCountries());
    console.log(allcountries);
  }, []);

  return (
    <Row className='margin-extra'>
      {map(countries, (country) => {
        return (
          <Col xs={24} sm={12} md={12} lg={8} xl={6} className='gutter-row'>
            <CountryCard country={country}></CountryCard>
          </Col>
        );
      })}
    </Row>
  );
};

// xs={24}
// sm={12}
// md={8}
// lg={8}
// xl={6}

export default AllScreen;
