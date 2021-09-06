import React from 'react';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import { formatDate } from '@fullcalendar/react';
// allows style wrapper to be created
import styled from '@emotion/styled';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!


export const StyleWrapper = styled.div`
  .fc {
    background-image: 
      radial-gradient(rgba(0, 255, 0, 0.4),
      rgba(0, 20, 0, 0.7)),
      url("../../logo1920_42.png");
      background-repeat: no-repeat;
      background-size: 100%;
      background-color: rgba(0, 100, 50, 0.5);
  },

  .fc .fc-col-header-cell-cushion {
    
    padding-top: 2px;
    padding-bottom: 2px;
    font-size: 1.4em;
    text-align: center;
    border: 2px solid rgba(100, 200, 150, 0.5);
    border-radius: 12px;
  }
`

export default function Calendar() {
  return (

    <StyleWrapper>
      <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
    </StyleWrapper>
  );
}
