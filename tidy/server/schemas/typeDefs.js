const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    username: String
    email: String
    password: String
  }
  type Query {
    users: [User]
    user(userName: String!): User
  }
`;

module.exports = typeDefs;
