import React from "react";
import useStyles from "../../pages/styles";
import {
  Typography,
  AppBar,
  Box,
  CssBaseline,
  Link,
  Toolbar,
} from "@material-ui/core";

// get Tools icon
import { Pages } from "@material-ui/icons";

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
              console.info("Gome Request button hit");
            }}
          >
            <Typography variant="h6">TIDY</Typography>
          </Link>

          {/* Signup button */}
          <Box mx="auto">
            <Link
              to="/signup"
              component={RouterLink}
              color="textSecondary"
              variant="h5"
              onClick={() => {
                console.info("SignUp Request button hit");
              }}
            >
              SignUp
            </Link>
          </Box>

          {/* Login button */}
          <Box>
          <Link
              to="/signin"
              component={RouterLink}
              color="textSecondary"
              variant="h5"
              onClick={() => {
                console.info("Login Request button hit");
              }}
            >
              Sign In
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default PolishNav;
