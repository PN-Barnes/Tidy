import Reac, { useState } from 'react';
import {  Typography, Container, Paper, Button, Card  } from '@material-ui/core';
import styled from '@emotion/styled';
import { makeStyles } from '@material-ui/core/styles';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_TASKS, QUERY_EVENTS } from '../utils/queries';
import { ADD_TASK, ADD_TASK_FOR_USER } from '../utils/mutations';

import TaskList from '../components/taskList';

export const StyleWrapper = styled.div`
  #cardStyle {
    background-image: 
      radial-gradient(rgba(0, 255, 0, 0.4),
      rgba(0, 20, 0, 0.7)));
      // url("../../logo.png");
      background-repeat: no-repeat;
      background-size: 100%;
      background-color: rgba(0, 100, 50, 0.5);
      margin: 20px
  },
  #namesCard {
    background-image: 
      radial-gradient(rgba(0, 255, 0, 0.4),
      rgba(0, 20, 0, 0.7)));
      // url("../../logo.png");
      background-repeat: no-repeat;
      background-size: 100%;
      background-color: rgba(0, 100, 50, 0.5);
      margin: 20px
  },

  #paperStyle {
    
    padding-top: 2px;
    padding-bottom: 2px;
    font-size: 1.4em;
    text-align: center;
    border: 2px solid rgba(100, 200, 150, 0.5);
    border-radius: 12px;
    background-color: rgba(0, 100, 50, 0.5);
  }
`

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
  const classes = useStyles();
  const { loading, data } = useQuery(QUERY_TASKS);
  console.log(data);
  const tasks = data?.tasks || [];

  const [formState, setFormState] = useState({
    content: '',
  });
  const [addTask, { error }] = useMutation(ADD_TASK);

  const [addTaskForUser, { error: addTaskForUserErr }] =
    useMutation(ADD_TASK_FOR_USER);

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

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // On form submit, perform mutation and pass in form data object as arguments
    // It is important that the object fields are match the defined parameters in `ADD_THOUGHT` mutation

    console.log('formState', formState);
    try {
      const { data } = addTask({
        variables: { ...formState },
      });

      const task = data?.event || {};

      if (task) {
        alert('Successfully created an task and added it to current user');
      }
      console.log('task', task);

      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'content') {
      setFormState({ ...formState, [name]: value });
    } else if (name !== 'content') {
      setFormState({ ...formState, [name]: value });
    }
  };

  return (
    <main>
      <StyleWrapper>
      <Container>
      <div className='flex-row justify-center'>
      <Paper id='paperStyle'>
        <div className='col-12 col-md-10 my-3'>
          <h3>Here's your current list of tasks:</h3>
          {loading ? (
            <div>Loading...</div>
          ) : (
            tasks.map((task) => (
              <Card id='cardStyle'>
                <div id='namesCard'>
                <TaskList task={task} />
                <button onClick={handleAddTask.bind(null, task._id)}>
                  Add to Tasks
                </button>
                </div>
              </Card>
            ))
          )}
          <div className='col-12 col-lg-3'>
            <form
              className='flex-row justify-center justify-space-between-md align-center'
              onSubmit={handleFormSubmit}
            >
              <div className='col-12'>
                <textarea
                  name='content'
                  placeholder='Add a task'
                  value={formState.content}
                  className='form-input w-100'
                  onChange={handleChange}
                ></textarea>
              </div>
              {/* <div className='col-12 col-lg-9'>
                <input
                  name='thoughtAuthor'
                  placeholder='Add your name to get credit for the thought...'
                  value={formState.thoughtAuthor}
                  className='form-input w-100'
                  onChange={handleChange}
                />
              </div> */}

              <div className='col-12 col-lg-3'>
                <button
                  className='btn btn-primary btn-block py-3'
                  type='submit'
                >
                  Add New Task
                </button>
              </div>
              {error && (
                <div className='col-12 my-3 bg-danger text-white p-3'>
                  Something went wrong...
                </div>
              )}
            </form>
          </div>
        </div>
        </Paper>
      </div>
      </Container>
      </StyleWrapper>
    </main>
  );
}

export default Tasks;
