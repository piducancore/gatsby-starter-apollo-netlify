import React from "react"
import { Link } from "gatsby"
import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const APOLLO_QUERY = gql`
  query {
    hello
  }
`

const IndexPage = props => {
  const { data } = useQuery(APOLLO_QUERY)
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p> and...</p>
      <h1>{data && data.hello}</h1>
      <p>Welcome.</p>
      <p>
        Start by checking <code>src/pages/index.js</code> to see an example
        query using the
        <code>Query</code> component from <code>react-apollo</code>, and{" "}
        <code>functions/graphql/graphql.js</code> to start editing your Apollo
        Server.
      </p>
      <p>
        You can find Apollo Server's GraphQL Playground at{" "}
        <code>{props.location.origin}/.netlify/functions/graphql</code>
      </p>
      {console.log(props)}
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, margin: `1.45rem auto` }}>
        <Image />
        <Link to="/page-2/">Go to page 2</Link>
      </div>
    </Layout>
  )
}

export default IndexPage
