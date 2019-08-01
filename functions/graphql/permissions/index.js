const { shield, and } = require("graphql-shield")
const { isAuthenticated, isOwner } = require("./rules")

const permissions = shield({
  Query: {
    me: isAuthenticated,
  },
  Mutation: {
    createPost: isAuthenticated,
    updatePost: and(isAuthenticated, isOwner),
    deletePost: and(isAuthenticated, isOwner),
  },
})

module.exports = {
  permissions,
}
