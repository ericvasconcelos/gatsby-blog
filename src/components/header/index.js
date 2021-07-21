import React, { memo, useState, useCallback } from 'react';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';
import { useFlexSearch } from 'react-use-flexsearch';
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
  searchBox,
  searchCountry,
  searchCountryFlag,
  searchCountryTitle,
} from './header.module.scss';

const Header = () => {
  const data = useStaticQuery(graphql`
    query LocalSearchQuery {
      localSearchPages {
        index
        store
      }
    }
  `);

  const {
    localSearchPages: { index, store },
  } = data;

  console.log(data);

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const results = useFlexSearch(searchValue, index, store).slice(0, 8);

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
        {results.length > 0 && (
          <div className={searchBox}>
            {results.map(({ name, nativeName, url, flag }) => (
              <Link to={url} key={url} className={searchCountry}>
                <img
                  src={flag}
                  className={searchCountryFlag}
                  width="60"
                  height="60"
                  alt={name}
                />
                <p className={searchCountryTitle}>
                  {name} - {nativeName}
                </p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default memo(Header);
