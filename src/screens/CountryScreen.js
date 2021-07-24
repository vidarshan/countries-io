import React, { Fragment, useEffect } from 'react';

import { Map, Marker, Popup, TileLayer, Tooltip } from 'react-leaflet';
import { Row, Col, Spin } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import Message from '../components/Message';
import { getCountry } from '../actions/countryActions';

import { alpha3ToFullName } from '../data/Alpha3';
import { translationAbbreviations } from '../data/Translations';

import map from 'lodash.map';
import find from 'lodash.find';
const CountryScreen = ({ match }) => {
  const dispatch = useDispatch();

  const countryInfo = useSelector((state) => state.getCountry);

  const { country, loading, error } = countryInfo;

  const convertAlpha3ToFullName = (alpha3Name) => {
    let fullName = find(alpha3ToFullName, { alpha3: alpha3Name });
    if (fullName) {
      return <div className='border-fullname'>{fullName.fullName}</div>;
    } else {
      return <div>{alpha3Name}</div>;
    }
  };

  const convertTranslationAbbreviationstoFullName = (
    translationAbbreviation,
    translation
  ) => {
    console.log(translationAbbreviation);

    let fullName = find(translationAbbreviations, {
      abbreviation: translationAbbreviation,
    });

    console.log(fullName.fullName);

    if (fullName) {
      return (
        <Col className='translation-col'>
          <Row className='translation-fullname'>{fullName.fullName}</Row>
          <Row className='translation-translation'>{translation}</Row>
        </Col>
      );
    } else {
      return (
        <Col>
          <Row>{translationAbbreviation}</Row>
          <Row>{translation}</Row>
        </Col>
      );
    }
  };

  useEffect(() => {
    dispatch(getCountry(match.params.name));
    // eslint-disable-next-line
  }, [match, dispatch]);

  return (
    <Row className='margin-extra'>
      {loading ? (
        <Spin size='large'></Spin>
      ) : error ? (
        <div className='search-error-container'>
          <Message message={error} type='error'></Message>
        </div>
      ) : (
        <>
          {map(country, (item, key) => {
            return (
              <Fragment key={key}>
                <Row className='row-col'>
                  <div className='country-title'>{item.name}</div>
                </Row>
                <Row className='row-col'>
                  <div className='image-container'>
                    <img
                      className='country-flag'
                      src={item.flag}
                      alt={`Flag of ${item.name}`}
                    />

                    <div className='flag-caption'>Flag of {item.name}</div>
                  </div>
                </Row>
                <Row className='row-col'>
                  <Row className='basic-info-title'>Basic Information</Row>
                  <Row className='additional-row'>
                    <Col xs={12} xl={8} sm={8} md={8} lg={8}>
                      <div className='top-level-domain-container'>
                        <div className='title'>Top Level Domain</div>
                        <div className='top-level-domain'>
                          {map(item.topLevelDomain, (domain, key) => {
                            return (
                              <div key={key}>
                                {domain === null ? '-' : domain}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </Col>
                    <Col xs={12} xl={8} sm={8} md={8} lg={8}>
                      <div className='alpha-code-container'>
                        <div className='title'>Alpha 2 Code</div>
                        <div className='alpha-code'>
                          {item.alpha2Code === null ? '-' : item.alpha2Code}
                        </div>
                      </div>
                    </Col>
                    <Col xs={24} xl={8} sm={8} md={8} lg={8}>
                      <div className='alpha-code-container'>
                        <div className='title'>Alpha 3 Code</div>
                        <div className='alpha-code'>
                          {item.alpha3Code === null ? '-' : item.alpha3Code}
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row className='additional-row'>
                    <Col xs={8} xl={8} sm={8} md={8} lg={8}>
                      <div className='calling-code-container'>
                        <div className='title'>Calling Code</div>
                        <div className='calling-code'>
                          {map(item.callingCodes, (callingCode, key) => {
                            return (
                              <div key={key}>
                                {callingCode === '' ? '-' : +callingCode}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </Col>
                    <Col xs={8} xl={8} sm={8} md={8} lg={8}>
                      <div className='capital-container'>
                        <div className='title'>Capital</div>
                        <div className='capital'>
                          {item.capital === null || item.capital === ''
                            ? '-'
                            : item.capital}
                        </div>
                      </div>
                    </Col>
                    <Col xs={8} xl={8} sm={8} md={8} lg={8}>
                      <div className='region-container'>
                        <div className='title'>Region</div>
                        <div className='region'>
                          {item.region === null ? '-' : item.region}
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row className='additional-row'>
                    <Col xs={12} xl={8} sm={8} md={8} lg={8}>
                      <div className='sub-region-container'>
                        <div className='title'>Sub-region</div>
                        <div className='sub-region'>
                          {item.subregion === null ? '-' : item.subregion}
                        </div>
                      </div>
                    </Col>
                    <Col xs={12} xl={8} sm={8} md={8} lg={8}>
                      <div className='population-container'>
                        <div className='title'>Population</div>
                        <div className='population'>
                          {item.population === null
                            ? '-'
                            : new Intl.NumberFormat().format(item.population)}
                        </div>
                      </div>
                    </Col>
                    <Col xs={24} xl={8} sm={8} md={8} lg={8}>
                      <div className='demonym-container'>
                        <div className='title'>Demonym</div>
                        <div className='demonym'>
                          {item.demonym === null ? '-' : item.demonym}
                        </div>
                      </div>
                    </Col>
                  </Row>

                  <Row className='additional-row'>
                    <Col xs={12} xl={8} sm={8} md={8} lg={8}>
                      <div className='area-container'>
                        <div className='title'>Area</div>
                        {item.area === null
                          ? '-'
                          : new Intl.NumberFormat().format(item.area)}
                      </div>
                    </Col>
                    <Col xs={12} xl={8} sm={8} md={8} lg={8}>
                      <div className='gini-container'>
                        <div className='title'>Gini</div>
                        <div className='gini'>
                          {item.gini === null ? '-' : item.gini}
                        </div>
                      </div>
                    </Col>
                    <Col xs={24} xl={8} sm={8} md={8} lg={8}>
                      <div className='numeric-code-container'>
                        <div className='title'>Numeric Code</div>
                        <div className='numeric_code'>
                          {item.numericCode === null ? '-' : item.numericCode}
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Row>
                <Row className='more-info-title'>More Information</Row>
                <Row className='row-col'>
                  <Col xs={24} xl={6} sm={24} md={24} lg={12}>
                    <div className='alt-spellings-container'>
                      <div className='title'>Alternate Spellings</div>
                      {map(item.altSpellings, (altSpelling, key) => {
                        return (
                          <Row className='row-col'>
                            <Col
                              className='alt-spelling-col'
                              xs={24}
                              xl={24}
                              sm={24}
                              md={24}
                              lg={24}>
                              <div className='alt-spelling' key={key}>
                                {altSpelling === null ? '-' : altSpelling}
                              </div>
                            </Col>
                          </Row>
                        );
                      })}
                    </div>
                  </Col>
                  <Col xs={24} xl={6} sm={24} md={24} lg={12}>
                    {' '}
                    <div className='timezones-container'>
                      <div className='title'>Timezones</div>
                      <Row className='row-col'>
                        {item.timezones !== null
                          ? map(item.timezones, (timezone, key) => {
                              return (
                                <Col
                                  className='timezones-col'
                                  key={key}
                                  xs={11}
                                  xl={11}
                                  sm={11}
                                  md={11}
                                  lg={11}>
                                  {timezone}
                                </Col>
                              );
                            })
                          : '-'}
                      </Row>
                    </div>
                  </Col>
                  <Col xs={24} xl={6} sm={24} md={24} lg={12}>
                    <div className='borders-container'>
                      <div className='title'>Borders</div>
                      <Row className='borders-row'>
                        {item.borders === null || item.borders.length === 0
                          ? '-'
                          : map(item.borders, (border, key) => {
                              return (
                                <Col
                                  key={key}
                                  className='border-col'
                                  xs={11}
                                  xl={11}
                                  sm={11}
                                  md={11}
                                  lg={11}>
                                  {convertAlpha3ToFullName(border)}
                                </Col>
                              );
                            })}
                      </Row>
                    </div>
                  </Col>
                  <Col xs={24} xl={6} sm={24} md={24} lg={12}>
                    <div className='currencies-container'>
                      <div className='title'>Currency</div>{' '}
                      <div className='currency'>
                        {item.currencies === null ? (
                          '-'
                        ) : (
                          <Row className='currency-col'>
                            <Row key={key} className='row-col '>
                              <Col
                                className='translation-fullname'
                                xs={6}
                                xl={6}
                                sm={8}
                                md={8}
                                lg={8}>
                                Code
                              </Col>

                              <Col
                                className='translation-fullname'
                                xs={8}
                                xl={12}
                                sm={8}
                                md={8}
                                lg={8}>
                                Name
                              </Col>

                              <Col
                                className='translation-fullname'
                                xs={6}
                                xl={6}
                                sm={8}
                                md={8}
                                lg={8}>
                                Symbol
                              </Col>
                            </Row>
                            {map(item.currencies, (currency, key) => {
                              return (
                                <>
                                  <Row key={key} className='row-col'>
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
                                </>
                              );
                            })}
                          </Row>
                        )}
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row className='row-col'>
                  <Col xs={24} xl={8} sm={24} md={24} lg={12}>
                    <div className='languages-container'>
                      <div className='title'>Languages</div>
                      <div className='languages'>
                        <Row className='row-col'>
                          {item.languages === null ? (
                            '-'
                          ) : (
                            <>
                              <Row key={key} className='row-col'>
                                <Col
                                  className='translation-fullname'
                                  xs={4}
                                  xl={4}
                                  sm={4}
                                  md={4}
                                  lg={4}>
                                  ISO 639-1
                                </Col>
                                <Col
                                  className='translation-fullname'
                                  xs={4}
                                  xl={4}
                                  sm={4}
                                  md={4}
                                  lg={4}>
                                  ISO 639-2
                                </Col>
                                <Col
                                  className='translation-fullname'
                                  xs={8}
                                  xl={8}
                                  sm={8}
                                  md={8}
                                  lg={8}>
                                  Name
                                </Col>
                                <Col
                                  className='translation-fullname'
                                  xs={8}
                                  xl={8}
                                  sm={8}
                                  md={8}
                                  lg={8}>
                                  Native Name
                                </Col>
                              </Row>
                              {map(item.languages, (language, key) => {
                                return (
                                  <Row key={key} className='row-col'>
                                    <Col
                                      className='languages-col'
                                      xs={4}
                                      xl={4}
                                      sm={4}
                                      md={4}
                                      lg={4}>
                                      {language.iso639_1}
                                    </Col>
                                    <Col
                                      className='languages-col'
                                      xs={4}
                                      xl={4}
                                      sm={4}
                                      md={4}
                                      lg={4}>
                                      {language.iso639_2}
                                    </Col>
                                    <Col
                                      className='languages-col'
                                      xs={8}
                                      xl={8}
                                      sm={8}
                                      md={8}
                                      lg={8}>
                                      {language.name}
                                    </Col>
                                    <Col
                                      className='languages-col'
                                      xs={8}
                                      xl={8}
                                      sm={8}
                                      md={8}
                                      lg={8}>
                                      {language.nativeName}
                                    </Col>
                                  </Row>
                                );
                              })}
                            </>
                          )}
                        </Row>
                      </div>
                    </div>
                  </Col>
                  <Col xs={24} xl={8} sm={24} md={24} lg={12}>
                    <div className='translations-container'>
                      <div className='title'>Translations</div>
                      <Row className='row-col'>
                        {item.translations === null
                          ? '-'
                          : map(Object.entries(item.translations), (i, key) => {
                              return (
                                <Col
                                  key={key}
                                  xs={24}
                                  xl={12}
                                  sm={12}
                                  md={12}
                                  lg={12}>
                                  {convertTranslationAbbreviationstoFullName(
                                    i[0],
                                    i[1]
                                  )}
                                </Col>
                              );
                            })}
                      </Row>
                    </div>
                  </Col>
                  <Col xs={24} xl={8} sm={24} md={24} lg={24}>
                    <div className='regional-blocks-container'>
                      <div className='title'>Regional Blocs</div>
                      <div className='regional-blocks'>
                        {item.regionalBlocs === null ||
                        item.regionalBlocs.length === 0 ? (
                          '-'
                        ) : (
                          <>
                            {map(item.regionalBlocs, (block, key) => {
                              return (
                                <Row key={key} className='regional-bloc-col'>
                                  <Col xs={4} xl={4} sm={4} md={4} lg={4}>
                                    {block.acronym}
                                  </Col>
                                  <Col xs={20} xl={20} sm={20} md={20} lg={20}>
                                    {block.name}
                                  </Col>
                                </Row>
                              );
                            })}
                          </>
                        )}
                      </div>
                    </div>
                  </Col>
                </Row>

                {item.latlng.length === 2 ? (
                  <>
                    <Row className='basic-info-title'>
                      Geographical Location
                    </Row>
                    <Row className='row-col'>
                      <Map
                        className='map'
                        center={[
                          item.latlng[0] ? item.latlng[0] : 0,
                          item.latlng[1] ? item.latlng[1] : 0,
                        ]}
                        zoom={3}
                        style={{ height: 500, width: '100%' }}>
                        <TileLayer
                          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                          noWrap={false}
                          minZoom={2}
                          maxZoom={7}
                        />

                        <Marker
                          key={item.name}
                          riseOnHover={true}
                          position={[
                            item.latlng ? item.latlng[0] : 0,
                            item.latlng ? item.latlng[1] : 0,
                          ]}>
                          <Tooltip className='map-tooltip' permanent>
                            Click to see more details
                          </Tooltip>
                          <Popup
                            maxWidth='max-content'
                            position={[item.latlng[0], item.latlng[1]]}>
                            <div className='pop-up'>
                              <div className='pop-up-title'>{item.name}</div>
                              <div className='pop-up-population-title'>
                                Population
                              </div>
                              <div className='pop-up-population'>
                                {new Intl.NumberFormat().format(
                                  item.population
                                )}
                              </div>
                              <div className='pop-up-area-title'>Area</div>

                              <div className='pop-up-area'>
                                {new Intl.NumberFormat().format(item.area)}
                              </div>
                            </div>
                          </Popup>
                        </Marker>
                      </Map>
                    </Row>
                  </>
                ) : (
                  <></>
                )}
              </Fragment>
            );
          })}
        </>
      )}
    </Row>
  );
};

export default CountryScreen;
