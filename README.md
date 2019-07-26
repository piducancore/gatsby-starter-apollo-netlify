<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="48" />
    <img alt="Apollo" src="https://rawgit.com/apollographql/apollo-client/master/docs/source/logo/square.png" width="48"  style="margin-left:16px; margin-right:16px" />
    <img alt="Netlify" src="https://www.netlify.com/img/press/logos/logomark.png" width="48" />
  </a>
</p>
<h1 align="center">
  Gatsby Starter Apollo Netlify
</h1>

This starter uses [Gatsby](https://github.com/gatsbyjs/gatsby) and [Apollo Server](https://github.com/apollographql/apollo-server) together on the same repo (thanks to [Netlify Functions](https://www.netlify.com/docs/functions/)), and [Netlify Dev](https://github.com/netlify/netlify-dev-plugin) brings all of this magic to our local machine.

## 🏁 Requirements

- A [Netlify](https://www.netlify.com) account. Sign up if you haven't.
- The latest [Netlify CLI](https://www.netlify.com/docs/cli/).

  ```sh
  # in case you use npm
  npm install -g netlify-cli

  # in case you use yarn
  yarn global add netlify-cli
  ```

## 🚀 Quick start

1.  **Create a new project.**

    Use the Gatsby CLI to create a new project, specifying this starter.

    ```sh
    # create a new Gatsby project using this starter
    gatsby new my-new-project https://github.com/piducancore/gatsby-starter-apollo-netlify
    ```

1.  **Start developing.**

    Go to your new project’s directory and start Netlify Dev's local server.

    ```sh
    # enter your newly created project's directory
    cd my-new-project/

    # start Netlify Dev's local dev server
    netlify dev
    ```

1.  **Open the source code and start editing!**

    Your Netlify Dev's local server is running at `http://localhost:8888`!

    _Note: You'll also see a second link: `http://localhost:8000`. This is Gatsby's default dev server, and it won't have access to our Apollo Server (or any other serverless function).
    Use the Netlify Dev proxy instead: `http://localhost:8888`._

    Open the `my-new-project` directory in your code editor of choice and check `src/pages` directory to add/edit pages, and `src/lambda/graphql.js` to edit your Apollo Server.

    Save your changes and the browser will update in real time!

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
