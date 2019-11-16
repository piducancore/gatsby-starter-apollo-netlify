const path = require("path")
const { ApolloServer } = require("apollo-server-lambda")
const { importSchema } = require("graphql-import")
const { makeExecutableSchema } = require("graphql-tools")
const { resolvers } = require("./resolvers")

const typeDefs = importSchema(path.join(__dirname, "schema.graphql"))
const schema = makeExecutableSchema({ typeDefs, resolvers })

const server = new ApolloServer({
  schema,
  resolvers,
  introspection: true,
  playground: true,
})

exports.handler = server.createHandler()
