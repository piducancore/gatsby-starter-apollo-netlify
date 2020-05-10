import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client"
import fetch from "isomorphic-fetch"

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "/.netlify/functions/graphql",
    // credentials: "same-origin",
    fetch,
  }),
})

export default client
