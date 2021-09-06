import React from 'react';
// import from '@material-ui/core';
import {
    Typography,
    Card,
    CardMedia,

  } from "@material-ui/core";

  // import styles
import useStyles from "./styles";

function ToDos(){
    const classes = useStyles();
    return(
        <div>
                <Typography variant="h1">
                    To Do's
                </Typography>
                <Typography variant="h5" color="Secondary">
                    PREMIUM SERVICE
                </Typography>
                <Typography variant="h6">
                upgrade to Premium Account
                </Typography>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/featured/?todolist/320x180"
                    title="PREMIUM SERVICE!!"
                  />
            </Card>
        </div>
    );
}

export default ToDos;