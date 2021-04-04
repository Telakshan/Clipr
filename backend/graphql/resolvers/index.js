const userResolvers = require("./users");
const videoResolvers = require("./videos");

module.exports = {
  Query: {
    ...userResolvers.Query,
  },
  Mutation: {
      ...userResolvers.Mutation
  }
};
