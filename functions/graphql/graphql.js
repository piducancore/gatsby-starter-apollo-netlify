const path = require("path")
const { ApolloServer } = require("apollo-server-lambda")
const { loadSchemaSync } = require('@graphql-tools/load');
const { GraphQLFileLoader } = require('@graphql-tools/graphql-file-loader');
const { addResolversToSchema } = require('@graphql-tools/schema');
const { resolvers } = require("./resolvers")

const schema = loadSchemaSync(path.join(__dirname, 'schema.graphql'), { loaders: [new GraphQLFileLoader()] });
const schemaWithResolvers = addResolversToSchema({
  schema,
  resolvers,
});

const server = new ApolloServer({
  schema: schemaWithResolvers,
  introspection: true,
  playground: true,
})

exports.handler = server.createHandler()
