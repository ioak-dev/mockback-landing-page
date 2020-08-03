module.exports = {
  siteMetadata: {
    siteUrl: `https://mockback.ioak.io`,
    title: `Mock REST API to connect diverse teams`,
    // description: `Whether you are a startup or an established business, Mockback will enhance your agile project management workflow. Modern and sleek user interface with advanced capabilities to plan and execute your project efficiently. Supports Scrum and Kanban agile management processes. Unlimited number of projects and teams.`,
    // description: `Mockback optimizes your agile project management workflow with Scrum or Kanban. Clean user interface with advanced capabilities to execute your project efficiently`,
    description: `Optimizes development cycle by making a working API specification that development teams can rely on.`,
    author: `@ioak-dev`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
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
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/mockback_white_small.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
