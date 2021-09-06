import React from 'react';
// import { Typography } from '@material-ui/core';
import {
    Typography,
    Card,
    CardMedia,

  } from "@material-ui/core";

//   import { Link as RouterLink } from "react-router-dom"; // routing link

  // import styles
import useStyles from "./styles";

function Weather() {
    const classes = useStyles();
    return (
        <div>
                <Typography variant="h1">
                    Weather
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
                    image="https://source.unsplash.com/featured/?storm/320x180"
                    title="PREMIUM SERVICE!!"
                  />
            </Card>
        </div>
    );
}

// NEXT TRY:
// function getWeather (){
// const Weather = require('weather');
// const appID = 'hSIsvdPiUuS0MroUFhc6'; // here.com appID
// const appCode = 'OqIA2X1TH-n3d9o9vzoWNuaU--lewChhXiHLNU2_D3I'; // here.com appCode
// const { URL } = require('url');
// const myUrl = new URL('https://www.weatherwx.com/weather-js-current/us/ny/new+york.js');
// const myUrlString = myUrl.toString();
// const weather = new Weather({
//         appID,
//         appCode
//     });
//         weather.now(myUrlString).then((results) => {
//             console.log(results);
//         });
//         return (
//             <div>
//                 <h1>Weather</h1>
//             </div>
//         )
    
// }

export default Weather;