import React, { memo, useState, useCallback } from 'react';
import { Link } from 'gatsby';
import Logo from './logo';
import SearchIcon from './search';
import {
  header,
  container,
  innerHeader,
  logo,
  search,
  searchButton,
  searchInput,
  searchInputOpen,
} from './header.module.scss';

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const handleOpenSearch = useCallback(
    () => setIsSearchOpen((oldState) => !oldState),
    [],
  );

  return (
    <header className={header}>
      <div className={container}>
        <div className={innerHeader}>
          <Link to="/" className={logo}>
            <Logo />
            Countrypedia
          </Link>

          <div
            className={search}
            aria-hidden={false}
            aria-describedby="searchResults"
            aria-labelledby="searchResults"
          >
            <button
              className={searchButton}
              aria-label="Search"
              onClick={handleOpenSearch}
            >
              <SearchIcon />
            </button>
            <input
              className={`${searchInput} ${
                isSearchOpen ? searchInputOpen : {}
              }`}
              role="combobox"
              aria-controls="searchResults"
              aria-expanded="false"
              aria-hidden="false"
              aria-label="search"
              tabIndex="0"
              placeholder="Search country"
              onChange={(e) => setSearchValue(e.currentTarget.value)}
              value={searchValue}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default memo(Header);
