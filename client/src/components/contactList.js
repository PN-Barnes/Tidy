import React from 'react';
import {
  Typography,
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

const ContactList = ({ contact }) => {
  // if (!users.length) {
  //   return <h3>No contacts Yet</h3>;
  // }

  return (
    <CssBaseline>
      <div>
        {/* <h3 className='text-primary'>{title}</h3> */}
        <div className='flex-row justify-space-between my-4'>
          <div key={contact.username} className='col-12 col-xl-6'>
            <Container>
              <List>
                <Card>
                  <div className='card mb-3'>
                    <h4 className='card-header bg-dark text-light p-2 m-0'>
                      {contact.firstName} <br />
                    </h4>
                    <Paper>
                      <h5 className='card-header bg-dark text-light p-2 m-0'>
                        {contact.lastName} <br />
                      </h5>
                    </Paper>
                    <ListItem>
                      <ListItemIcon>
                        <AssignmentIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary='Starred'
                        primary='Placeholder information about the card.  Here we will serve up the description of the event so users can read about what the event is all about.  For exampe, details about the event location, organizers, and general details that describe the event more fully, so attendees can best know what to expect.'
                      />
                    </ListItem>
                  </div>
                </Card>
              </List>
            </Container>
          </div>
        </div>
      </div>
    </CssBaseline>
  );
};

export default ContactList;
