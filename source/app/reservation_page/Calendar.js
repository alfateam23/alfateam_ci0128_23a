import React, { useState } from "react";
import Calendar from "react-calendar";
import './Calendar.css'

export const My_Calendar = () => {
  const [value, onChange] = useState(new Date());

  /* to change what is in each button */
  // left year
  /*document.querySelector(
  '.react-calendar__navigation .react-calendar__navigation__arrow:first-of-type')
    .innerHTML = 'Prev Year';
  // left month
  document.querySelector(
  '.react-calendar__navigation__arrow.react-calendar__navigation__prev-button')
  .innerHTML = 'Prev Month';

  //right month
  document.querySelector(
  '.react-calendar__navigation .react-calendar__navigation__next-button')
    .innerHTML = 'Next Month';
  //right year
  document.querySelector(
  '.react-calendar__navigation .react-calendar__navigation__arrow:last-of-type')
    .innerHTML = 'Next Year';*/

  // Select range only when start date is selected

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  function handleDateChange(date) {
    if (startDate && endDate) {
      setStartDate(date);
      setEndDate(null);
    } else if (startDate && date > startDate) {
      setEndDate(date);
    } else {
      setStartDate(date);
    }
  }

  return (
    <div className="w-[24.7%] clear-left ml-[10%]
    outline-1 outline-dashed outline-red-500">
      <Calendar selectRange={startDate !== null}
      value={startDate !== null ? [startDate, endDate] : null}
      onChange={handleDateChange} locale="en"/>
    </div>
  );
};
