import React from "react"
import { Link } from "gatsby"
import gql from "graphql-tag"
import { Query } from "react-apollo"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const APOLLO_QUERY = gql`
  query {
    posts {
      title
      author {
        email
      }
    }
  }
`

const IndexPage = props => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p> and...</p>
    <Query query={APOLLO_QUERY}>
      {({ data, loading, error }) => {
        if (loading) return <p>Loading...</p>
        if (error) return <p>Error: {error.message}</p>
        const { posts } = data
        return posts.map((post, index) => (
          <div key={index}>
            <h1>{post.title}</h1>
            <p>{post.author.email}</p>
          </div>
        ))
      }}
    </Query>
    <p>Welcome.</p>
    <p>
      Start by checking <code>src/pages/index.js</code> to see an example query
      using the
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
      <Link to="/login">Go to login page</Link>
    </div>
  </Layout>
)

export default IndexPage
