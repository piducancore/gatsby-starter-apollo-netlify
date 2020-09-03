module.exports = {
  siteMetadata: {
    title: `Gatsby Starter Apollo Netlify`,
    description: `This is an easy way to start developing fullstack GraphQL apps with Gatsby and Apollo Server (powered by Netlify functions).`,
    author: `@piducancore`,
  },
  plugins: [
    `gatsby-plugin-theme-ui`,
    `gatsby-theme-apollo`,
    `gatsby-plugin-react-helmet`,
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
