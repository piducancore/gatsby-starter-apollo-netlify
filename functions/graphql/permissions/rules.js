const { rule } = require("graphql-shield")

const isAuthenticated = rule()(async (parent, args, context, info) => {
  const userExists = await context.prisma.$exists.user({
    id: context.user.userId,
  })
  return userExists
})

const isOwner = rule()(async (parent, args, context, info) => {
  const owner = await context.prisma.post({ id: args.id }).author()
  return context.user.userId === owner.id
})

module.exports = {
  isAuthenticated,
  isOwner,
}
