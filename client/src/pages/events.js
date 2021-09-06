import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_EVENTS } from '../utils/queries';
import { makeStyles } from '@material-ui/core/styles';
import EventList from '../components/eventList';

import { ADD_ATTENDEE, ADD_EVENT } from '../utils/mutations';

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
  const { loading, data } = useQuery(QUERY_EVENTS);
  const events = data?.workEvents || [];

  // console.log('data', data);

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

  const handleJoinEvent = (_id) => {
    try {
      console.log(_id);
      const { attendeeData } = addAttendee({
        variables: { _id },
        onCompleted: (attendeeData) => {
          console.log({ attendeeData });
        },
      });

      // console.log(attendeeData);

      const event = attendeeData?.workEvents || {};

      // console.log('data', yo);
      console.log('event', event);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <main>
      <div className='flex-row justify-center'>
        <div className='col-12 col-md-10 my-3'>
          {loading ? (
            <div>Loading...</div>
          ) : (
            events.map((event) => (
              <div>
                <EventList
                  event={event}
                  // title="Here's your current roster of events:"
                />
                <button onClick={handleJoinEvent.bind(null, event._id)}>
                  Join this event
                </button>
              </div>
            ))
          )}
          <div>
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
      </div>
    </main>
  );
};

export default Events;
