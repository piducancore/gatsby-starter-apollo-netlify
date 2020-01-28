// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => "Hello from Apollo Server!",
  },
  Mutation: {
    uploadImage: (root, args) => {
      return args.image
    },
  },
}

module.exports = {
  resolvers,
}
