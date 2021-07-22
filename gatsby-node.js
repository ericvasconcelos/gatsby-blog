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

// exports.createPages = async ({ actions }) => {
//   const { createPage } = actions;
//   const CountryTemplate = path.resolve('src/components/country/index.js');

//   const { data } = await axios.get('https://restcountries.eu/rest/v2/all');

//   data.forEach((country) => {
//     const path = country.name.toLowerCase().replace(/ /g, '-');

//     createPage({
//       path,
//       component: CountryTemplate,
//       context: {
//         url: path,
//         ...country,
//       },
//     });
//   });
// };

// exports.sourceNodes = ({ actions }) => {
//   actions.createTypes(`
//     type Languages {
//       iso639_1: String
//       iso639_2: String
//       name: String
//       nativeName: String
//     }

//     type Currencies {
//       code: String
//       name: String
//       symbol: String
//     }

//     type RegioBlocs {
//       acronym: String
//       name: String
//       otherAcronyms: [String]
//       otherNames: [String]
//     }

//     type Translations {
//       br: String
//       de: String
//       es: String
//       fa: String
//       fr: String
//       hr: String
//       it: String
//       ja: String
//       nl: String
//       pt: String
//     }

//     type SitePageContext {
//       name: String
//       nativeName: String
//       flag: String
//       url: String
//       capital: String
//       population: Int
//       gini: Float
//       region: String
//       subregion: String
//       area: Int
//       latlng: [Int]
//       borders: [String]
//       timezones: [String]
//       numericCode: Int
//       callingCodes: [String]
//       topLevelDomain: [String]
//       cioc: String
//       alpha2Code: String
//       alpha3Code: String
//       demonym: String
//       languages: [Languages]
//       currencies: Currencies
//       regionalBlocs: RegioBlocs
//       translations: Translations
//       altSpellings: [String]
//     }

//     type SitePage implements Node @dontInfer {
//       path: String
//       context: SitePageContext
//     }
//   `);
// };
