/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
// import CssBaseline from '@material-ui/core/CssBaseline';
import {
  Typography,
  AppBar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Link,
  Paper,
  Toolbar,
  Container,
} from '@material-ui/core';

// get Tools icon
import { Pages } from '@material-ui/icons';

// import styles
import useStyles from './styles';

// import { spacing } from "@material-ui/system";

const App = () => {
  const classes = useStyles();

  return (
    <>
      {/* Header */}
      <CssBaseline />
      <AppBar position="relative" backgroundColor="alert">
        <Toolbar>
          <Pages className={classes.icon} />
          <Typography variant="h6">TIDY</Typography>

          {/* Signup button */}
          <Box mx="auto">
            <Link
              component="button"
              color="textSecondary"
              variant="h5"
              onClick={() => {
                console.info('SignUp Request button hit');
              }}
            >
              SignUp
            </Link>
          </Box>

          {/* Login button */}
          <Box>
            <Link
              component="button"
              color="textSecondary"
              variant="h5"
              onClick={() => {
                console.info('LogIn Request button hit');
              }}
            >
              LogIn
            </Link>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Body */}
      <main>
        <div className={classes.container}>
          <Container maxwidth="sm">
            {/* TIDY logo */}
            <Paper elevation={0} align="center" marginTop="50px">
              <img src="/logo.png" />
            </Paper>

            {/* Unused buttons */}
            {/* <div className={classes.button}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    See tools
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Second
                  </Button>
                </Grid>
              </Grid>
            </div> */}
          </Container>
        </div>
        <Container classname={classes.cardGrid} maxWidth="lg" align="center">
          <Grid container spacing={4}>
            {/* WEATHER CARD */}
            <Grid item>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/featured/?weather/320x180"
                  title="image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography variant="h5" gutterBottom>
                    Weather
                  </Typography>
                  <Typography>Weather preview</Typography>
                </CardContent>
                <CardActions>
                  <Button size="sm" color="primary">
                    View
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            {/* CALENDAR CARD */}
            <Grid item>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/featured/?calendar/320x180"
                  title="Calendar"
                />
                <CardContent className={classes.cardContent}>
                  <Typography variant="h5" gutterBottom>
                    Calendar
                  </Typography>
                  <Typography>Calendar preview</Typography>
                </CardContent>
                <CardActions>
                  <Button size="sm" color="primary">
                    View
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            {/* TODOS CARD */}
            <Grid item>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/featured/?words/320x180"
                  title="ToDo List"
                />
                <CardContent className={classes.cardContent}>
                  <Typography variant="h5" gutterBottom>
                    ToDo's
                  </Typography>
                  <Typography>ToDos preview</Typography>
                </CardContent>
                <CardActions>
                  <Button size="sm" color="primary">
                    View
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            {/* TEAM CARD */}
            <Grid item>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/featured/?team/320x180"
                  title="Team"
                />
                <CardContent className={classes.cardContent}>
                  <Typography variant="h5" gutterBottom>
                    Team
                  </Typography>
                  <Typography>Team preview</Typography>
                </CardContent>
                <CardActions>
                  <Button size="sm" color="primary">
                    View
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>

          {/* Welcome message */}
          <Typography
            variant="h6"
            align="center"
            color="textSecondary"
            paragraph
          >
            Welcome to your Dashboard! Here you can quickly and easily see an
            overview of each of your tools. Simply click on any of your tools
            below to drill into it.
          </Typography>
        </Container>
      </main>
    </>
  );
};

// ROUTER
// import { createBrowserHistory } from "history";
// import { Router, Route, Switch } from "react-router-dom";

// import "assets/scss/material-kit-react.scss?v=1.10.0";

// // pages for this product
// import Calendar from "pages/calendar.js";
// import Contacts from "pages/contacts.js";
// import Events from "pages/events.js";
// import Home from "pages/Home.js";
// import Landing from "pages/landing.js";
// import Photos from "pages/photos.js";
// import Profile from "pages/profile.js";
// import SignIn from "pages/Login.js/";
// import SignUp from "pages/Signup.js";
// import Tasks from "pages/tasks.js";
// import Team from "pages/team.js";
// import Todos from "pages/todos.js";
// import Weather from "pages/weather.js";

// var hist = createBrowserHistory();

// ReactDOM.render(
//   <Router history={hist}>
//     <Switch>
//       <Route path="/pages/calendar" component={pages} />
//       <Route path="/pages/contacts" component={contacts} />
//       <Route path="/pages/events" component={events} />
//       <Route path="/pages/home" component={Home} />
//       <Route path="/pages/landing" component={landing} />
//       <Route path="/pages/photos" component={photos} />
//       <Route path="/pages/profile" component={profile} />
//       <Route path="/pages/SignIn" component={SignIn} />
//       <Route path="/pages/Signup" component={SignUp} />
//       <Route path="/pages/tasks" component={tasks} />
//       <Route path="/pages/team" component={team} />
//       <Route path="/pages/todos" component={todos} />
//       <Route path="/" component={home} />
//     </Switch>
//   </Router>,
//   document.getElementById("root")
// );

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <StoreProvider>
            <Nav />
            <Switch>
              <Route exact path="/tidy/client/src/pages/Home.js" component={Home} />
              <Route exact path="/tidy/client/src/pages/SignIn.js" component={SignIn} />
              <Route exact path="/tidy/client/src/pages/Signup.js" component={SignUp} />
              <Route exact path="/tidy/client/src/pages/tasks.js" component={Tasks} />
              <Route exact path="/tidy/client/src/pages/todos.js" component={ToDo} />
              <Route exact path="/tidy/client/src/pages/weather.js" component={Weather} />
              <Route component={NoMatch} />
            </Switch>
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>

  );
}

export default App;

{/* <Header>
  <SignupButton>props
  </SignupButton>
  <LoginButton>

  </LoginButton>
</Header> */}
