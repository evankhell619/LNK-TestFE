// CalendarComponent.jsx
import React from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

const CalendarComponent = ({ localizer, events }) => {
  return (
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500, margin: "50px" }}
    />
  );
};

export default CalendarComponent;
