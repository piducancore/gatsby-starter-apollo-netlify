import React from "react"
import { Link } from "gatsby"
import gql from "graphql-tag"
import { Query } from "react-apollo"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const APOLLO_QUERY = gql`
  query {
    hello
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p> and...</p>
    <Query query={APOLLO_QUERY}>
      {({ data, loading, error }) => {
        if (loading) return <p>Loading...</p>
        if (error) return <p>Error: {error.message}</p>
        return <h1>{data.hello}</h1>
      }}
    </Query>
    <p>Welcome.</p>
    <p>
      This is an example project using <b>Gatsby</b> on the front and{" "}
      <b>Apollo Server</b> on the back, thanks to <b>Netlify</b> functions. You
      can check <code>src/pages/index.js</code> to edit this page, and{" "}
      <code>src/lambda/graphql.js</code> to develop your server.
    </p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, margin: `1.45rem auto` }}>
      <Link to="/page-2/">
        <Image />
        Go to page 2
      </Link>
    </div>
  </Layout>
)

export default IndexPage
