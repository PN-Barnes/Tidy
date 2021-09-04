import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import LoginIcon from "@material-ui/icons/AccountCircle";
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
  Container,
  Grid,
  // Link, // styling from Materil-UI
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Toolbar,
  Container,
} from "@material-ui/core";
import DraftsIcon from "@material-ui/icons/Drafts";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <List>
          <ul className="flex-row">
            <ListItem>
              <li className="mx-1">
                {/* this is not using the Link component to logout or user and then refresh the application to the start */}
                <ListItemText>
                  <a href="/" onClick={() => Auth.logout()}>
                    Sign Out
                  </a>
                </ListItemText>
              </li>
            </ListItem>
          </ul>
        </List>
      );
    } else {
      return (
        <List>
          <ul className="flex-row">
            <ListItem>
              <li className="mx-1">
                <ListItemIcon>
                  <DraftsIcon />
                </ListItemIcon>
                <ListItemText>
                  <Link to="/signup">Signup</Link>
                </ListItemText>
              </li>
            </ListItem>
            <ListItem>
              <li className="mx-1">
                <ListItemText>
                  <Link to="/signin">Login</Link>
                </ListItemText>
              </li>
            </ListItem>
          </ul>
        </List>
      );
    }
  }

  return (
    <Container>
      <header className="flex-row px-1">
        <h1>
          <Link to="/">
            <span role="img" aria-label="Tidy"></span>
            Tidy
          </Link>
        </h1>

        <nav>{showNavigation()}</nav>
      </header>
    </Container>
  );
}

export default Nav;
