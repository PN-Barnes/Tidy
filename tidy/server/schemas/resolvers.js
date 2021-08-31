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
      return Message.find().populate('sender_id', 'receiver_id');
    },
    message: async (parent, { message_id }) => {
      return Message.findOne({ message_id }).populate(
        'sender_id',
        'receiver_id'
      );
    },
    photos: async () => {
      return Photo.find().populate('owner');
    },
    photo: async (parent, { photo_id }) => {
      return Photo.findOne({ photo_id }).populate('owner');
    },
    tasks: async () => {
      return Task.find().populate('userId');
    },
    task: async (parent, { task_id }) => {
      return Task.findOne({ task_id }).populate('userId');
    },
    workEvents: async () => {
      return workEvent.find().populate('attendees');
    },
    workEvent: async (parent, { event_id }) => {
      return workEvent.findOne({ event_id }).populate('attendees');
    },
  },
  Mutation: {
    addUser: async (
      parent,
      { firstName, lastName, userName, email, password }
    ) => {
      return await User.create({
        firstName,
        lastName,
        userName,
        email,
        password,
      });
    },
    // Can be further changed to specifically change userName or email or password
    updateUser: async (parent, { userName, email, password }) => {
      return await User.findOneAndUpdate(
        { userName: userName },
        { email: email },
        { password: password }
      );
    },
    addTask: async (parent, { content, date, userId }) => {
      return await Task.create({
        content,
        date,
        userId,
      });
    },
    // Can be further changed to specifically change content or date or userId
    updateTask: async (parent, { newContent, newDate, newUser }) => {
      return await Task.findOneAndUpdate(
        { content: newContent },
        { date: newDate },
        { userId: newUser }
      );
    },
    addPhoto: async (parent, { url_link, description, owner }) => {
      return await Photo.create({
        url_link,
        description,
        owner,
      });
    },
    // Allow the user to change photo and its description
    updatePhoto: async (parent, { url_link, description }) => {
      return await Photo.findOneAndUpdate(
        { url_link: url_link },
        { description: description }
      );
    },
    addMessage: async (parent, { content, sender_id, receiver_id }) => {
      return await Message.create({
        content,
        sender_id,
        receiver_id,
      });
    },
    addWorkEvent: async (parent, { content, attendees }) => {
      return await workEvent.create({
        content,
        attendees,
      });
    },
    // Can be further changed to specifically change content or attendees
    updateWorkEvent: async (parent, { newContent, updatedAttendees }) => {
      return await workEvent.findOneAndUpdate(
        { content: newContent },
        { attendees: updatedAttendees }
      );
    },
  },
};

module.exports = resolvers;
