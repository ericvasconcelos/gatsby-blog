require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: process.env.HOST_URL,
    title: 'Countrypedia',
  },
  flags: {
    DEV_SSR: true,
    FAST_DEV: true,
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
    LMDB_STORE: true,
  },
  plugins: [
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 75,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        implementation: require('sass'),
        additionalData: `@import "src/styles/variables.scss";`,
      },
    },
    {
      resolve: '@slixites/gatsby-plugin-google-fonts',
      options: {
        fonts: [`Vollkorn\:700`, `Roboto\:200,400,600`],
        display: 'swap',
        preconnect: true,
        attributes: {
          rel: 'stylesheet preload prefetch',
          as: 'style',
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-custom-api',
      options: {
        url: 'https://restcountries.eu/rest/v2/all',
        imageKeys: ['flag'],
        rootKey: 'countries',
        // schemas: {
        //   Languages: `
        //     iso639_1: String
        //     iso639_2: String
        //     name: String
        //     nativeName: String
        //   `,
        //   Currencies: `
        //     code: String
        //     name: String
        //     symbol: String
        //   `,
        //   RegionBlocs: `
        //     acronym: String
        //     name: String
        //     otherAcronyms: [String]
        //     otherNames: [String]
        //   `,
        //   Translations: `
        //     br: String
        //     de: String
        //     es: String
        //     fa: String
        //     fr: String
        //     hr: String
        //     it: String
        //     ja: String
        //     nl: String
        //     pt: String
        //   `,
        //   countries: `
        //     name: String
        //     nativeName: String
        //     flag: String
        //     url: String
        //     capital: String
        //     population: Int
        //     gini: Float
        //     region: String
        //     subregion: String
        //     area: Int
        //     latlng: [Int]
        //     borders: [String]
        //     timezones: [String]
        //     numericCode: Int
        //     callingCodes: [String]
        //     topLevelDomain: [String]
        //     cioc: String
        //     alpha2Code: String
        //     alpha3Code: String
        //     demonym: String
        //     languages: [Languages]
        //     currencies: Currencies
        //     regionalBlocs: RegionBlocs
        //     translations: Translations
        //     altSpellings: [String]
        //   `,
        // },
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-40075822-3',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Countrypedia',
        short_name: 'Countrypedia',
        start_url: '/',
        background_color: '#f5f5f5',
        theme_color: '#6a1b9a',
        display: 'standalone',
        icon: 'src/images/icon.png',
        icon_options: {
          purpose: 'any maskable',
        },
      },
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        precachePages: ['/', '/*'],
      },
    },
    {
      resolve: 'gatsby-plugin-local-search',
      options: {
        // A unique name for the search index. This should be descriptive of
        // what the index contains. This is required.
        name: 'pages',
        // Set the search engine to create the index. This is required.
        // The following engines are supported: flexsearch, lunr
        engine: 'flexsearch',
        // Provide options to the engine. This is optional and only recommended
        // for advanced users.
        //
        // Note: Only the flexsearch engine supports options.
        engineOptions: {
          profile: 'speed',
          // Partial search moving forward
          tokenize: 'forward',
        },
        // GraphQL query used to fetch all data for the search index. This is
        // required.
        query: `
          {
            allCountries {
              edges {
                node {
                  name
                  nativeName
                  flag
                }
              }
            }
          }
        `,
        // Field used as the reference value for each document.
        // Default: 'id'.
        ref: 'name',
        // List of keys to index. The values of the keys are taken from the
        // normalizer function below.
        // Default: all fields
        index: ['name', 'nativeName'],
        // List of keys to store and make available in your UI. The values of
        // the keys are taken from the normalizer function below.
        // Default: all fields
        store: ['name', 'nativeName', 'flag'],
        // Function used to map the result from the GraphQL query. This should
        // return an array of items to index in the form of flat objects
        // containing properties to index. The objects must contain the `ref`
        // field above (default: 'id'). This is required.
        normalizer: ({ data }) =>
          data.allCountries.edges.map(({ node }) => {
            return {
              name: node.name,
              nativeName: node.nativeName,
              flag: node.flag,
              // url: node.url,
            };
          }),
      },
    },
  ],
};
