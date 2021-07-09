import React, { memo } from 'react';
import { divider } from './divider.module.css';

const Divider = () => {
  return (
    <hr className={divider} />
  )
}

export default memo(Divider);