import React from 'react';
import { Typography } from '@material-ui/core';

function Weather(){
    return(
        <div className="App">
            <Typography variant="h1">
                Weather
            </Typography>
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