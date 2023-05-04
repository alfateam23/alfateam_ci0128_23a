import { useState, useRef } from "react";
import { My_Calendar } from "./Calendar";
import { From_until } from "./Common";

export const Select_dates_title = () => {
  return (
    <div className="w-1/2 float-left mt-[3%]">
      <p className="font-lexend text-2xl
      ml-20 mt-0.5">Select dates</p>
      <hr className="ml-10 mr-24 bg-black h-0.5"/>
    </div>
  );
};

export const Date_selector = () => {
  const [active, setActive] = useState(false);
  const [date, setDate] = useState(new Date());
  const date_from = useRef(new Date());
  const date_until = useRef(new Date());

  function clickIcon(event) {
    event.currentTarget.id === 'until' &&
    date_from.current.toDateString() === (new Date()).toDateString()
    ? alert('Por favor, seleccione primero la fecha de inicio') : setActive(!active);
  }

  function calendarClick(day) {
    if (date_from.current.toDateString() === (new Date()).toDateString()) {
      date_from.current = day;
    } else if (date_until.current.toDateString() === (new Date()).toDateString()){
      date_until.current = day;
    }
    setActive(!active);
  }
  return (
    <div>
      <From_until handleClick={clickIcon}
      date_from={date_from.current.toDateString()}
      date_until={date_until.current.toDateString()} />
      <br/>
      <My_Calendar active={active}
      handleClick={calendarClick} />
    </div>
  );
};