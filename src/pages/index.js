/** @jsx jsx */
import { Styled, jsx } from "theme-ui"
import React from "react"
import { Link } from "gatsby"
import { useQuery, gql } from "@apollo/client"

import Layout from "../components/layout"
import SEO from "../components/seo"

const APOLLO_QUERY = gql`
  query {
    hello
  }
`

const IndexPage = (props) => {
  const { data, loading, error } = useQuery(APOLLO_QUERY)
  return (
    <Layout>
      <SEO title="Home" />
      <Styled.h1>Hi people</Styled.h1>
      <Styled.p> and...</Styled.p>
      <Styled.h1>
        {data ? data.hello : loading ? "Loading..." : error && error.message}
      </Styled.h1>
      <Styled.p>Welcome.</Styled.p>
      <Styled.p>
        Start by checking <Styled.code>src/pages/index.js</Styled.code> to see
        an example query using the
        <Styled.code>useQuery</Styled.code> hook.
      </Styled.p>
      <Styled.p>
        Also check <Styled.code>functions/graphql/graphql.js</Styled.code> to
        start developing your Apollo Server.
      </Styled.p>
      <Styled.p>
        Aditionally, you can find Apollo Server's GraphQL Playground{" "}
        <Styled.a href={`${props.location.origin}/.netlify/functions/graphql`}>
          here
        </Styled.a>
        .
      </Styled.p>
      <Styled.p>Now go build something great.</Styled.p>
      <Styled.a as={Link} to="/page-2">
        Go to page 2
      </Styled.a>
    </Layout>
  )
}

export default IndexPage
