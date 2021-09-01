import { gql } from '@apollo/client';

export const QUERY_SINGLE_USER = gql`
  query user($userName: String!) {
    user(userName: $userName) {
      _id
      firstName
      lastName
      userName
      email
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_USERS = gql`
  query getUsers {
    users {
      _id
      firstName
      lastName
      userName
      email
    }
  }
`;
