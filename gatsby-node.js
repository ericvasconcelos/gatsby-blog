const axios = require('axios');
const path = require('path');

exports.onCreateWebpackConfig = ({ actions, plugins, stage }) => {
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

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;
  const CountryTemplate = path.resolve('src/components/country/index.js');

  const { data } = await axios.get('https://restcountries.eu/rest/v2/all');

  data.forEach((country) => {
    const path = country.name.toLowerCase().replace(/ /g, '-');

    createPage({
      path,
      component: CountryTemplate,
      context: {
        url: path,
        ...country,
      },
    });
  });
};
