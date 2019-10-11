import React from "react"
import { ApolloProvider } from "@apollo/react-common"
import { client } from "./src/apollo/client"

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
)
