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
              <>
                <Row className='row-col'>
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
                <Row className='row-col'>
                  <Col
                    xs={24}
                    xl={24}
                    sm={12}
                    md={12}
                    lg={12}
                    xl={12}
                    className='basic-col'>
                    {map(item.topLevelDomain, (domain) => {
                      return <p>{domain}</p>;
                    })}
                  </Col>
                  <Col className='additional-col'>{item.alpha2Code}</Col>
                </Row>
                <Row className='row-col'>
                  <Col
                    xs={24}
                    xl={24}
                    sm={12}
                    md={12}
                    lg={12}
                    xl={12}
                    className='basic-col'>
                    {map(item.callingCodes, (callingCode) => {
                      return <p>{callingCode}</p>;
                    })}
                  </Col>
                  <Col className='additional-col'>{item.alpha3Code}</Col>
                </Row>{' '}
                <Row className='row-col'>
                  <Col
                    xs={24}
                    xl={24}
                    sm={12}
                    md={12}
                    lg={12}
                    xl={12}
                    className='basic-col'>
                    {map(item.altSpellings, (altSpelling) => {
                      return <p>{altSpelling}</p>;
                    })}
                  </Col>
                  <Col className='additional-col'>{item.capital}</Col>
                </Row>
                <Row className='row-col'>
                  <Col
                    xs={24}
                    xl={24}
                    sm={12}
                    md={12}
                    lg={12}
                    xl={12}
                    className='basic-col'>
                    {map(item.timezones, (timezone) => {
                      return <p>{timezone}</p>;
                    })}
                  </Col>
                  <Col className='additional-col'>{item.region}</Col>
                </Row>
                <Row className='row-col'>
                  <Col
                    xs={24}
                    xl={24}
                    sm={12}
                    md={12}
                    lg={12}
                    xl={12}
                    className='basic-col'>
                    {map(item.borders, (border) => {
                      return <p>{border}</p>;
                    })}
                  </Col>
                  <Col className='additional-col'>{item.gini}</Col>
                </Row>
                <Row className='row-col'>
                  <Col
                    xs={24}
                    xl={24}
                    sm={12}
                    md={12}
                    lg={12}
                    xl={12}
                    className='basic-col'>
                    {map(item.currencies, (currency) => {
                      return (
                        <>
                          <p>---------</p>
                          <p>{currency.code}</p>
                          <p>{currency.name}</p>
                          <p>{currency.symbol}</p>
                          <p>---------</p>
                        </>
                      );
                    })}
                  </Col>
                  <Col className='additional-col'>{item.demonym}</Col>
                </Row>
                <Row className='row-col'>
                  <Col
                    xs={24}
                    xl={24}
                    sm={12}
                    md={12}
                    lg={12}
                    xl={12}
                    className='basic-col'>
                    {map(item.languages, (language) => {
                      return (
                        <>
                          <p>{language.iso639_1}</p>
                          <p>{language.iso639_2}</p>
                          <p>{language.name}</p>
                          <p>{language.nativeName}</p>
                        </>
                      );
                    })}
                  </Col>
                  <Col className='additional-col'>{item.subregion}</Col>
                </Row>
                <Row className='row-col'>
                  <Col
                    xs={24}
                    xl={24}
                    sm={12}
                    md={12}
                    lg={12}
                    xl={12}
                    className='basic-col'>
                    {map(item.regionalBlocs, (block) => {
                      return (
                        <>
                          <p>{block.acronym}</p>
                          <p>{block.name}</p>
                          <p>{block.otherAcronyms}</p>
                          {map(block.otherNames, (otherName) => {
                            return <p>{otherName}</p>;
                          })}
                        </>
                      );
                    })}
                  </Col>
                  {/* other acronyms not iterated */}
                  <Col className='additional-col'>{item.subregion}</Col>
                </Row>{' '}
                <Row className='row-col'>
                  <Col
                    xs={24}
                    xl={24}
                    sm={12}
                    md={12}
                    lg={12}
                    xl={12}
                    className='basic-col'>
                    {map(item.regionalBlocs, (block) => {
                      return (
                        <>
                          <p>{block.acronym}</p>
                          <p>{block.name}</p>
                          <p>{block.otherAcronyms}</p>
                          {map(block.otherNames, (otherName) => {
                            return <p>{otherName}</p>;
                          })}
                        </>
                      );
                    })}
                  </Col>
                  {/* other acronyms not iterated */}
                  <Col className='additional-col'>{item.cioc}</Col>
                </Row>
                {map(Object.keys(item.translations), (key) => console.log(key))}
                {console.log(Object.keys(item.translations))}
                {/* lat,lng */}
              </>
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
