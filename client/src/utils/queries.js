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
      firstName
      lastName
      username
      email
      events {
        _id
        date
        content
      }
      contacts
    }
  }
`;

export const QUERY_TASKS = gql`
  query getTasks {
    tasks {
      _id
      date
      content
      username
    }
  }
`;

export const QUERY_MESSAGES = gql`
  query messages {
    messages {
      date
      content
      sender_id {
        _id
      }
      sender_username
      receiver_id {
        _id
      }
      receiver_username
    }
  }
`;

// export const QUERY_PHOTOS = gql`
//   query photos {
//     photos {
//       url_link
//       description
//       owner
//     }
//   }
// `;
