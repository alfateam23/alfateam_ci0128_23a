import React, { useState } from "react";
import Calendar from "react-calendar";
import './Calendar.css'

export const My_Calendar = ({active, handleClick}) => {

  let style = "w-[24.7%] clear-left ml-[10%]\
  outline-1 outline-dashed outline-red-500";

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
