import React from 'react';
import { Typography } from '@material-ui/core';

import { useQuery } from '@apollo/client';
import { QUERY_MESSAGES, QUERY_USERS } from '../utils/queries';

function Contacts() {
  // const { loading, data } = useQuery(QUERY_MESSAGES);

  // console.log(data);

  // const messages = data?.messages || [];

  const { loading, data } = useQuery(QUERY_USERS);

  const users = data?.users || [];

  return (
    <div className='App'>
      <Typography variant='h1'>Contacts</Typography>
      <div>
        {users.map((user) => (
          <div>
            <p> Username: {user.username}</p>
            <p> First Name: {user.firstName}</p>
            <p> Last Name: {user.lastName} </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contacts;
