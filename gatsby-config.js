module.exports = {
  siteMetadata: {
    title: `Gatsby Starter Apollo Netlify`,
    description: `This project is an easy way to start developing fullstack apps with Gatsby and Apollo Server (using Netlify Lambda functions). For developing we use Netlify Dev to bring all of this magic to our local machine.`,
    author: `@piducancore`,
  },
  plugins: [
    `gatsby-plugin-theme-ui`,
    `gatsby-theme-apollo`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
