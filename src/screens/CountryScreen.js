import React, { Fragment, useEffect } from 'react';

import { Map, Marker, Popup, TileLayer, Tooltip } from 'react-leaflet';
import { Row, Col, Spin } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import Message from '../components/Message';
import { getCountry } from '../actions/countryActions';

import {alpha3ToFullName} from '../data/Alpha3';

import map from 'lodash.map';
const CountryScreen = ({ match }) => {
  const dispatch = useDispatch();

  const countryInfo = useSelector((state) => state.getCountry);

  const { country, loading, error } = countryInfo;

  const alpha3ToFullName = [
    {
      AFG: 'Afghanistan',
      ALB: 'Albania',
      DZA: 'Algeria',
      ASM: 'American Samoa',
      AND: 'Andorra',
      AGO: 'Angola',
      AIA: 'Anguilla',
      ATA: 'Antarctica',
      ATG: 'Antigua and Barbuda',
      ARG: 'Argentina',
      ARM: 'Armenia',
      ABW: 'Aruba',
      AUS: 'Australia',
      AUT: 'Austria',
      AZE: 'Azerbaijan',
      BHS: 'Bahamas',
      BHR: 'Bahrain',
      BGD: 'Bangladesh',
      BRB: 'Barbados',
      BLR: 'Belarus',
      BEL: 'Belgium',
      BLZ: 'Belize',
      BEN: 'Benin',
      BMU: 'Bermuda',
      BTN: 'Bhutan',
      BOL: 'Bolivia',
      BES: 'Bonaire, Sint Eustatius and Saba',
      BIH: 'Bosnia and Herzegovina',
      BWA: 'Botswana',
      BVT: 'Bouvet Island',
      BRA: 'Brazil',
      IOT: 'British Indian Ocean Territory',
      BRN: 'Brunei Darussalam	',
      BGR: 'Bulgaria',
      BFA: 'Burkina Faso',
      BDI: 'Burundi',
      CPV: 'Cabo Verde',
      KHM: 'Cambodia',
      CMR: 'Cameroon',
      CAN: 'Canada',
      CYM: 'Cayman Islands',
      CAF: 'Central African Republic ',
      TCD: 'Chad',
      CHL: 'Chile',
      CHN: 'China',
      CXR: 'Christmas Island',
      CCK: 'Cocos (Keeling) Islands',
      COL: 'Colombia',
      COM: 'Comoros',
      COD: 'Congo (the Democratic Republic of the)',
      COG: 'Congo',
      COK: 'Cook Islands',
      CRI: 'Costa Rica',
      HRV: 'Croatia',
      CUB: 'Cuba',
      CUW: 'Curaçao',
      CYP: 'Cyprus',
      CZE: 'Czechia',
      CIV: "Côte d'Ivoire",
      DNK: 'Denmark',
      DJI: 'Djibouti',
      DMA: 'Dominica',
      DOM: 'Dominican Republic',
      ECU: 'Ecuador',
      EGY: 'Egypt',
      SLV: 'El Salvador',
      GNQ: 'Equatorial Guinea',
      EST: 'Eritrea',
      EST: 'Estonia',
      SWZ: 'Eswatini',
      ETH: 'Ethiopia',
      FLK: 'Falkland Islands',
      FRO: 'Falkland Islands',
      FJI: 'Fiji',
      FIN: 'Finland',
      FRA: 'France',
      GUF: 'French Guiana',
      PYF: 'French Polynesia',
      ATF: 'French Southern Territories',
      GAB: 'Gabon',
      GMB: 'Gambia',
      GEO: 'Georgia',
      DEU: 'Germany',
      GHA: 'Ghana',
      GIB: 'Gibraltar',
      GRC: 'Greece',
      GRL: 'Greenland',
      GRD: 'Grenada',
      GLP: 'Guadeloupe',
      GUM: 'Guam',
      GTM: 'Guatemala',
      GGY: 'Guernsey',
      GIN: 'Guinea',
      GNB: 'Guinea-Bissau',
      GUY: 'Guyana',
      HTI: 'Haiti',
      HMD: 'Heard Island and McDonald Islands',
      VAT: 'Holy See',
      HND: 'Honduras',
      HKG: 'Hong Kong',
      HUN: 'Hungary',
      ISL: 'Iceland',
      IND: 'India',
      IDN: 'Indonesia',
      IRN: 'Iran',
      IRQ: 'Iraq',
      IRL: 'Ireland',
      IMN: 'Isle of Man',
      ISR: 'Israel',
      ITA: 'Italy',
      JAM: 'Jamaica',
      JPN: 'Japan',
      JEY: 'Jersey',
      JOR: 'Jordan',
      KAZ: 'Kazakhstan',
      KEN: 'Kenya',
      KIR: 'Kiribati',
      PRK: 'North Korea',
      KOR: 'South Korea',
      KWT: 'Kuwait',
      KGZ: 'Kyrgyzstan',
      LAO: "Lao People's Democratic Republic",
      LVA: 'Latvia',
      LBN: 'Lebanon',
      LSO: 'Lesotho',
      LBR: 'Liberia',
      LBY: 'Libya',
      LIE: 'Liechtenstein',
      LTU: 'Lithuania',
      LUX: 'Luxembourg',
      MAC: 'Macao',
      MDG: 'Madagascar',
      MWI: 'Malawi',
      MYS: 'Malaysia',
      MDV: 'Maldives',
      MLI: 'Mali',
      MLT: 'Malta',
      MHL: 'Marshall Islands',
      MTQ: 'Martinique',
      MRT: 'Mauritania',
      MUS: 'Mauritius',
      MYT: 'Mayotte',
      MEX: 'Mexico',
      FSM: 'Micronesia',
      MDA: 'Moldova',
      MCO: 'Monaco',
      MNG: 'Mongolia',
      MNE: 'Montenegro',
      MSR: 'Montserrat',
      MAR: 'Morocco',
      MOZ: 'Mozambique',
      MMR: 'Myanmar',
      NAM: 'Namibia',
      NRU: 'Nauru',
      NPL: 'Nepal',
      NLD: 'Netherlands',
      NCL: 'New Caledonia',
      NZL: 'New Zealand',
      NIC: 'Nicaragua',
      NER: 'Niger',
      NGA: 'Nigeria',
      NIU: 'Niue',
      NFK: 'Norfolk Island',
      MNP: 'Northern Mariana Islands',
      NOR: 'Norway',
      OMN: 'Oman',
      PAK: 'Pakistan',
      PLW: 'Palau',
      PSE: 'Palestine',
      PAN: 'Panama',
      PNG: 'Papua New Guinea',
      PRY: 'Paraguay',
      PER: 'Peru',
      PHL: 'Philippines',
      PCN: 'Pitcairn',
      POL: 'Poland',
      PRT: 'Portugal',
      PRI: 'Puerto Rico',
      QAT: 'Qatar',
      MKD: 'Republic of North Macedonia',
      ROU: 'Romania',
      RUS: 'Russian Federation',
      RWA: 'Rwanda',
      REU: 'Réunion',
      BLM: 'Saint Barthélemy',
      SHN: 'Saint Helena, Ascension and Tristan da Cunha',
      KNA: 'Saint Kitts and Nevis',
      LCA: 'Saint Lucia',
      MAF: 'Saint Martin (French part)',
      SPM: 'Saint Pierre and Miquelon',
      VCT: 'Saint Vincent and the Grenadines',
      WSM: 'Samoa',
      SMR: 'San Marino',
      STP: 'Sao Tome and Principe',
      SAU: 'Saudi Arabia',
      SEN: 'Senegal',
      SRB: 'Serbia',
      SYC: 'Seychelles',
      SLE: 'Sierra Leone',
      SGP: 'Singapore',
      SXM: 'Sint Maarten',
      SVK: 'Slovakia',
      SVN: 'Slovenia',
      SLB: 'Solomon Islands',
      SOM: 'Somalia',
      ZAF: 'South Africa',
      SGS: 'South Georgia and the South Sandwich Islands',
      SSD: 'South Sudan',
      ESP: 'Spain',
      LKA: 'Sri Lanka',
      SDN: 'Sudan',
      SUR: 'Suriname',
      SJM: 'Svalbard and Jan Mayen',
      SWE: 'Sweden',
      CHE: 'Switzerland',
      SYR: 'Syrian Arab Republic',
      TWN: 'Taiwan',
      TJK: 'Tajikistan',
      TZA: 'Tanzania',
      THA: 'Thailand',
      TLS: 'Timor-Leste',
      TGO: 'Togo',
      TKL: 'Tokelau',
      TON: 'Tonga',
      TTO: 'Trinidad and Tobago',
      TUN: 'Tunisia',
      TUR: 'Turkey',
      TKM: 'Turkmenistan',
      TCA: 'Turks and Caicos Islands',
      TUV: 'Tuvalu',
      UGA: 'Uganda',
      UKR: 'Ukraine',
      ARE: 'United Arab Emirates',
      GBR: 'United Kingdom of Great Britain and Northern Ireland',
      UMI: 'United States Minor Outlying Islands',
      USA: 'United States of America',
      URY: 'Uruguay',
      UZB: 'Uzbekistan',
      VUT: 'Vanuatu',
      VEN: 'Venezuela',
      VNM: 'Viet Nam',
      VGB: 'Virgin Islands',
      VIR: 'Virgin Islands',
      WLF: 'Wallis and Futuna',
      ESH: 'Western Sahara',
      YEM: 'Yemen	',
      ZMB: 'Zambia',
      ZWE: 'Zimbabwe',
      ALA: 'Åland Islands',
    },
  ];

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
                        <div className='title'>Alpha 2 code</div>
                        <div className='alpha-code'>
                          {item.alpha2Code === null ? '-' : item.alpha2Code}
                        </div>
                      </div>
                    </Col>
                    <Col xs={24} xl={8} sm={8} md={8} lg={8}>
                      <div className='alpha-code-container'>
                        <div className='title'>Alpha 3 code</div>
                        <div className='alpha-code'>
                          {item.alpha3Code === null ? '-' : item.alpha3Code}
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row className='additional-row'>
                    <Col xs={8} xl={8} sm={8} md={8} lg={8}>
                      <div className='calling-code-container'>
                        <div className='title'>Calling code</div>
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
                          <div className='alt-spelling' key={key}>
                            {altSpelling === null ? '-' : altSpelling}
                          </div>
                        );
                      })}
                    </div>
                  </Col>
                  <Col xs={24} xl={6} sm={24} md={24} lg={12}>
                    <div className='timezones-container'>
                      <div className='title'>Timezones</div>
                      <div className='timezones'>
                        <Row className='row-col'>
                          {item.timezones !== null
                            ? map(item.timezones, (timezone, key) => {
                                return (
                                  <Col
                                    key={key}
                                    xs={8}
                                    xl={8}
                                    sm={8}
                                    md={8}
                                    lg={8}>
                                    {timezone}
                                  </Col>
                                );
                              })
                            : '-'}
                        </Row>
                      </div>
                    </div>
                  </Col>
                  <Col xs={24} xl={6} sm={24} md={24} lg={12}>
                    <div className='borders-container'>
                      <div className='title'>Borders</div>
                      <div className='borders'>
                        <Row className='row-col'>
                          {item.borders === null || item.borders.length === 0
                            ? '-'
                            : map(item.borders, (border, key) => {
                                return (
                                  <Col
                                    className={key}
                                    xs={8}
                                    xl={8}
                                    sm={8}
                                    md={8}
                                    lg={8}>
                                    {border === null ? '-' : border}
                                  </Col>
                                );
                              })}
                        </Row>
                      </div>
                    </div>
                  </Col>
                  <Col xs={24} xl={6} sm={24} md={24} lg={12}>
                    <div className='currencies-container'>
                      <div className='title'>Currency</div>
                      <div className='currency'>
                        {item.currencies === null
                          ? '-'
                          : map(item.currencies, (currency, key) => {
                              return (
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
                              );
                            })}
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
                          {item.languages === null
                            ? '-'
                            : map(item.languages, (language, key) => {
                                return (
                                  <Fragment key={key}>
                                    <Col xs={4} xl={4} sm={4} md={4} lg={4}>
                                      {language.iso639_1}
                                    </Col>
                                    <Col xs={4} xl={4} sm={4} md={4} lg={4}>
                                      {language.iso639_2}
                                    </Col>
                                    <Col xs={8} xl={8} sm={8} md={8} lg={8}>
                                      {language.name}
                                    </Col>
                                    <Col xs={8} xl={8} sm={8} md={8} lg={8}>
                                      {language.nativeName}
                                    </Col>
                                  </Fragment>
                                );
                              })}
                        </Row>
                      </div>
                    </div>
                  </Col>
                  <Col xs={24} xl={8} sm={24} md={24} lg={12}>
                    <div className='translations-container'>
                      <div className='title'>Translations</div>
                      <div className='translations'>
                        <Row className='row-col'>
                          {item.translations === null
                            ? '-'
                            : map(
                                Object.entries(item.translations),
                                (i, key) => {
                                  return (
                                    <Col
                                      key={key}
                                      xs={12}
                                      xl={12}
                                      sm={12}
                                      md={12}
                                      lg={12}>
                                      <div>{i}</div>
                                    </Col>
                                  );
                                }
                              )}
                        </Row>
                      </div>
                    </div>
                  </Col>
                  <Col xs={24} xl={8} sm={24} md={24} lg={24}>
                    <div className='regional-blocks-container'>
                      <div className='title'>Regional blocks</div>
                      <div className='regional-blocks'>
                        {item.regionalBlocs === null ||
                        item.regionalBlocs.length === 0
                          ? '-'
                          : map(item.regionalBlocs, (block, key) => {
                              return (
                                <Row key={key} className='row-col'>
                                  <Row className='row-col'>{block.acronym}</Row>
                                  <Row className='row-col'>{block.name}</Row>
                                  <Row>{block.otherAcronyms}</Row>
                                  {map(block.otherNames, (otherName, key) => {
                                    return (
                                      <Row key={key} className='row-col'>
                                        {otherName}
                                      </Row>
                                    );
                                  })}
                                </Row>
                              );
                            })}
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
                          noWrap={true}
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
