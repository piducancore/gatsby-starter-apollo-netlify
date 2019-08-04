import ApolloClient from "apollo-boost"
import fetch from "isomorphic-fetch"

const getToken = () => {
  const token = localStorage.getItem("auth-token")
  return token ? `Bearer ${token}` : ""
}

export const client = new ApolloClient({
  uri: "/.netlify/functions/graphql",
  request: operation => {
    operation.setContext({
      headers: {
        authorization: getToken(),
      },
    })
  },
  fetch,
})
