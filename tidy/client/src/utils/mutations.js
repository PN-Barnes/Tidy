import { gql } from '@apollo/client';

export const LOGIN_ME = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $username: String!
    $email: String!
    $password: String!
    $role: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      username: $username
      email: $email
      password: $password
      role: $role
    ) {
      token
      user {
        _id
        firstName
        lastName
        username
        email
        password
        role
      }
    }
  }
`;

export const REMOVE_USER = gql`
  mutation removeUser($_id: ID!) {
    removeUser(_id: $_id) {
      _id
      username
    }
  }
`;

export const ADD_EVENT = gql`
  mutation addEvent($date: String!, $content: String!, $attendees: [String]!) {
    addEvent(date: $date, content: $content, attendees: $attendees) {
      _id
      date
      content
      attendees {
        _id
        lastName
        firstName
      }
    }
  }
`;
