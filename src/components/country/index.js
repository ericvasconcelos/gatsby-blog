import React, { memo } from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import slugify from '~/utils/slugify';
import Header from '../header';
import Footer from '../footer';
import order from './order';
import { container, heading, info, flagImg } from './country.module.scss';

const CountryLayout = ({ data }) => {
  const country = data.allCountries.edges[0].node;
  const { siteMetadata } = data.site;
  const { name, nativeName, flag, altSpellings } = country;

  return (
    <>
      <Helmet htmlAttributes={{ lang: 'en' }}>
        <meta charSet="utf-8" />
        <title>
          {name} | {siteMetadata.title}
        </title>
        <meta name="description" content={altSpellings.join(', ')} />
        <link
          rel="canonical"
          href={siteMetadata.siteUrl + '/' + slugify(name)}
        />
      </Helmet>

      <Header />

      <div className={container}>
        <img src={flag} alt={name} className={flagImg} />

        <h1 className={heading}>
          {name} - {nativeName}
        </h1>

        {order.map(({ key, name, resolver }) => (
          <div className={info} key={key}>
            <b>{name}: </b>
            {resolver(country[key])}
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
};

export const query = graphql`
  query ($name: String!) {
    allCountries(filter: { name: { eq: $name } }) {
      edges {
        node {
          id
          alpha2Code
          alpha3Code
          altSpellings
          area
          borders
          callingCodes
          capital
          cioc
          currencies {
            code
            name
            symbol
          }
          demonym
          flag
          gini
          languages {
            iso639_1
            iso639_2
            name
            nativeName
          }
          latlng
          name
          nativeName
          numericCode
          population
          region
          regionalBlocs {
            acronym
            name
            otherAcronyms
            otherNames
          }
          subregion
          timezones
          topLevelDomain
          translations {
            br
            de
            es
            fa
            fr
            hr
            id
            it
            ja
            nl
            pt
          }
        }
      }
    }
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
  }
`;

export default memo(CountryLayout);
