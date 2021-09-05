/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { AccountProvider } from './utils/GlobalState';
import { setContext } from '@apollo/client/link/context';
// import { createBrowserHistory } from 'history';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CalendarPage from './pages/calendar.js';
import Contacts from './pages/contacts.js';
import Events from './pages/events.js';
import Home from './pages/Home.js';
import Landing from './pages/landing.js';
import Photos from './pages/photos.js';
import Profile from './pages/profile.js';
import SignIn from './pages/SignIn.js';
import SignUp from './pages/Signup.js';
import Tasks from './pages/tasks.js';
import Team from './pages/team.js';
import Todos from './pages/todos.js';
import Weather from './pages/weather.js';
import PolishNav from './components/PolishNav';
import Dashboard from './pages/dashboard.js';
import NoMatch from './pages/NoMatch';
import Tests from './pages/testPage';

// import 'assets/scss/material-kit-react.scss?v=1.10.0';

// const httpLink = createHttpLink({
//   uri: '/graphql',
// });

// // Construct request middleware that will attach the JWT token to every request as an `authorization` header
// const authLink = setContext((_, { headers }) => {
//   // get the authentication token from local storage if it exists
//   const token = localStorage.getItem('id_token');
//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : '',
//     },
//   };
// });

// const client = new ApolloClient({
//   // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <AccountProvider>
            <PolishNav />
            <Switch>
              <Route exact path="/dashboard" component={Dashboard} />
              {/* <Route exact path="/calendar" component={Calendar} /> */}
              <Route exact path="/contacts" component={Contacts} />
              <Route exact path="/events" component={Events} />
              <Route exact path="/photos" component={Photos} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/team" component={Team} />
              <Route exact path="/todos" component={Todos} />
              <Route exact path="/signin" component={SignIn} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/tasks" component={Tasks} />
              <Route exact path="/tests" component={Tests} />
              <Route exact path="/weather" component={Weather} />
              <Route exact path="/calendar" component={CalendarPage} />
              <Route exact path="/" component={Landing} />
              <Route component={NoMatch} />
            </Switch>
          </AccountProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
