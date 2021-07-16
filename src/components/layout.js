import React, { memo } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import Header from './header';
import { heading } from './layout.module.scss';

const Layout = ({ pageTitle, children }) => {
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
      <Helmet
        htmlAttributes={{
          lang: 'en',
        }}
      >
        <meta charSet="utf-8" />
        <title>
          {pageTitle} | {data.site.siteMetadata.title}
        </title>
        <link rel="canonical" href={data.site.siteMetadata.siteUrl} />
      </Helmet>

      <Header />

      {pageTitle && pageTitle !== 'Home' && <h1 className={heading}>{pageTitle}</h1>}

      {children}
    </>
  );
};
export default memo(Layout);
