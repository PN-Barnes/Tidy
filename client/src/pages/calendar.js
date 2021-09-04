import React from 'react';
import { Typography } from '@material-ui/core';
import Calendar from '../components/calendar';
function CalendarPage() {
  return (
    <>
      <h1>Calendar</h1>
      <div className="App">
        <Calendar />
      </div>
    </>
  );
}

export default CalendarPage;
