module.exports = {
  siteMetadata: {
    siteUrl: "https://www.raquelromanrodri.com",
    title: "Raquel Román-Rodriguez | Full-stack Software Developer",
    description: "Portfolio site for Raquel Román-Rodriguez, Full-stack Software Developer",
    author: "Raquel Román-Rodriguez",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-gatsby-cloud`,
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
