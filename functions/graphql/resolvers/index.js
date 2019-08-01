const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const resolvers = {
  Query: {
    posts: (parent, args, context, info) => {
      return context.prisma.posts()
    },
    me: async (parent, args, context, info) => {
      const { userId } = context.user
      const user = context.prisma.user({ id: userId })
      return user
    },
  },
  Mutation: {
    signup: async (parent, args, context, info) => {
      const password = await bcrypt.hash(args.password, 10)
      const user = await context.prisma.createUser({ ...args, password })
      const token = jwt.sign({ userId: user.id }, process.env.AUTH_SECRET)
      return {
        token,
        user,
      }
    },
    login: async (parent, args, context, info) => {
      const user = await context.prisma.user({ email: args.email })
      if (!user) {
        throw new Error("No such user found")
      }
      const valid = await bcrypt.compare(args.password, user.password)
      if (!valid) {
        throw new Error("Invalid password")
      }
      const token = jwt.sign({ userId: user.id }, process.env.AUTH_SECRET)
      return {
        token,
        user,
      }
    },
    createPost: (parent, args, context, info) => {
      const { userId } = context.user
      return context.prisma.createPost({
        slug: args.slug,
        title: args.title,
        author: { connect: { id: userId } },
      })
    },
    updatePost: (parent, args, context, info) => {
      const { userId } = context.user
      return context.prisma.updatePost({
        where: { id: args.id },
        data: {
          slug: args.slug,
          title: args.title,
          author: { connect: { id: userId } },
        },
      })
    },
    deletePost: (parent, args, context, info) => {
      return context.prisma.deletePost({
        id: args.id,
      })
    },
  },
  User: {
    posts: (parent, args, context) => {
      return context.prisma.user({ id: parent.id }).posts()
    },
  },
  Post: {
    author: (parent, args, context) => {
      return context.prisma.post({ id: parent.id }).author()
    },
  },
}

module.exports = {
  resolvers,
}
