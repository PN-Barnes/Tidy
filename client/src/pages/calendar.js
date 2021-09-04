import React from 'react';
import { Typography } from '@material-ui/core';
import Calendar from '../components/calendar';
function CalendarPage() {
  return (
    <>
    <Typography variant="h1"></Typography>
      <h1>Calendar</h1>
      <div className="App">
        <Calendar />
        </Typography>
      </div>
    </>
  );
}

export default CalendarPage;
