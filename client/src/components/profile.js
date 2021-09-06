import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CssBaseline,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Container,
} from '@material-ui/core';

import AssignmentIcon from '@material-ui/icons/Assignment';

const ProfileList = ({ user, title }) => {
  if (!user) {
    return <h3>Please login</h3>;
  }

  return (
    <CssBaseline>
      <div>
        <h3 className='text-primary'>{title}</h3>
        <div className='flex-row justify-space-between my-4'>
          {
            <div key={user.username} className='col-12 col-xl-6'>
              <Container>
                <List>
                  <Card>
                    <div className='card mb-3'>
                      <h4 className='card-header bg-dark text-light p-2 m-0'>
                        {user.username} <br />
                      </h4>
                      <Paper>
                        <h5 className='card-header bg-dark text-light p-2 m-0'>
                          {user.email} <br />
                        </h5>
                      </Paper>
                      <ListItem>
                        <ListItemIcon>
                          <AssignmentIcon />
                        </ListItemIcon>
                        {user.events ? (
                          <div>
                            <h3>Here is a list of your events</h3>
                            <ListItemText
                              primary='Starred'
                              primary={user.events[0].content}
                              secondary={user.events[0].date}
                            />
                            {user.contacts ? (
                              <>
                                <h3>Here is a list of your contacts</h3>
                                <ListItemText primary={user.contacts[0]} />
                              </>
                            ) : (
                              <div> You have no contacts </div>
                            )}
                          </div>
                        ) : (
                          <div>You have no events yet</div>
                        )}
                      </ListItem>
                    </div>
                  </Card>
                </List>
              </Container>
            </div>
          }
        </div>
      </div>
    </CssBaseline>
  );
};

export default ProfileList;
