import React from 'react';
import { Typography } from '@material-ui/core';

import { useQuery } from '@apollo/client';
import { QUERY_TASKS, QUERY_EVENTS } from '../utils/queries';

function Tasks() {
  const { loading, data } = useQuery(QUERY_TASKS);

  console.log(data);

  return (
    <div className='App'>
      <Typography variant='h1'>Tasks</Typography>
    </div>
  );
}

export default Tasks;
