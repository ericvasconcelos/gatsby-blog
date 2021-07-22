const path = require('path');
const slugify = require('./src/utils/slugify');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '~': path.resolve(__dirname, 'src'),
        path: require.resolve('path-browserify'),
      },
      fallback: {
        fs: false,
      },
    },
  });
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const CountryTemplate = path.resolve('src/components/country/index.js');

  const result = await graphql(`
    {
      allCountries {
        nodes {
          name
        }
      }
    }
  `);

  return Promise.all(
    result.data.allCountries.nodes.map(async (node) => {
      const path = slugify(node.name);

      await createPage({
        path,
        component: CountryTemplate,
        context: {
          name: node.name,
        },
      });
    }),
  );
};
