import React, { useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { ADD_ATTENDEE } from '../utils/mutations';
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

const EventList = ({ event, title }) => {
  // if (!events.length) {
  //   return <h3>No events Yet</h3>;
  // }

  // const isAttendee = getCondition();

  // const handleJoinEvent = async (event) => {
  //   console.log(event);
  //   // console.log(ev)
  //   const addAttendee = useMutation(ADD_ATTENDEE, {
  //     skip:
  //   } );
  //   useEffect(() => {

  // })
  // };

  return (
    <CssBaseline>
      <div>
        {/* <h3 className='text-primary'>{title}</h3> */}
        <div className='flex-row justify-space-between my-4'>
          <div key={event._id} className='col-12 col-xl-6'>
            <Container>
              <List>
                <Card>
                  <div className='card mb-3'>
                    <h4 className='card-header bg-dark text-light p-2 m-0'>
                      {event.date} <br />
                    </h4>
                    <Paper>
                      <h5 className='card-header bg-dark text-light p-2 m-0'>
                        {event.content} <br />
                      </h5>
                    </Paper>
                    <ListItem>
                      <ListItemIcon>
                        <AssignmentIcon />
                      </ListItemIcon>
                      <ListItemText primary='Starred' primary={event.content} />
                    </ListItem>
                  </div>
                </Card>
                {/* <button onClick={handleJoinEvent({ event })}>
                  Join this event
                </button> */}
              </List>
            </Container>
          </div>
        </div>
      </div>
    </CssBaseline>
  );
};

export default EventList;
