import React, { memo } from 'react';
import { message } from './message.module.css';

const Message = ({ children }) => {
  return (
    <div className={message}>
      {children}
    </div>
  )
}
export default memo(Message)