import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { Typography } from '@material-ui/core';

import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import { makeStyles } from '@material-ui/core/styles';

import Profile from '../components/profile';

import Auth from '../utils/auth';

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

function ToDos() {
  // const { username: useParam } = useParams();

  // console.log(useParams());

  // const { loading, data } = useQuery(useParam ? QUERY_USER : QUERY_ME, {
  //   variables: { username: useParam },
  // });

  // const user = data?.me || data?.user || {};

  const { loading, data } = useQuery(QUERY_ME);
  const user = data?.me || {};

  // Successfully logs user data from database
  console.log('user', user);

  return (
    // <div className='App'>
    //   <Typography variant='h1'>Profile</Typography>
    //   {/* {users.map((user) => (
    //     <div>
    //       <p>{user.username}</p>
    //       <p>{user.email}</p>
    //       <p>{user.role}</p>
    //       {user.events.map((event) => (
    //         <p>{event._id}</p>
    //       ))}
    //     </div>
    //   ))} */}
    // </div>
    <main>
      <div className='flex-row justify-center'>
        <div className='col-12 col-md-10 my-3'>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <Profile
              user={user}
              title="Here's your current roster of events:"
            />
          )}
        </div>
      </div>
    </main>
  );
}

export default ToDos;
