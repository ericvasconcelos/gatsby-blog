import React, { memo } from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import Header from '../header';
import Footer from '../footer';
import { container, heading, info } from './country.module.scss';

const returnning = (val) => val;

const join = (val) => val.join(', ');

const quantity = (val, measure = '') => {
  const formatted = new Intl.NumberFormat('en-US').format(val);
  return `${formatted} ${measure}`;
};

const translation = (val) => (
  <ul>
    {Object.entries(val).map(([key, value]) => (
      <li key={key}>
        {key.toUpperCase()}: {value}
      </li>
    ))}
  </ul>
);

const languages = (val) => {
  return val.reduce((acc, curr) => {
    if (acc) {
      return `${acc}, ${curr.name} (${curr.nativeName})`;
    }

    return `${curr.name} (${curr.nativeName})`;
  }, '');
};

const currencies = (val) => {
  return val.reduce((acc, curr) => {
    if (acc) {
      return `${acc} | ${curr.name} (${curr.code} - ${curr.symbol})`;
    }

    return `${curr.name} (${curr.code} - ${curr.symbol})`;
  }, '');
};

const regionalBlocs = (val) => {
  return val.reduce((acc, curr) => {
    if (acc) {
      return `${acc}, ${curr.acronym} (${curr.name})`;
    }

    return `${curr.acronym} (${curr.name})`;
  }, '');
};

const order = [
  {
    key: 'capital',
    name: 'Capital',
    resolver: returnning,
  },
  {
    key: 'languages',
    name: 'Languages',
    resolver: languages,
  },
  {
    key: 'population',
    name: 'Population',
    resolver: quantity,
  },
  {
    key: 'gini',
    name: 'Gini',
    resolver: returnning,
  },
  {
    key: 'currencies',
    name: 'Currencies',
    resolver: currencies,
  },
  {
    key: 'region',
    name: 'Region',
    resolver: returnning,
  },
  {
    key: 'subregion',
    name: 'Subregion',
    resolver: returnning,
  },
  {
    key: 'area',
    name: 'Area',
    resolver: (val) => quantity(val, 'm²'),
  },
  {
    key: 'latlng',
    name: 'Latitude and longitude',
    resolver: join,
  },
  {
    key: 'borders',
    name: 'Borders',
    resolver: join,
  },
  {
    key: 'regionalBlocs',
    name: 'Regional blocs',
    resolver: regionalBlocs,
  },
  {
    key: 'timezones',
    name: 'Timezones',
    resolver: join,
  },
  {
    key: 'numericCode',
    name: 'Numeric code',
    resolver: returnning,
  },
  {
    key: 'translations',
    name: 'Translations of name',
    resolver: translation,
  },
  {
    key: 'callingCodes',
    name: 'Calling codes',
    resolver: join,
  },
  {
    key: 'topLevelDomain',
    name: 'Top level domain',
    resolver: join,
  },
  {
    key: 'cioc',
    name: 'CIOC',
    resolver: returnning,
  },
  {
    key: 'alpha2Code',
    name: 'Alpha 2 code',
    resolver: returnning,
  },
  {
    key: 'alpha3Code',
    name: 'Alpha 3 code',
    resolver: returnning,
  },
  {
    key: 'altSpellings',
    name: 'Alternative spellings',
    resolver: join,
  },
  {
    key: 'demonym',
    name: 'Demonym',
    resolver: returnning,
  },
];

const CountryLayout = ({ pageContext }) => {
  const { name, nativeName, flag, url, altSpellings } = pageContext;

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          siteUrl
        }
      }
    }
  `);

  return (
    <>
      <Helmet htmlAttributes={{ lang: 'en' }}>
        <meta charSet="utf-8" />
        <title>
          {name} | {data.site.siteMetadata.title}
        </title>
        <meta name="description" content={altSpellings.join(', ')} />
        <link rel="canonical" href={data.site.siteMetadata.siteUrl + url} />
      </Helmet>

      <Header />

      <div className={container}>
        <img src={flag} alt={name} />

        <h1 className={heading}>
          {name} - {nativeName}
        </h1>

        {order.map(({ key, name, resolver }) => (
          <div className={info} key={key}>
            <b>{name}: </b>
            {resolver(pageContext[key])}
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default memo(CountryLayout);
