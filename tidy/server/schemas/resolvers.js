const { AuthenticationError } = require('apollo-server-express');

const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, { userName }) => {
      return User.findOne({ userName });
    },
  },
};

module.exports = resolvers;
