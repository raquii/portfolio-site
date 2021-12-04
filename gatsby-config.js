module.exports = {
  siteMetadata: {
    title: "Raquel Román-Rodriguez | Full-stack Software Developer",
    description: "Raquel Román-Rodriguez is Full-stack Software Developer based in Cleveland, OH.",
    author: "Raquel Román-Rodriguez",
    siteUrl: "https://raquelromanrodri.com",
    image: '/website.png',
    twitterUsername: '@bchiang7',
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images/`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.API_URL || "http://localhost:1337",
        queryLimit: 1000,
        collectionTypes: [`jobs`, `projects`],
      },
    },
  ],
};
