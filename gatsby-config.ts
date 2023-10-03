import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: "Lims Lounge And Restaurant",
    siteUrl: "https://limslounge.com"
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
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-0BZQMW8CGP", // Google Analytics / GA
        ],
      }
    },
  
    {   
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["PT Sans\:400,700","Dancing Script\:400,700"],
        display: 'swap'
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Lims Lounge & Restaurant",
        short_name: "Lims Lounge & Restaurant",
        description: "Lims Lounge & Restaurant is a family run business offering authentic Kenyan cuizine.",
        lang: "en",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#000000",
        display: "standalone",
        theme_color_in_head: false,
        icon: "src/images/LimsloungeLogo.png",
      },
    },
    {
        resolve: `gatsby-plugin-s3`,
        options: {
            bucketName: 'limslounge.com',
            acl: null,
        },
    },
  ]
};

export default config;
