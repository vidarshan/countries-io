import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

const BottomFooter = () => {
  return (
    <Footer style={{ textAlign: 'center' }}>
      &copy; 2021 Made with ❤️ by vidarshan.r{' '}
      <img
        height={30}
        width={30}
        className='github-logo'
        src='/images/github.png'
        alt=''
        onClick={() =>
          window.location.replace('https://github.com/vidarshanadithya')
        }
      />
    </Footer>
  );
};

export default BottomFooter;
