import React from 'react';
import { Alert, Button } from 'antd';

const Message = ({ type, message, buttonType, buttonSize }) => {
  return (
    <Alert
      message={message}
      type={type}
      showIcon
      action={<Button size={buttonSize} type={buttonType}></Button>}
      closable
    />
  );
};

Message.propType = {
  message: 'An error occured',
  type: 'error',
  buttonSize: 'small',
  buttonType: 'text',
};

export default Message;
