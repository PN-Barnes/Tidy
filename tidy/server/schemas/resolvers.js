const { AuthenticationError } = require('apollo-server-express');

const { User, Message, Photo, Task, workEvent } = require('../models');

const { signToken } = require('../utils/auth');

const resolvers = {
  // * successful query of user data
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, { username }) => {
      return User.findOne({ username });
    },
    // messages: async () => {
    //   return Message.find({});
    // },
    // message: async (parent, { message_id }) => {
    //   return Message.findOne({ message_id }).populate(
    //     'sender_id',
    //     'receiver_id'
    //   );
    // },
    // photos: async () => {
    //   return Photo.find().populate('owner');
    // },
    // photo: async (parent, { photo_id }) => {
    //   return Photo.findOne({ photo_id }).populate('owner');
    // },
    tasks: async () => {
      return Task.find().populate('userId');
    },
    task: async (parent, { task_id }) => {
      return Task.findOne({ task_id }).populate('userId');
    },
    // workEvents: async () => {
    //   return workEvent.find().populate('attendees');
    // },
    // workEvent: async (parent, { event_id }) => {
    //   return workEvent.findOne({ event_id }).populate('attendees');
    // messages: async () => {
    //   return Message.find().populate('sender_id', 'receiver_id');
    // },
    // message: async (parent, { message_id }) => {
    //   return Message.findOne({ message_id }).populate(
    //     'sender_id',
    //     'receiver_id'
    //   );
    // },
    // photos: async () => {
    //   return Photo.find().populate('owner');
    // },
    // photo: async (parent, { photo_id }) => {
    //   return Photo.findOne({ photo_id }).populate('owner');
    // },
    // tasks: async () => {
    //   return Task.find().populate('userId');
    // },
    // task: async (parent, { task_id }) => {
    //   return Task.findOne({ task_id }).populate('userId');
    // },
    workEvents: async () => {
      return workEvent.find().populate('attendees');
    },
    workEvent: async (parent, { id }) => {
      return workEvent.findOne({ _id: id }).populate('attendees');
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return user.findOne({ _id: context.user._id }).populate('');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError('No user found with this email');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect Password');
      }

      const token = signToken(user);

      return { token, user };
    },
    // *Successful mutation
    // addUser: async (
    //   parent,
    //   { firstName, lastName, username, email, password, role }
    // ) => {
    //   return await User.create({
    //     firstName,
    //     lastName,
    //     username,
    //     email,
    //     password,
    //     role,
    //   });
    // },
    // * Successful mutation
    // removeUser: async (parent, user) => {
    //   return await User.findOneAndDelete({ _id: user });
    // },
    // // Can be further changed to specifically change userName or email or password
    // updateUser: async (parent, { userName, email, password }) => {
    //   return await User.findOneAndUpdate(
    //     { userName: userName },
    //     { email: email },
    //     { password: password }
    //   );
    // },
    addTask: async (parent, { content, date, userId }) => {
      return await Task.create({
        content,
        date,
        userId,
      });
    },
    // // Can be further changed to specifically change content or date or userId
    // updateTask: async (parent, { newContent, newDate, newUser }) => {
    //   return await Task.findOneAndUpdate(
    //     { content: newContent },
    //     { date: newDate },
    //     { userId: newUser }
    //   );
    // },
    // addPhoto: async (parent, { url_link, description, owner }) => {
    //   return await Photo.create({
    //     url_link,
    //     description,
    //     owner,
    //   });
    // },
    // // Allow the user to change photo and its description
    // updatePhoto: async (parent, { url_link, description }) => {
    //   return await Photo.findOneAndUpdate(
    //     { url_link: url_link },
    //     { description: description }
    //   );
    // },
    // addMessage: async (parent, { content, sender_id, receiver_id }) => {
    //   return await Message.create({
    //     content,
    //     sender_id,
    //     receiver_id,
    //   });
    // },
    // * Successful mutation
    // addEvent: async (parent, { date, content, attendees }) => {
    //   return await workEvent.create({
    //     date,
    //     content,
    //     attendees,
    //   });
    // },
    // * Successful mutation
    // removeEvent: async (parent, event) => {
    //   return await workEvent.findOneAndDelete({ _id: event });
    // },
    // // Can be further changed to specifically change content or attendees
    // updateWorkEvent: async (parent, { newContent, updatedAttendees }) => {
    //   return await workEvent.findOneAndUpdate(
    //     { content: newContent },
    //     { attendees: updatedAttendees }
    //   );
    // },
  },
};

module.exports = resolvers;
