const path = require("path")
const { ApolloServer, gql } = require("apollo-server-lambda")
const { importSchema } = require("graphql-import")
const { makeExecutableSchema } = require("graphql-tools")
const { applyMiddleware } = require("graphql-middleware")
const { verify } = require("jsonwebtoken")

const { prisma } = require("./prisma/generated/prisma-client")
const { resolvers } = require("./resolvers")
const { permissions } = require("./permissions")

const getUser = event => {
  let token
  try {
    token = verify(
      event.headers.authorization.replace("Bearer ", ""), // || event.headers.cookie.replace("token=", ""),
      process.env.AUTH_SECRET
    )
  } catch (e) {
    return null
  }
  return token
}

const typeDefs = importSchema(path.join(__dirname, "schema.graphql"))
const schema = makeExecutableSchema({ typeDefs, resolvers })
const schemaWithMiddleware = applyMiddleware(schema, permissions)

const server = new ApolloServer({
  schema: schemaWithMiddleware,
  resolvers,
  context: async ({ event, context }) => ({
    prisma,
    user: await getUser(event),
    event,
    context,
  }),
  introspection: true,
  playground: true,
})

exports.handler = server.createHandler()
