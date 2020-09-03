<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="48" />
  </a>
  <a href="https://www.apollographql.com/">
    <img alt="Apollo" src="https://rawgit.com/apollographql/apollo-client/master/docs/source/logo/square.png" width="48"  style="margin-left:16px; margin-right:16px" />
  </a>
  <a href="https://www.netlify.com">
    <img alt="Netlify" src="https://www.netlify.com/img/press/logos/logomark.png" width="48" />
  </a>
</p>
<h1 align="center">
  Gatsby Starter Apollo Netlify
</h1>

This is an easy way to start developing fullstack GraphQL apps with [Gatsby](https://github.com/gatsbyjs/gatsby) and [Apollo Server](https://github.com/apollographql/apollo-server) (powered by [Netlify functions](https://www.netlify.com/docs/functions/)).

## Requirements 🏁

- A [Netlify](https://www.netlify.com) account.
- The latest [Netlify CLI](https://www.netlify.com/docs/cli/). (`npm install -g netlify-cli`)

## Usage ⚙️

Create a new Gatsby project specifying this starter, navigate to it, and start Netlify Dev server:

```sh
# Use the Gatsby CLI to create a new project, specifying this starter.
gatsby new my-new-project piducancore/gatsby-starter-apollo-netlify

# Go to your new project’s directory.
cd my-new-project/

# Start your local Netlify Dev server
netlify dev
```

**That's it**. Your Netlify Dev server is running at `http://localhost:8888`!

Start by checking `src/pages/index.js` to see an example query using the `useQuery` hook from `@apollo/client`.

Also check `functions/graphql/graphql.js` to start developing your Apollo Server.

You can find Apollo Server's GraphQL Playground at `http://localhost:8888/.netlify/functions/graphql`

_Note: You'll also see a second link: `http://localhost:8000`. This is Gatsby's default dev server, and it won't have access to our Apollo Server (or any other serverless function) since Netlify Dev is doing all the proxying._

## Deploy to Netlify 🚀

With the Netlify CLI you can create deployments directly from the command-line:

```sh
# Login with the Netlify CLI
netlify login

# Configure continuous deployment for a new or existing site
netlify init

# Create new deploy
netlify deploy
```
