import React, { useState, useEffect } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { Typography, Container, Paper, Button, Card } from '@material-ui/core';

import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import { makeStyles } from '@material-ui/core/styles';

import Profile from '../components/profile';

import { useAccountContext } from '../utils/GlobalState';

import Auth from '../utils/auth';
import styled from '@emotion/styled';
// import styles
import useStyles from './styles';
import { render } from '@testing-library/react';

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
`;

function ToDos() {
  const classes = useStyles();

  const [state, dispatch] = useAccountContext();

  const { loading, data } = useQuery(QUERY_ME);
  const user = data?.me || {};

  // Successfully logs user data from database
  console.log('user', user);

  console.log("Fetched current user on re-render");

  // const { current_user } = state;


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
                  <Card className={classes.card} id='cardStyle'>
                    <Typography variant='h5'>
                      <div id='namesCard'>
                        <Profile
                          user={user}
                          title="Here's your current roster of events:"
                        />
                      </div>
                    </Typography>
                  </Card>
                )}
              </div>
            </Paper>
          </div>
        </Container>
      </StyleWrapper>
    </main>
  );
}

export default ToDos;
