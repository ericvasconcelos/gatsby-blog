const axios = require('axios');
const path = require(`path`);

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;
  const CountryTemplate = path.resolve(`src/components/countryLayout.js`);

  const { data } = await axios.get('https://restcountries.eu/rest/v2/all');

  data.forEach((country) => {
    const path = country.name.toLowerCase().replace(/ /g, '-');

    createPage({
      path,
      component: CountryTemplate,
      context: {
        path,
        ...country,
      },
    })
  })
}