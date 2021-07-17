import React, { useState, useEffect } from 'react';
import { Row, Col } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { getCountry } from '../actions/countryActions';
import map from 'lodash.map';

const CountryScreen = ({ match, props }) => {
  const dispatch = useDispatch();

  const countryInfo = useSelector((state) => state.getCountry);

  const { country, loading } = countryInfo;

  const setAllData = async (countryObj) => {
    // map(countryObj, (item) => {
    //   setName(item.name);
    // });
  };

  useEffect(() => {
    dispatch(getCountry(match.params.name));
    console.log(country);
  }, [match, dispatch]);

  return (
    <Row className='margin-extra'>
      {loading ? (
        <div>loading</div>
      ) : (
        <>
          {map(country, (item) => {
            console.log(item);
            return (
              <Row>
                <Col
                  xs={24}
                  xl={24}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                  className='basic-col'>
                  {item.name}
                </Col>

                <Col className='additional-col'>{item.flag}</Col>
              </Row>
            );
          })}
        </>
      )}

      {/* {loading ? (
        <div>loading</div>
        // xs={24}
// sm={12}
// md={8}
// lg={8}
// xl={6}

      ) : (
        <Row>
          <Col className='basic-col'>{country.name}</Col>
          {console.log(country)}
          <Col className='additional-col'>{country.topLevelDomain}</Col>
        </Row>
      )} */}
    </Row>
  );
};

export default CountryScreen;
