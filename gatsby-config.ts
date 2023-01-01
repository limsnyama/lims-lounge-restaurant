import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: "LIM'S NYAMA CHOMA",
    siteUrl: "https://www.softlaugh.com"
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    },
    // {
    //   resolve: "gatsby-plugin-google-gtag",
    //   options: {
    //     // You can add multiple tracking ids and a pageview event will be fired for all of them.
    //     trackingIds: [
    //       "GA-TRACKING_ID", // Google Analytics / GA
    //       "AW-CONVERSION_ID", // Google Ads / Adwords / AW
    //       "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
    //     ],
    //     // This object gets passed directly to the gtag config command
    //     // This config will be shared across all trackingIds
    //     gtagConfig: {
    //       optimize_id: "OPT_CONTAINER_ID",
    //       anonymize_ip: true,
    //       cookie_expires: 0,
    //     },
    //     // This object is used for configuration specific to this plugin
    //     pluginConfig: {
    //       // Puts tracking script in the head instead of the body
    //       head: false,
    //       // Setting this parameter is also optional
    //       respectDNT: true,
    //       // Avoids sending pageview hits from custom paths
    //       exclude: ["/preview/**", "/do-not-track/me/too/"],
    //       // Defaults to https://www.googletagmanager.com
    //       origin: "YOUR_SELF_HOSTED_ORIGIN",
    //       // Delays processing pageview events on route update (in milliseconds)
    //       delayOnRouteUpdate: 0,
    //     },
    //   },
    // },
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["PT Sans\:400,700"],
        display: 'swap'
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Lim's Nyama Choma",
        short_name: "Lim's Choma Zone",
        description: "Lim's Nyama Choma is a family run business offering authentic Kenyan cuizine.",
        lang: "en",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#000000",
        display: "standalone",
        theme_color_in_head: false,
        icon: "src/images/icon-light-v2.svg",
      },
    },
    {
        resolve: `gatsby-plugin-s3`,
        options: {
            bucketName: 'www.softlaugh.com',
            acl: null,
        },
    },
  ]
};

export default config;
