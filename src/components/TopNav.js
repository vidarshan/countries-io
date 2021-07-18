import React from 'react';
import { Layout, Menu } from 'antd';
import { useHistory } from 'react-router-dom';

const { Header } = Layout;

const TopNav = () => {
  let history = useHistory();

  return (
    <Layout>
      <Header
        style={{
          position: 'fixed',
          zIndex: 1,
          width: '100%',
        }}>
        <div className='logo' />
        <Menu theme='dark' mode='vertical' defaultSelectedKeys={['2']}>
          <Menu.Item
            key='1'
            style={{ float: 'left' }}
            onClick={() => history.push('/')}>
            countries.io
          </Menu.Item>
          <Menu.Item
            key='2'
            style={{ float: 'left' }}
            onClick={() => history.push('/all')}>
            all countries
          </Menu.Item>
          <Menu.Item
            key='3'
            style={{ float: 'right' }}
            onClick={() => history.push('/about')}>
            about
          </Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
};

export default TopNav;
