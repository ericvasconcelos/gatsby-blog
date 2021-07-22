import React, { memo } from 'react';
import { graphql } from 'gatsby';
import slugify from '~/utils/slugify';
import Card from '~/components/card';
import Hero from '~/components/hero';
import Layout from '~/components/layout';
import { cardList } from './index.module.scss';

const IndexPage = ({ data }) => {
  const countries = data.allCountries.nodes;

  return (
    <Layout pageTitle="Home">
      <Hero />
      <div className={cardList}>
        {countries.map((country) => {
          const { id, name } = country;
          return (
            name && <Card key={id} slug={slugify(name)} content={country} />
          );
        })}
      </div>
    </Layout>
  );
};

export const query = graphql`
  {
    allCountries(skip: 30, limit: 10) {
      nodes {
        id
        name
        nativeName
        region
        flag
        capital
      }
    }
  }
`;

export default memo(IndexPage);
