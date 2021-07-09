import React, { memo } from 'react'
import Layout from '../components/layout';
import { graphql, Link } from 'gatsby';

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <p>My cool posts will go in here</p>
      <ul>
        {data.allFile.nodes.map(node => (
          <li key={node.name}>
            <Link to={`/blog/${node.name}`}>
              {node.name}
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`;

export default memo(BlogPage);
