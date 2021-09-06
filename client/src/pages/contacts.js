import React from 'react';
import { Typography } from '@material-ui/core';

import { useQuery } from '@apollo/client';
import { QUERY_MESSAGES, QUERY_USERS } from '../utils/queries';

import ContactList from '../components/contactList';

function Contacts() {
  // const { loading, data } = useQuery(QUERY_MESSAGES);

  // console.log(data);

  // const messages = data?.messages || [];

  const { loading, data } = useQuery(QUERY_USERS);

  const users = data?.users || [];

  return (
    // <div className='App'>
    //   <Typography variant='h1'>Contacts</Typography>
    //   <div>
    //     {loading ? (
    //       <div>Loading...</div>
    //     ) : (
    //       <ContactList
    //         events={users}
    //         title="Here's your current roster of users:"
    //       />
    //     )}

    //     {/* {users.map((user) => (
    //       <div>
    //         <p> Username: {user.username}</p>
    //         <p> First Name: {user.firstName}</p>
    //         <p> Last Name: {user.lastName} </p>
    //       </div>
    //     ))} */}
    //   </div>
    // </div>
    <main>
      <div className='flex-row justify-center'>
        <div className='col-12 col-md-10 my-3'>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ContactList
              users={users}
              title="Here's your current list of contacts:"
            />
          )}
        </div>
      </div>
    </main>
  );
}

export default Contacts;
