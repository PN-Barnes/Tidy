import React from "react";
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
  Link, // styling from Materil-UI
  Paper,
  Toolbar,
  Container,
} from "@material-ui/core";

import { Link as RouterLink } from "react-router-dom"; // routing link

// import styles
import useStyles from "./styles";

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
                  <Link
                  to="/calendar"
                  component={RouterLink}
                  color="textSecondary"
                  variant="h5"
                  onClick={() => {
                  console.info("Home Request button hit");
               }}
          >
            <Typography variant="h6">VIEW</Typography>
          </Link>
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

            {/* PROFILE CARD */}
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
                    View
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            {/* CONTACTS CARD */}
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
                  <Typography>Team preview</Typography>
                </CardContent>
                <CardActions>
                  <Button size="sm" color="primary">
                    View
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            {/* PHOTOS CARD */}
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
                  <Typography>Team preview</Typography>
                </CardContent>
                <CardActions>
                  <Button size="sm" color="primary">
                    View
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            {/* WORK EVENTS CARD */}
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
                  <Typography>Team preview</Typography>
                </CardContent>
                <CardActions>
                  <Button size="sm" color="primary">
                    View
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            {/* DASHBOARD CARD */}
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

export default Landing;
