import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $userName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      userName: $userName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
        firstName
        lastName
        userName
        email
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($userName: String!, $email: String!, $password: Stirng!) {
    updateUser(userName: $userName, email: $email, password: $password) {
      user {
        userName
        email
      }
    }
  }
`;

export const ADD_TASK = gql`
  mutation addTask($content: String!, $date: String!, $userId: ID!) {
    addTask(content: $content, date: $date, userId: $userId) {
      task {
        content
        date
        userId
      }
    }
  }
`;

export const UPDATE_TASK = gql`
  mutation updateTask($content: String!, $date: Date!, $userId: ID!) {
    updateTask(content: $content, date: $date, userId: $userId) {
      task {
        content
        date
        userId
      }
    }
  }
`;

export const ADD_PHOTO = gql`
  mutation addPhoto($url_link: String!, $description: String!, $owner: ID) {
    addPhoto(url_link: $url_link, description: $description, owner: $owner) {
      photo {
        url_link
        description
        owner
      }
    }
  }
`;

export const ADD_MESSAGE = gql`
  mutation addMessage($content: String!, $sender_id: ID, $receiver_id: ID) {
    addMessage(
      content: $content
      sender_id: $sender_id
      receiver_id: $receiver_id
    ) {
      message {
        content
        sender_id
        receiver_id
      }
    }
  }
`;

// export const ADD_WorkEvent = gql`
//   mutation addWorkEvent($content: String!, $attendees: String!) {
//       addWorkEvent
//   }
// `;
