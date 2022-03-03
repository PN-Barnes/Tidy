import React, { useState } from 'react';
import {  Typography, Container, Paper, Button, Card  } from '@material-ui/core';
import styled from '@emotion/styled';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_EVENTS, QUERY_ME } from '../utils/queries';
import { makeStyles } from '@material-ui/core/styles';
import EventList from '../components/eventList';

import { useAccountContext } from '../utils/GlobalState';

import { ADD_ATTENDEE, ADD_EVENT } from '../utils/mutations';
import { UPDATE_CURRENT_USER } from '../utils/actions';

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
  .namesCard {
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

const Events = () => {

  const [state, dispatch] = useAccountContext();

  const { loading, data } = useQuery(QUERY_EVENTS);
  const events = data?.workEvents || [];

  const current_user = useQuery(QUERY_ME).data.me;
  console.log("current_user", current_user);

  const [formState, setFormState] = useState({
    content: '',
  });

  const [addEvent, { error }] = useMutation(ADD_EVENT);
  const [addAttendee, { error: attendeeErr, data: attendeeData }] =
    useMutation(ADD_ATTENDEE);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // On form submit, perform mutation and pass in form data object as arguments
    // It is important that the object fields are match the defined parameters in `ADD_THOUGHT` mutation
    try {
      const { data } = addEvent({
        variables: { ...formState },
      });

      const event = data?.event || [];

      if (event) {
        alert('Successfully created an event and added it to current user');
      }
      // console.log('event', event);

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

  const handleJoinEvent = async (_id) => {
    try {
      console.log(_id);
      const { data } = await addAttendee({
        variables: { _id },
      });

      console.log("data:", data);

      dispatch({
        type: UPDATE_CURRENT_USER,
        current_user: current_user
      });

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <main>
      <StyleWrapper>
        <Container>
      <div className='flex-row justify-center'>
      <Paper id='paperStyle'>
        <div className='col-12 col-md-10 my-3'>
          {loading ? (
            <div>Loading...</div>
          ) : (
            events.map((event) => (
              <Card id='cardStyle'>
              <div class='namesCard'>
                <EventList
                  event={event}
                  // title="Here's your current roster of events:"
                />
                <button onClick={handleJoinEvent.bind(null, event._id)}>
                  Join this event
                </button>
              </div>
              </Card>
            ))
          )}
          <div class='namesCard'>
            <form
              className='flex-row justify-center justify-space-between-md align-center'
              onSubmit={handleFormSubmit}
            >
              <div className='col-12'>
                <textarea
                  name='content'
                  placeholder='Add an event'
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
                  Add Event
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
};

export default Events;
