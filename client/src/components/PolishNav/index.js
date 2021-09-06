import React from "react";
import Auth from "../../utils/auth";
import useStyles from "../../pages/styles";
import {
  Typography,
  AppBar,
  Box,
  CssBaseline,
  Link,
  ListItemText,
  Toolbar
} from "@material-ui/core";

// get Tools icon
import { Pages } from "@material-ui/icons";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import FingerprintIcon from '@material-ui/icons/Fingerprint';

import { Link as RouterLink } from "react-router-dom"; // routing link

const PolishNav = function () {
  const classes = useStyles();

  return (
    <>
      {/* Header */}
      <CssBaseline />
      <AppBar position="relative" backgroundColor="alert">
        <Toolbar>
          <Pages className={classes.icon} />

          {/* TIDY home button */}
          <Link
            to="/"
            component={RouterLink}
            color="textSecondary"
            variant="h5"
            onClick={() => {
              console.info("Home Request button hit");
            }}
          >
            <Typography variant="h6">TIDY</Typography>
          </Link>

            <Box mx="auto">
            <Typography variant="h6">
                {/* <ArrowUpwardIcon className={classes.icon} /> */}
                Welcome!
              </Typography>
            </Box>

          {/* Signup button */}
          <Box mx="10px">
            <Link
              to="/signup"
              component={RouterLink}
              color="textSecondary"
              variant="h5"
              onClick={() => {
                console.info("SignUp Request button hit");
              }}
            >
              <Typography variant="h6">
                <ArrowUpwardIcon className={classes.icon} />
                {/* Sign Up */}
              </Typography>
            </Link>
          </Box>

          {/* Login button */}
          <Box mx="10px">
            <Link
              to="/signin"
              component={RouterLink}
              color="textSecondary"
              variant="h5"
              onClick={() => {
                console.info("Login Request button hit");
              }}
            >
              <Typography variant="h6">
                <FingerprintIcon className={classes.icon} />
                {/* Sign In */}
              </Typography>
            </Link>
          </Box>

          {/* SignOut button */}
          <Box mx="10px">

            <Link
              to="/signout"
              component={RouterLink}
              color="textsecondary"
              variant="h5"
              onClick={() => {
                console.info("Signout button hit")
                Auth.logout()
              }}
              >
                <Typography variant="h6">
                  <ExitToAppIcon className={classes.icon} />
                  {/* <a href="/" onClick={() => Auth.logout()}> */}
                    {/* Sign Out */}
                  {/* </a> */}
                </Typography>
            </Link>


          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default PolishNav;

{/* <Link
              to="/" onClick={() => Auth.logout()}
              // component={RouterLink}
              color="textSecondary"
              variant="h5"
              onClick={() => {
                console.info("Signout Request button hit");
              }}
            >
              <Typography variant="h6">
                <ExitToAppIcon className={classes.icon} />
                Sign Out
                </Typography>
            </Link> */}