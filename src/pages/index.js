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
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
