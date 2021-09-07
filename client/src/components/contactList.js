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
        <div className="flex-row justify-space-between my-4">
          <div key={contact.username} className="col-12 col-xl-6">
            <Container>
              <List>
                <Card>
                  <div className="card mb-3">
                    <h4 className="card-header bg-dark text-light p-0 m-0">
                      {contact.firstName} {contact.lastName} {contact.role}
                      
                      <Typography>username: {contact.username} <br /></Typography>
                    
                      <ListItem>
                      email: 
                        <a href="mailto:{contact.email}" target="_top">
                        {contact.email}
                        </a>
                      </ListItem>
                    
                    </h4>
                    <ListItem>
                      <ListItemIcon>
                        <AssignmentIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary="Starred"
                        primary="Here is a good place to jot down notes about each of your contacts.  Suggested information might include reminders about their birdthday, favorite music, or pet's name.  Click Add to Contacts to add this user to your Team."
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
