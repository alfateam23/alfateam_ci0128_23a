import React, { useState } from "react";
import Calendar from "react-calendar";
import './Calendar.css'

/**
 * Component to show the calendar
 */
export const My_Calendar = ({active, handleClick}) => {

  let style = "flex justify-center -translate-y-5";

  if (!active) {
    style += ' hidden';
  }

  // Select range only when start date is selected

  /*const [startDate, setStartDate] = useState(null);
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
  }*/

  return (
    <div className={style}>
      <Calendar onClickDay={(day) => handleClick(day)}
      prev2Label='PY' prevLabel='PM' nextLabel='NM'
      next2Label='NY' locale="en"/>
    </div>
  );
};
