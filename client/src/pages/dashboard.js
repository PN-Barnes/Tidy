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
                  <Typography>My Dashbpard</Typography>
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
           to drill into it.
          </Typography>
        </Container>
      </main>
    </>
  );
};

export default Landing;


// import React from 'react';
// import AppBar from '@material-ui/core/AppBar';
// import Button from '@material-ui/core/Button';
// import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Grid from '@material-ui/core/Grid';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';
// import Link from '@material-ui/core/Link';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const useStyles = makeStyles((theme) => ({
//   icon: {
//     marginRight: theme.spacing(2),
//   },
//   heroContent: {
//     backgroundColor: theme.palette.background.paper,
//     padding: theme.spacing(8, 0, 6),
//   },
//   heroButtons: {
//     marginTop: theme.spacing(4),
//   },
//   cardGrid: {
//     paddingTop: theme.spacing(8),
//     paddingBottom: theme.spacing(8),
//   },
//   card: {
//     height: '100%',
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   cardMedia: {
//     paddingTop: '56.25%', // 16:9
//   },
//   cardContent: {
//     flexGrow: 1,
//   },
//   footer: {
//     backgroundColor: theme.palette.background.paper,
//     padding: theme.spacing(6),
//   },
// }));

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// export default function Album() {
//   const classes = useStyles();

//   return (
//     <React.Fragment>
//       <CssBaseline />
//       <AppBar position="relative">
//         <Toolbar>
//           <BusinessCenterIcon className={classes.icon} />
//           <Typography variant="h6" color="inherit" noWrap>
//             Dashboard
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <main>
//         {/* Hero unit */}
//         <div className={classes.heroContent}>
//           <Container maxWidth="sm">
//             <Typography
//               component="h1"
//               variant="h2"
//               align="center"
//               color="textPrimary"
//               gutterBottom
//             >
//               Dashboard
//             </Typography>
//             <Typography
//               variant="h5"
//               align="center"
//               color="textSecondary"
//               paragraph
//             >
//               Something short and leading about the collection below—its
//               contents, the creator, etc. Make it short and sweet, but not too
//               short so folks don&apos;t simply skip over it entirely.
//             </Typography>
//             <div className={classes.heroButtons}>
//               <Grid container spacing={2} justifyContent="center">
//                 <Grid item>
//                   <Button variant="contained" color="primary">
//                     Main call to action
//                   </Button>
//                 </Grid>
//                 <Grid item>
//                   <Button variant="outlined" color="primary">
//                     Secondary action
//                   </Button>
//                 </Grid>
//               </Grid>
//             </div>
//           </Container>
//         </div>
//         <Container className={classes.cardGrid} maxWidth="md">
//           {/* End hero unit */}
//           <Grid container spacing={4}>
//             {cards.map((card) => (
//               <Grid item key={card} xs={12} sm={6} md={4}>
//                 <Card className={classes.card}>
//                   <CardMedia
//                     className={classes.cardMedia}
//                     image="https://source.unsplash.com/random"
//                     title="Image title"
//                   />
//                   <CardContent className={classes.cardContent}>
//                     <Typography gutterBottom variant="h5" component="h2">
//                       Heading
//                     </Typography>
//                     <Typography>
//                       This is a media card. You can use this section to describe
//                       the content.
//                     </Typography>
//                   </CardContent>
//                   <CardActions>
//                     <Button size="small" color="primary">
//                       View
//                     </Button>
//                     <Button size="small" color="primary">
//                       Edit
//                     </Button>
//                   </CardActions>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//       </main>
//       {/* Footer */}
//       <footer className={classes.footer}>
//         <Typography variant="h6" align="center" gutterBottom>
//           Footer
//         </Typography>
//         <Typography
//           variant="subtitle1"
//           align="center"
//           color="textSecondary"
//           component="p"
//         >
//           Something here to give the footer a purpose!
//         </Typography>
//         <Copyright />
//       </footer>
//       {/* End footer */}
//     </React.Fragment>
//   );
// }
