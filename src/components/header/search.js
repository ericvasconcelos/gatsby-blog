import React, { memo } from 'react';

import { searchIcon } from './header.module.scss';

const Search = () => (
  <svg width="28" height="28" viewBox="0 0 25 25" className={searchIcon}>
    <path d="M20.07 18.93l-4.16-4.15a6 6 0 1 0-.88.88l4.15 4.16a.62.62 0 1 0 .89-.89zM6.5 11a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0z"></path>
  </svg>
);

export default memo(Search);
