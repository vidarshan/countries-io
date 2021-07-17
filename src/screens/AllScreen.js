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
          <Col>
            <CountryCard country={country}></CountryCard>
          </Col>
        );
      })}
    </Row>
  );
};

{
  /* <Col className='col-back' xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
Col
</Col> */
}
export default AllScreen;
