<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="48" />
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

This starter is an easy way to develop fullstack apps with [Gatsby](https://github.com/gatsbyjs/gatsby) and [Apollo Server](https://github.com/apollographql/apollo-server) (thanks to [Netlify Lambda functions](https://www.netlify.com/docs/functions/)), and brings all of this magic to our local machine using [Netlify Dev](https://github.com/netlify/netlify-dev-plugin).

## 🏁 Requirements

- A [Netlify](https://www.netlify.com) account. Sign up if you haven't.
- The latest [Netlify CLI](https://www.netlify.com/docs/cli/). (`npm install -g netlify-cli`)

## 🚀 Quick start

- Use the Gatsby CLI to create a new project, specifying this starter.

  ```sh
  gatsby new my-new-project https://github.com/piducancore/gatsby-starter-apollo-netlify
  ```

- Go to your new project’s directory.
  ```sh
  cd my-new-project/
  ```
- Start your local Netlify Dev server
  ```sh
  netlify dev
  ```

**That's it**. Your Netlify Dev server is running at `http://localhost:8888`!

Now open the `my-new-project` directory in your favorite code editor and check `src/pages` directory to add/edit pages, and `src/lambda/graphql.js` to edit your Apollo Server.

_Note: You'll also see a second link: `http://localhost:8000`. This is Gatsby's default dev server, and it won't have access to our Apollo Server (or any other serverless function) since Netlify Dev is doing all the proxying._

## 🚀 Deploy to Netlify

With the Netlify CLI you can deploy directly from the command-line.

- First, make sure you're logged in:
  ```sh
  # login with the Netlify CLI
  netlify login
  ```
- Create a new Netlify site or link your proyect to an existing one:
  ```sh
  # configure continuous deployment for a new or existing site
  netlify init
  ```
- Deploy your proyect
  ```sh
  # create new deploy
  netlify deploy
  ```
