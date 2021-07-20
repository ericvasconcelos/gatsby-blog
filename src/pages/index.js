import React, { memo } from 'react';
import { graphql } from 'gatsby';
import Card from '~/components/card';
import Hero from '~/components/hero';
import Layout from '~/components/layout';
import { cardList } from './index.module.scss';

const IndexPage = ({ data }) => {
  const countries = data.allSitePage.nodes;

  return (
    <Layout pageTitle="Home">
      <Hero />
      <div className={cardList}>
        {countries.map(({ path, context }) => {
          return (
            context.name && <Card key={path} slug={path} content={context} />
          );
        })}
      </div>
    </Layout>
  );
};

export const query = graphql`
  {
    allSitePage(skip: 30, limit: 10) {
      nodes {
        id
        path
        context {
          name
          nativeName
          region
          flag
          capital
        }
      }
    }
  }
`;

export default memo(IndexPage);
