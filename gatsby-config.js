require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Mickey Trading`,
    description: `Buy Lumber on Mickey: Instant quotes, automated logistics, no commission. Mickey is the future of how commodity products are bought and sold.`,
    author: `Mickey Trading`,
    siteUrl: `https://mickey.io/`,
    image: `/og-image.jpg`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "UA-203913020-1", // Universal Analytics
          "G-S3129KNVS2", // Google Analytics / GA4
        ],
        pluginConfig: {
          head: false,
        },
      },
    },

    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: "https://mickeyhomepage.wpengine.com/graphql" || ``,
        verbose: true,
        useACF: true,
        develop: {
          hardCacheMediaFiles: true,
        },
        production: {
          allow404Images: true,
        },
        debug: {
          graphql: {
            writeQueriesToDisk: true,
          },
        },
        type: {
          Post: {
            limit:
              process.env.NODE_ENV === `development`
                ?
                50
                :
                5000,
          },
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/mickey-tree-logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
