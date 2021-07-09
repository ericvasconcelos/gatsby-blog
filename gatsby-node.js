const axios = require('axios');
const path = require(`path`);

// const { createFilePath } = require(`gatsby-source-filesystem`)

// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions;

//   if (node.internal.type === `Mdx`) {
//     const slug = createFilePath({ node, getNode, basePath: `pages` })

//     createNodeField({
//       node,
//       name: `slug`,
//       value: slug,
//     })
//   }
// }

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
        ...country,
      },
    })
  })
}