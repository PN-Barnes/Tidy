import React from "react";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Link, // styling from Materil-UI
  Paper,
  Container,
} from "@material-ui/core";

import { Link as RouterLink } from "react-router-dom"; // routing link

// import styles
import useStyles from "./styles";

import Draggable from "react-draggable";

const Landing = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      {/* Body */}
      <main>
        <div className={classes.container}>
          <Container maxwidth="sm">
            {/* TIDY logo */}
            <Paper elevation={0} align="center" margin="50px">
              <img src="/logo.png" alt="TIDY logo" />
            </Paper>
          </Container>
        </div>
        <Container classname={classes.cardGrid} maxWidth="lg" align="center" padding="10px">
          <Grid container spacing={4} align="center">
            {/* WEATHER CARD */}
            <Grid item>
              <Draggable>
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
                      <Link
                        to="/weather"
                        component={RouterLink}
                        color="textSecondary"
                        variant="h5"
                        onClick={() => {
                          console.info("Weather Request button hit");
                        }}
                      >
                        <Typography variant="h6">VIEW</Typography>
                      </Link>
                    </Button>
                  </CardActions>
                </Card>
              </Draggable>
            </Grid>

            {/* CALENDAR CARD */}
            <Draggable>
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
                  <Link
                  to="/calendar"
                  component={RouterLink}
                  color="textSecondary"
                  variant="h5"
                  onClick={() => {
                  console.info("Calendar Request button hit");
               }}
          >
            <Typography variant="h6">VIEW</Typography>
          </Link>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            </Draggable>

            {/* TODOS CARD */}
            <Draggable>
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
                  <Typography>All of the things I need To Do</Typography>
                </CardContent>
                <CardActions>
                  <Button size="sm" color="primary">
                  <Link
                  to="/todos"
                  component={RouterLink}
                  color="textSecondary"
                  variant="h5"
                  onClick={() => {
                    console.info("ToDo's Request button hit");
                  }}
          >
            <Typography variant="h6">VIEW</Typography>
          </Link>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            </Draggable>

            {/* TEAM CARD */}
            <Draggable>
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
                  <Typography>Who's on the Team</Typography>
                </CardContent>
                <CardActions>
                  <Button size="sm" color="primary">
                  <Link
                  to="/team"
                  component={RouterLink}
                  color="textSecondary"
                  variant="h5"
                  onClick={() => {
                    console.info("Team Request button hit");
                  }}
          >
            <Typography variant="h6">VIEW</Typography>
          </Link>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            </Draggable>

            {/* PROFILE CARD */}
            <Draggable>
            <Grid item>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/featured/?profile/320x180"
                  title="Profile"
                />
                <CardContent className={classes.cardContent}>
                  <Typography variant="h5" gutterBottom>
                    Profile
                  </Typography>
                  <Typography>My Profile</Typography>
                </CardContent>
                <CardActions>
                  <Button size="sm" color="primary">
                  <Link
                  to="/profile"
                  component={RouterLink}
                  color="textSecondary"
                  variant="h5"
                  onClick={() => {
                    console.info("Profile Request button hit");
                  }}
          >
            <Typography variant="h6">VIEW</Typography>
          </Link>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            </Draggable>

            {/* CONTACTS CARD */}
            <Draggable>
            <Grid item>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/featured/?contacts/320x180"
                  title="Contacts"
                />
                <CardContent className={classes.cardContent}>
                  <Typography variant="h5" gutterBottom>
                    Contacts
                  </Typography>
                  <Typography>All of my Contacts</Typography>
                </CardContent>
                <CardActions>
                  <Button size="sm" color="primary">
                  <Link
                  to="/contacts"
                  component={RouterLink}
                  color="textSecondary"
                  variant="h5"
                  onClick={() => {
                    console.info("Contacts Request button hit");
                  }}
          >
            <Typography variant="h6">VIEW</Typography>
          </Link>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            </Draggable>

            {/* PHOTOS CARD */}
            <Draggable>
            <Grid item>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/featured/?photos/320x180"
                  title="Photos"
                />
                <CardContent className={classes.cardContent}>
                  <Typography variant="h5" gutterBottom>
                    Photos
                  </Typography>
                  <Typography>Upload and view my Photos</Typography>
                </CardContent>
                <CardActions>
                  <Button size="sm" color="primary">
                  <Link
                  to="/photos"
                  component={RouterLink}
                  color="textSecondary"
                  variant="h5"
                  onClick={() => {
                    console.info("Photos Request button hit");
                  }}
          >
            <Typography variant="h6">VIEW</Typography>
          </Link>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            </Draggable>

            {/* WORK EVENTS CARD */}
            <Draggable>
            <Grid item>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/featured/?work/320x180"
                  title="Work Events"
                />
                <CardContent className={classes.cardContent}>
                  <Typography variant="h5" gutterBottom>
                    Work Events
                  </Typography>
                  <Typography>Upcoming Events I need to attend</Typography>
                </CardContent>
                <CardActions>
                  <Button size="sm" color="primary">
                  <Link
                  to="/events"
                  component={RouterLink}
                  color="textSecondary"
                  variant="h5"
                  onClick={() => {
                    console.info("work events Request button hit");
                }}
          >
            <Typography variant="h6">VIEW</Typography>
          </Link>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            </Draggable>

            {/* DASHBOARD CARD */}
            <Draggable>
            <Grid item>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/featured/?dashboard/320x180"
                  title="Dashboard"
                />
                <CardContent className={classes.cardContent}>
                  <Typography variant="h5" gutterBottom>
                    Dashboard
                  </Typography>
                  <Typography>My Dashboard</Typography>
                </CardContent>
                <CardActions>
                  <Button size="sm" color="primary">
                  <Link
                  to="/dashboard"
                  component={RouterLink}
                  color="textSecondary"
                  variant="h5"
                  onClick={() => {
                    console.info("Dashboard Request button hit");
                  }}
          >
            <Typography variant="h6">VIEW</Typography>
          </Link>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            </Draggable>
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
            to drill into it.  Also, feel free to drag these cards around wherever the hell you like!
          </Typography>
        </Container>
      </main>
    </>
  );
};

export default Landing;
