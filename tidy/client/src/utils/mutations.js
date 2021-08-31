const { AuthenticationError } = require('apollo-server-express');
const { User, Task, Photo, Message, workEvent } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
  },
};
