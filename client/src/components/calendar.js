import React from 'react';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import { formatDate } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!

export default function Calendar() {
  return <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />;
}
