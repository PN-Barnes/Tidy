import React from 'react';
import { Typography } from '@material-ui/core';

import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';

function ToDos() {
  const { userData } = useQuery(QUERY_USER);

  return (
    <div className='App'>
      <Typography variant='h1'>Profile</Typography>
    </div>
  );
}

export default ToDos;
