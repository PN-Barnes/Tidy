import React from 'react';
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
} from '@material-ui/core';



// import styles
import useStyles from './styles';



const Landing = () => {
  const classes = useStyles();

  return (
    <>
    <CssBaseline />
      {/* Body */}
      <main>
        <div className={classes.container}>
          <Container maxwidth='sm'>
            {/* TIDY logo */}
            <Paper elevation={0} align='center' marginTop='50px'>
              <img src='/logo.png' alt='TIDY logo'/>
            </Paper>
          </Container>
        </div>
        <Container classname={classes.cardGrid} maxWidth='lg' align='center'>
          <Grid container spacing={4}>
            {/* WEATHER CARD */}
            <Grid item>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image='https://source.unsplash.com/featured/?weather/320x180'
                  title='image title'
                />
                <CardContent className={classes.cardContent}>
                  <Typography variant='h5' gutterBottom>
                    Weather
                  </Typography>
                  <Typography>Weather preview</Typography>
                </CardContent>
                <CardActions>
                  <Button size='sm' color='primary'>
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
                  image='https://source.unsplash.com/featured/?calendar/320x180'
                  title='Calendar'
                />
                <CardContent className={classes.cardContent}>
                  <Typography variant='h5' gutterBottom>
                    Calendar
                  </Typography>
                  <Typography>Calendar preview</Typography>
                </CardContent>
                <CardActions>
                  <Button size='sm' color='primary'>
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
                  image='https://source.unsplash.com/featured/?words/320x180'
                  title='ToDo List'
                />
                <CardContent className={classes.cardContent}>
                  <Typography variant='h5' gutterBottom>
                    ToDo's
                  </Typography>
                  <Typography>ToDos preview</Typography>
                </CardContent>
                <CardActions>
                  <Button size='sm' color='primary'>
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
                  image='https://source.unsplash.com/featured/?team/320x180'
                  title='Team'
                />
                <CardContent className={classes.cardContent}>
                  <Typography variant='h5' gutterBottom>
                    Team
                  </Typography>
                  <Typography>Team preview</Typography>
                </CardContent>
                <CardActions>
                  <Button size='sm' color='primary'>
                    View
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>

          {/* Welcome message */}
          <Typography
            variant='h6'
            align='center'
            color='textSecondary'
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
