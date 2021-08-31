const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Message {
    _id: ID
    date: Date
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
    date: Date
    userId: User
  }
  type User {
    _id: ID
    firstName: String
    lastName: String
    userName: String
    email: String
    password: String
  }
  type workEvent {
    date: Date
    content: String
    attendees: User
  }

  type Query {
    users: [User]
    user(userName: String!): User
  }
`;

module.exports = typeDefs;
