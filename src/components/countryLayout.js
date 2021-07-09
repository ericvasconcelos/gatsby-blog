import React, { memo } from 'react';
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from 'gatsby';
import {
  container,
  heading,
} from './layout.module.css';

// {
//   pageContext: {
//     topLevelDomain: [ '.br' ],
//     alpha2Code: 'BR',
//     alpha3Code: 'BRA',
//     callingCodes: [ '55' ],
//     altSpellings: [
//       'BR',
//       'Brasil',
//       'Federative Republic of Brazil',
//       'República Federativa do Brasil'
//     ],
//     latlng: [ -10, -55 ],
//     demonym: 'Brazilian',
//     area: 8515767,
//     gini: 54.7,
//     timezones: [ 'UTC-05:00', 'UTC-04:00', 'UTC-03:00', 'UTC-02:00' ],
//     borders: [
//       'ARG', 'BOL', 'COL',
//       'GUF', 'GUY', 'PRY',
//       'PER', 'SUR', 'URY',
//       'VEN'
//     ],
//     numericCode: '076',
//     currencies: [ [Object] ],
//     languages: [ [Object] ],
//     translations: {
//       de: 'Brasilien',
//       es: 'Brasil',
//       fr: 'Brésil',
//       ja: 'ブラジル',
//       it: 'Brasile',
//       br: 'Brasil',
//       pt: 'Brasil',
//       nl: 'Brazilië',
//       hr: 'Brazil',
//       fa: 'برزیل'
//     },
//     regionalBlocs: [ [Object] ],
//     cioc: 'BRA'
//   },

const CountryLayout = ({ pageContext }) => {
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

  const {
    name,
    nativeName,
    flag,
    region,
    subregion,
    population,
    capital,
  } = pageContext;

  return (
    <main className={container}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{name} | {data.site.siteMetadata.title}</title>
        <link rel="canonical" href={data.site.siteMetadata.siteUrl} />
      </Helmet>

      <h1 className={heading}>{name} - {nativeName}</h1>
      <img src={flag} alt={name} />
      <p><b>Region: </b>{region}</p>
      <p><b>Subregion: </b>{subregion}</p>
      <p><b>Population: </b>{new Intl.NumberFormat('en-US').format(population)}</p>
      <p><b>Capital: </b>{capital}</p>
    </main>
  )
}
export default memo(CountryLayout);