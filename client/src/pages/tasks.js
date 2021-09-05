import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useQuery } from '@apollo/client';
import { QUERY_TASKS, QUERY_EVENTS } from '../utils/queries';

import TaskList from '../components/taskList';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

function Tasks() {
  const { loading, data } = useQuery(QUERY_TASKS);

  console.log(data);

  const tasks = data?.tasks || [];

  return (
    // <div className='App'>
    //   <Typography variant='h1'>Tasks</Typography>
    //   <div>
    //     {tasks.map((task) => (
    //       <div>
    //         {task.content} was assign to {task.username} on {task.date}
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <main>
      <div className='flex-row justify-center'>
        <div className='col-12 col-md-10 my-3'>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <TaskList
              tasks={tasks}
              title="Here's your current list of tasks:"
            />
          )}
        </div>
      </div>
    </main>
  );
}

export default Tasks;
