import React from 'react';
import { Row, Col, Divider } from 'antd';
import CountryCard from '../components/CountryCard';

const style = { background: '#0092ff', padding: '8px 0' };

const AllScreen = () => {
  return (
    <>
      <Row className='margin-extra' gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className='gutter-row' span={6}>
          <CountryCard></CountryCard>
        </Col>
        <Col className='gutter-row' span={6}>
          <CountryCard></CountryCard>
        </Col>
        <Col className='gutter-row' span={6}>
          <CountryCard></CountryCard>
        </Col>
        <Col className='gutter-row' span={6}>
          <CountryCard></CountryCard>
        </Col>
      </Row>
    </>
  );
};

export default AllScreen;
