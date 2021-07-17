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

                {/* lat,lng */}
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
