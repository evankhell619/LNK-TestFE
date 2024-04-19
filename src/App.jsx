import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, getDay, parse, startOfWeek } from "date-fns";
import CalendarComponent from "./components/CalendarComponent";
import EventModal from "./components/EventModal";

import enUS from "date-fns/locale/en-US";
import Button from "./components/Elements/Button/Button";

const locales = {
  "en-US": enUS,
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const initialEvents = [
  {
    title: "Big Meeting",
    allDay: true,
    start: new Date(2021, 6, 0),
    end: new Date(2021, 6, 0),
  },
  {
    title: "Vacation",
    start: new Date(2021, 6, 7),
    end: new Date(2021, 6, 10),
  },
  {
    title: "Conference",
    start: new Date(2021, 6, 20),
    end: new Date(2021, 6, 23),
  },
];

const handleLogout = () => {
  localStorage.removeItem("token");
  window.location.href = "/login";
};
function App() {
  const [allEvents, setAllEvents] = useState(initialEvents);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddEvent = (newEvent) => {
    setAllEvents([...allEvents, newEvent]);
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        <Button variant="ml-5 bg-black" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="App p-4">
        <h1 className="text-3xl mb-4">Calendar</h1>
        <Button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={() => setIsModalOpen(true)}
        >
          Create Event
        </Button>
        <EventModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          handleAddEvent={handleAddEvent}
        />
        <CalendarComponent localizer={localizer} events={allEvents} />
      </div>
    </>
  );
}

export default App;
