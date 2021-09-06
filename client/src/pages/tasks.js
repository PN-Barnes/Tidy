import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_TASKS, QUERY_EVENTS } from '../utils/queries';
import { ADD_TASK, ADD_TASK_FOR_USER } from '../utils/mutations';

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

  const [addTaskForUser, { error }] = useMutation(ADD_TASK_FOR_USER);

  const handleAddTask = async (_id) => {
    try {
      const { data } = await addTaskForUser({
        variables: { _id },
      });

      const user = data?.user || {};
      console.log('user', user);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <main>
      <div className='flex-row justify-center'>
        <div className='col-12 col-md-10 my-3'>
          <h3>title="Here's your current list of tasks:"</h3>
          {loading ? (
            <div>Loading...</div>
          ) : (
            tasks.map((task) => (
              <>
                <TaskList task={task} />
                <button onClick={handleAddTask.bind(null, task._id)}>
                  Add to contacts
                </button>
              </>
            ))
          )}
        </div>
      </div>
    </main>
  );
}

export default Tasks;
