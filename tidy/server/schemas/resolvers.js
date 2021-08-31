const { AuthenticationError } = require('apollo-server-express');

const { User, Message, Photo, Task, workEvent } = require('../models');

const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, { userName }) => {
      return User.findOne({ userName });
    },
    messages: async () => {
      return Message.find();
    },
    message: async (parent, { message_id }) => {
      return Message.findOne({ message_id });
    },
  },
};

module.exports = resolvers;
