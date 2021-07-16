import React from 'react';
import { Card, Avatar } from 'antd';
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';

const { Meta } = Card;

const CountryCard = ({ country }) => {
  return (
    <Card
      style={{ width: 300 }}
      cover={<img alt='example' src={country.flag} />}
      actions={[
        <SettingOutlined key='setting' />,
        <EditOutlined key='edit' />,
        <EllipsisOutlined key='ellipsis' />,
      ]}>
      <Meta title={country.name} description='This is the description' />
    </Card>
  );
};

export default CountryCard;
