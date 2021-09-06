const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Message {
    _id: ID
    date: String
    content: String
    sender_id: User
    sender_username: String
    receiver_id: User
    receiver_username: String
  }

  type File {
    filename: String!
    mimetype: String!
    encoding: String!
  }

  type Photo {
    _id: ID
    url_link: String
    description: String
    owner: User
  }

  type Task {
    _id: ID
    content: String!
    date: String
    userId: User
    username: String
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    username: String
    email: String
    password: String
    role: String
    events: [workEvent]
    contacts: [String]
  }

  type workEvent {
    _id: ID
    date: String
    content: String
    attendees: [User]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]

    user(username: String!): User

    workEvents: [workEvent]
    workEvent(id: ID!): workEvent
    messages: [Message]
    message(username: String!): Message
    tasks: [Task]
    task(date: String!): Task
    photos: [Photo]
    photo(_id: ID!): [Photo]
    me: User
    file: String!
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      username: String!
      email: String!
      password: String!
      role: String!
    ): Auth
    removeUser(_id: ID!): User
    addTask(content: String!): Task
    addTaskForUser(_id: ID!): User

    addEvent(content: String!): workEvent

    addAttendee(_id: ID!): workEvent
    addContact(username: String!): User

    removeEvent(_id: ID!): workEvent
    login(email: String!, password: String!): Auth
    fileUpload(file: Upload!): File!
  }
`;

module.exports = typeDefs;
