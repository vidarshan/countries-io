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
                    <div className='country-title'>{item.name}</div>
                  </Col>
                </Row>
                <Row gutter={12} className='row-col'>
                  <Col
                    xs={24}
                    xl={12}
                    sm={12}
                    md={12}
                    lg={12}
                    className='basic-col'>
                    <img
                      className='country-flag'
                      src={item.flag}
                      alt={`Flag of ${item.name}`}
                    />
                  </Col>
                  <Col
                    xs={24}
                    xl={12}
                    sm={12}
                    md={12}
                    lg={12}
                    className='additional-col'>
                    <Row className='additional-row'>
                      <Col
                        xs={8}
                        xl={8}
                        sm={4}
                        md={4}
                        lg={4}
                        className='additional-col-item'>
                        <div className='top-level-domain-container'>
                          <div className='top-level-domain-title'>
                            Top Level Domain
                          </div>
                          <div className='top-level-domain'>
                            {map(item.topLevelDomain, (domain) => {
                              return <div>{domain}</div>;
                            })}
                          </div>
                        </div>
                      </Col>
                      <Col xs={8} xl={8} sm={4} md={4} lg={4}>
                        <div className='alpha-code-container'>
                          <div className='alpha-code-title'>Alpha 2 code</div>
                          <div className='alpha-code'>{item.alpha2Code}</div>
                        </div>
                      </Col>
                      <Col xs={8} xl={8} sm={4} md={4} lg={4}>
                        <div className='alpha-code-container'>
                          <div className='alpha-code-title'>Alpha 3 code</div>
                          <div className='alpha-code'>{item.alpha3Code}</div>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={8} xl={8} sm={4} md={4} lg={4}>
                        <div className='calling-code-container'>
                          <div className='calling-code-title'>Calling code</div>
                          <div className='calling-code'>
                            {map(item.callingCodes, (callingCode) => {
                              return <div>+{callingCode}</div>;
                            })}
                          </div>
                        </div>
                      </Col>
                      <Col xs={8} xl={8} sm={4} md={4} lg={4}>
                        <div className='capital-container'>
                          <div className='capital-title'>Capital</div>
                          <div className='capital'>{item.capital}</div>
                        </div>
                      </Col>
                      <Col xs={8} xl={8} sm={4} md={4} lg={4}>
                        <div className='region-container'>
                          <div className='region-title'>Region</div>
                          <div className='region'>{item.region}</div>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={8} xl={8} sm={4} md={4} lg={4}>
                        <div className='sub-region-container'>
                          <div className='sub-region-title'>Sub-region</div>
                          <div className='sub-region'>{item.subregion}</div>
                        </div>
                      </Col>
                      <Col xs={8} xl={8} sm={4} md={4} lg={4}>
                        <div className='population-container'>
                          <div className='population-title'>Population</div>
                          <div className='population'>{item.population}</div>
                        </div>
                      </Col>
                      <Col xs={8} xl={8} sm={4} md={4} lg={4}>
                        <div className='demonym-container'>
                          <div className='demonym-title'>Demonym</div>
                          <div className='demonym'>{item.demonym}</div>
                        </div>
                      </Col>
                    </Row>

                    {/* lat, long */}
                    <Row>
                      <Col xs={8} xl={8} sm={4} md={4} lg={4}>
                        <div className='area-container'>
                          <div className='area-title'>Area</div>
                          <div className='area'>{item.area}</div>
                        </div>
                      </Col>
                      <Col xs={8} xl={8} sm={4} md={4} lg={4}>
                        <div className='gini-container'>
                          <div className='gini-title'>Gini</div>
                          <div className='gini'>{item.gini}</div>
                        </div>
                      </Col>
                      <Col xs={8} xl={8} sm={4} md={4} lg={4}>
                        <div className='numeric-code-container'>
                          <div className='numeric-code-title'>Numeric Code</div>
                          <div className='numeric_code'>{item.numericCode}</div>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row className='row-col'>
                  <Col xs={8} xl={6} sm={4} md={4} lg={4}>
                    <div className='alt-spellings-container'>
                      <div className='alt-spellings-title'>
                        Alternate Spellings
                      </div>
                      {map(item.altSpellings, (altSpelling) => {
                        return (
                          <div className='alt-spelling'>{altSpelling}</div>
                        );
                      })}
                    </div>
                  </Col>
                  <Col xs={8} xl={6} sm={4} md={4} lg={4}>
                    <div className='timezones-container'>
                      <div className='timezones-title'>Timezones</div>
                      <div className='timezones'>
                        <Row className='row-col'>
                          {map(item.timezones, (timezone) => {
                            return (
                              <Col xs={8} xl={8} sm={8} md={8} lg={8}>
                                {timezone}
                              </Col>
                            );
                          })}
                        </Row>
                      </div>
                    </div>
                  </Col>
                  <Col xs={8} xl={6} sm={4} md={4} lg={4}>
                    <div className='borders-container'>
                      <div className='borders-title'>Borders</div>
                      <div className='borders'>
                        <Row className='row-col'>
                          {map(item.borders, (border) => {
                            return (
                              <Col xs={8} xl={8} sm={8} md={8} lg={8}>
                                {border}
                              </Col>
                            );
                          })}
                        </Row>
                      </div>
                    </div>
                  </Col>
                  <Col xs={8} xl={6} sm={4} md={4} lg={4}>
                    <div className='currencies-container'>
                      <div className='currencies-title'>Currency</div>
                      <div className='currency'>
                        {map(item.currencies, (currency) => {
                          return (
                            <Row className='row-col'>
                              <Col xs={6} xl={6} sm={8} md={8} lg={8}>
                                {currency.code}
                              </Col>
                              <Col xs={8} xl={12} sm={8} md={8} lg={8}>
                                {currency.name}
                              </Col>
                              <Col xs={6} xl={6} sm={8} md={8} lg={8}>
                                {currency.symbol}
                              </Col>
                            </Row>
                          );
                        })}
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row className='row-col'>
                  <Col xs={8} xl={6} sm={4} md={4} lg={4}>
                    <div className='languages-container'>
                      <div className='languages-title'>Languages</div>
                      <div className='languages'>
                        <Row className='row-col'>
                          {map(item.languages, (language) => {
                            return (
                              <>
                                <Col xs={6} xl={6} sm={6} md={6} lg={6}>
                                  {language.iso639_1}
                                </Col>
                                <Col xs={6} xl={6} sm={6} md={6} lg={6}>
                                  {language.iso639_2}
                                </Col>
                                <Col xs={6} xl={6} sm={6} md={6} lg={6}>
                                  {language.name}
                                </Col>
                                <Col xs={6} xl={6} sm={6} md={6} lg={6}>
                                  {language.nativeName}
                                </Col>
                              </>
                            );
                          })}
                        </Row>
                      </div>
                    </div>
                  </Col>
                  <Col xs={8} xl={6} sm={4} md={4} lg={4}>
                    <div className='translations-container'>
                      <div className='translations-title'>Translations</div>
                      <div className='translations'>
                        <Row className='row-col'>
                          <Col xs={24} xl={24} sm={24} md={24} lg={24}>
                            {map(Object.entries(item.translations), (key) => {
                              return (
                                <>
                                  <div>{key}</div>
                                </>
                              );
                            })}
                          </Col>
                          {/* <Col xs={12} xl={12} sm={12} md={12} lg={12}>
                            {map(Object.values(item.translations), (values) => {
                              return (
                                <>
                                  <div>{values}</div>
                                </>
                              );
                            })}
                          </Col> */}
                        </Row>
                      </div>
                    </div>
                  </Col>
                  <Col xs={8} xl={6} sm={4} md={4} lg={4}>
                    <div className='regional-blocks-container'>
                      <div className='regional-blocks-title'>
                        Regional blocks
                      </div>
                      <div className='regional-blocks'>
                        {map(item.regionalBlocs, (block) => {
                          return (
                            <Row className='row-col'>
                              <Row className='row-col'>{block.acronym}</Row>
                              <Row className='row-col'>{block.name}</Row>
                              <Row>{block.otherAcronyms}</Row>
                              {map(block.otherNames, (otherName) => {
                                return (
                                  <Row className='row-col'>{otherName}</Row>
                                );
                              })}
                            </Row>
                          );
                        })}
                      </div>
                    </div>
                  </Col>
                </Row>
              </>
            );
          })}
        </>
      )}

      {/* <Col xs={8} xl={8} sm={4} md={4} lg={4}>
  <div className='alt-spellings-container'>
    <div className='alt-spellings-title'>
      Alternate Spellings
    </div>
  </div>
    {map(item.altSpellings, (altSpelling) => {
      return (
        <div className='alt-spelling'>{altSpelling}</div>
      );
    })}
</Col> */}
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
