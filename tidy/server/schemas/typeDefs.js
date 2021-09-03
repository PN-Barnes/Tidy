const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Message {
    _id: ID
    date: String
    content: String
    sender_id: User
    receiver_id: User
  }

  type Photo {
    _id: ID
    url_link: String
    description: String
    owner: User
  }

  type Task {
    _id: ID
    content: String
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
    events: [workEvent]!
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
    addTask(content: String, date: String, username: String!): Task
    addEvent(date: String!, content: String!, attendees: [String]!): workEvent
    removeEvent(_id: ID!): workEvent
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
