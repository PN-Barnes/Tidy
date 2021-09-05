import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { Typography } from '@material-ui/core';

import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';

function ToDos() {
  const { username: useParam } = useParams();

  console.log(useParams());

  const { loading, data } = useQuery(useParam ? QUERY_USER : QUERY_ME, {
    variables: { username: 'HLin' },
    credentials: 'include',
  });

  const user = data?.me || data?.user || {};

  console.log('user', user);

  return (
    <div className='App'>
      <Typography variant='h1'>Profile</Typography>
      {/* {users.map((user) => (
        <div>
          <p>{user.username}</p>
          <p>{user.email}</p>
          <p>{user.role}</p>
          {user.events.map((event) => (
            <p>{event._id}</p>
          ))}
        </div>
      ))} */}
    </div>
  );
}

export default ToDos;
