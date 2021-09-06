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

    // For testing
    // Querying user by id works
    // user: async (parent, { _id }) => {
    //   return User.findOne({ _id });
    // },

    messages: async () => {
      return await Message.find();
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
      return Task.find();
    },
    task: async (parent, { task_id }) => {
      return Task.findOne({ task_id });
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

    workEvents: async () => {
      return workEvent.find().populate('attendees');
    },
    workEvent: async (parent, { id }) => {
      return workEvent.findOne({ _id: id }).populate('attendees');
    },
    me: async (parent, args, context) => {
      // console.log('Arrived at get me route');

      console.log('context.user', context.user);

      if (context.user) {
        // return user.findOne({ _id: context.user._id }).populate('');
        const userData = User.findOne({
          username: context.user.username,
        }).populate('events');
        // const user = userData.user;
        // console.log('userData', userData);
        return userData;
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
    addUser: async (
      parent,
      { firstName, lastName, username, email, password, role }
    ) => {
      const user = await User.create({
        firstName,
        lastName,
        username,
        email,
        password,
        role,
      });
      const token = signToken(user);
      return { token, user };
    },
    // * Successful mutation
    removeUser: async (parent, user) => {
      return await User.findOneAndDelete({ _id: user });
    },
    // // Can be further changed to specifically change userName or email or password
    // updateUser: async (parent, { userName, email, password }) => {
    //   return await User.findOneAndUpdate(
    //     { userName: userName },
    //     { email: email },
    //     { password: password }
    //   );
    // },
    addTask: async (parent, { content }, context) => {
      console.log('context.user', context.user);
      if (context.user) {
        const task = await Task.create({
          content,
        });

        const user = await User.findOne({ username: context.user.username });
        user.tasks.push(task._id);
        user.save();

        task.userId = user._id;
        task.username = user.username;
        task.save();

        return task;
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    addTaskForUser: async (parent, { _id }, context) => {
      console.log('Arrived at addTaskForUser route');
      console.log('context.user', context.user);
      console.log('Task._id', _id);
      if (context.user) {
        const user = await User.findOne({ username: context.user.username });

        user.tasks.push(_id);
        console.log('user', user);
        return user.save();
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    // removeTask: async (parent, { _id }, context) => {
    //   if(context.user) {
    //     if(context.user
    //   }
    // }
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
    addEvent: async (parent, { content }, context) => {
      console.log('context.user', context.user);

      if (context.user) {
        console.log('Arrived at addEvent route');

        const event = await workEvent.create({
          // date: '09-07-2021 7:00pm',
          content,
          // attendees: ['6131f6ca0d7791558a175e86'],
        });

        const user = await User.findOneAndUpdate(
          { username: context.user.username },
          { $addToSet: { events: event._id } }
        );

        return event;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    // * Successful mutation
    removeEvent: async (parent, { event }, context) => {
      if (context.user) {
        if (context.user.role === 'Manager') {
          return await workEvent.findOneAndDelete({ _id: event });
        }
        throw new AuthenticationError(
          'You need to be a manager to delete events!'
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    addAttendee: async (parent, { _id }, context) => {
      console.log('context.user', context.user);
      if (context.user) {
        // console.log('event._id', _id);
        const event = await workEvent.findOne({ _id: _id });
        await event.attendees.push(context.user._id);

        const user = await User.findOne({ _id: context.user._id });
        await user.events.push(event._id);
        user.save();
        console.log('user', user);

        console.log('event', event);
        return event.save();
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    addContact: async (parent, { username }, context) => {
      console.log('arrived at addContact route');

      if (context.user) {
        const user = await User.findOne({ _id: context.user._id });

        await user.contacts.push(username);

        console.log('contact', user);
        return user.save();
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    // // Can be further changed to specifically change content or attendees
    // updateWorkEvent: async (parent, { newContent, updatedAttendees }) => {
    //   return await workEvent.findOneAndUpdate(
    //     { content: newContent },
    //     { attendees: updatedAttendees }
    //   );
    // },
    // fileUpload: async (parent, { file }) => {
    //   const { createReadStream, filename, mimetype, encoding } = await file;
    //   const stream = createReadStream()

    //   const out = require
    // },
  },
};

module.exports = resolvers;
