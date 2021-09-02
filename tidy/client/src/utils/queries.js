import { gql } from '@apollo/client';

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
      username
      email
    }
  }
`;

export const QUERY_EVENT = gql`
  query ($_id: ID!) {
    workEvent(id: $_id) {
      _id
      date
      content
    }
  }
`;

export const QUERY_EVENTS = gql`
  query {
    workEvents {
      _id
      date
      content
      attendees {
        _id
        firstName
        lastName
        username
        email
        role
      }
    }
  }
`;

export const QUERY_USER = gql`
  query ($username: String!) {
    user(username: $username) {
      _id
      username
      firstName
      lastName
      email
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      events {
        _id
        date
        content
        attendees {
          _id
          firstname
          lastname
        }
      }
    }
  }
`;

export const QUERY_TASKS = gql`
  query getTasks {
    task {
      content
      userId
    }
  }
`;
// export const QUERY_USERS = gql`
//   query getUsers {
//     users {
//       _id
//       firstName
//       lastName
//       userName
//       email
//       role
//     }
//   }
// `;
