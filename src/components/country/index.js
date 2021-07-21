import React, { memo } from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import Header from '../header';
import Footer from '../footer';
import order from './order';
import { container, heading, info, flagImg } from './country.module.scss';

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
        <img src={flag} alt={name} className={flagImg} />

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
