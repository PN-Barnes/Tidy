import React from 'react';
import { Link } from 'react-router-dom';
// import SignIn from './pages/SignIn.js';
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
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import AirlineSeatFlatAngledIcon from '@material-ui/icons/AirlineSeatFlatAngled';

const ProfileList = ({ user, title }) => {
  if (JSON.stringify(user) === '{}') {
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
                        {user.firstName} {user.lastName}
                        <br />
                      </h4>
                      <Paper>
                        <h5 className='card-header bg-dark text-light p-2 m-0'>
                          {user.email} <br />
                        </h5>
                      </Paper>
                      <ListItem>
                        {user.events.length > 0 ? (
                          <div>
                            <ListItem>
                              <ListItemIcon>
                                <AssignmentIcon />
                              </ListItemIcon>
                              {/* <h3>Here is a list of your events</h3> */}
                              <ListItemText
                                primary='Starred'
                                primary='Here is a list of your events'
                              />
                            </ListItem>

                            <div
                              display='flex'
                              flexDirection='col'
                              flexWrap='nowrap'
                            >
                              {user.events.map((event) => (
                                <ListItem>
                                  <ListItemIcon>
                                    <CalendarTodayIcon />
                                  </ListItemIcon>
                                  <ListItemText
                                    primary={event.content}
                                    secondary={event.date}
                                  />
                                </ListItem>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <div>You have no events yet</div>
                        )}
                      </ListItem>
                    </div>
                  </Card>
                </List>
              </Container>

              <Container>
                <List>
                  <Card>
                    <div className='card mb-3'>
                      {/* <h4 className='card-header bg-dark text-light p-2 m-0'>
                        {user.firstName} {user.lastName}
                        <br />
                      </h4> */}
                      {/* <Paper>
                        <h5 className='card-header bg-dark text-light p-2 m-0'>
                          {user.email} <br />
                        </h5>
                      </Paper> */}

                      <ListItem>
                        {user.contacts.length > 0 ? (
                          <div>
                            <ListItem>
                              <ListItemIcon>
                                <AssignmentIcon />
                              </ListItemIcon>
                              {/* <h3>Here is a list of your events</h3> */}
                              <ListItemText
                                primary='Starred'
                                primary='Here is a list of your contacts'
                              />
                            </ListItem>

                            <div display='flex' flexDirection='col'>
                              {user.contacts.map((contact) => (
                                <ListItem>
                                  <ListItemIcon>
                                    <AirlineSeatFlatAngledIcon />
                                  </ListItemIcon>
                                  <ListItemText primary={contact} />
                                </ListItem>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <div> You have no contacts yet</div>
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
