import React from 'react';
import { Typography } from '@material-ui/core';

import { useQuery } from '@apollo/client';
import { QUERY_MESSAGES } from '../utils/queries';

function Contacts() {
  const { loading, data } = useQuery(QUERY_MESSAGES);

  const messages = data?.messages || [];

  console.log(messages);
  return (
    <div className='App'>
      <Typography variant='h1'>Contacts</Typography>
      <div>
        {messages.map((message) => (
          <div>
            <p>{message.content}</p>
            <p> from {message.sender_username}</p>
            <p> to {message.receiver_username} </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contacts;
