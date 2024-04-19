import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EventModal = ({ isOpen, onClose, handleAddEvent }) => {
  const [newEvent, setNewEvent] = useState({
    title: "",
    start: new Date(),
    end: new Date(),
  });

  // Function to clear the input fields
  const clearFields = () => {
    setNewEvent({ title: "", start: new Date(), end: new Date() });
  };

  // Function to handle adding the event
  const handleSubmit = () => {
    handleAddEvent(newEvent);
    clearFields();
    onClose(); // Close the modal after adding the event
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div
        className="absolute inset-0 bg-black opacity-25"
        onClick={onClose}
      ></div>
      <div className="bg-white rounded-lg p-8 max-w-md">
        <span
          className="absolute top-0 right-0 text-gray-600 cursor-pointer"
          onClick={onClose}
        >
          &times;
        </span>
        <input
          type="text"
          placeholder="Add Title"
          className="w-full mb-4 p-2 border border-gray-300 rounded"
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
        <div className="flex mb-4">
          <DatePicker
            placeholderText="Start Date"
            className="w-full p-2 border border-gray-300 rounded mr-2"
            selected={newEvent.start}
            onChange={(start) => setNewEvent({ ...newEvent, start })}
          />
          <DatePicker
            placeholderText="End Date"
            className="w-full p-2 border border-gray-300 rounded"
            selected={newEvent.end}
            onChange={(end) => setNewEvent({ ...newEvent, end })}
          />
        </div>
        <button
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={handleSubmit} // Call handleSubmit function on button click
        >
          Add Event
        </button>
      </div>
    </div>
  );
};

export default EventModal;
