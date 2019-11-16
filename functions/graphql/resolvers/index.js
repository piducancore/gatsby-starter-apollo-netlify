// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => "Hello from Apollo Server!",
  },
}

module.exports = {
  resolvers,
}
