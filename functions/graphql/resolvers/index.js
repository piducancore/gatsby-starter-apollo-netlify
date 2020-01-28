// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => "Hello from Apollo Server!",
  },
  Mutation: {
    uploadImage: (root, { image }) => {
      // Do whatever you want with your image.
      // In this case we just return it.
      return image
    },
  },
}

module.exports = {
  resolvers,
}
