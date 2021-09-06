import React from 'react';
import { Link } from 'react-router-dom';
import {
  Typography,
  AppBar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  // Link, // styling from Materil-UI
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Toolbar,
  Container,
} from '@material-ui/core';

import AssignmentIcon from '@material-ui/icons/Assignment';

const TaskList = ({ task, title }) => {
  // if (!tasks.length) {
  //   return <h3>No tasks Yet</h3>;
  // }

  return (
    <CssBaseline>
      <div>
        <h3 className='text-primary'>{title}</h3>
        <div className='flex-row justify-space-between my-4'>
          {task ? (
            <div key={task.content} className='col-12 col-xl-6'>
              <Container>
                <List>
                  <Card>
                    <div className='card mb-3'>
                      {/* <h4 className='card-header bg-dark text-light p-2 m-0'>
                      {task.username} <br />
                    </h4> */}
                      <Paper>
                        <h5 className='card-header bg-dark text-light p-2 m-0'>
                          {task.date} <br />
                        </h5>
                      </Paper>
                      <ListItem>
                        <ListItemIcon>
                          <AssignmentIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary='Starred'
                          primary={task.content}
                        />
                      </ListItem>
                    </div>
                  </Card>
                </List>
              </Container>
            </div>
          ) : (
            <div> No tasks has been created </div>
          )}
        </div>
      </div>
    </CssBaseline>
  );
};

export default TaskList;
