import { useState, useRef } from "react";
import { My_Calendar } from "./Calendar";
import { From_until } from "./Common";

/**
 * Component for the title on the select dates page
 */
export const Select_dates_title = () => {
  return (
    <div className="w-1/2 float-left mt-[3%]">
      <p className="font-lexend text-2xl
      ml-20 mt-0.5">Seleccionar Fechas</p>
      <hr className="ml-10 mr-24 bg-black h-0.5"/>
    </div>
  );
};

/**
 * Component in charge of checking when the user clicks a dates
 * and through variables, let the from_until component know
 * what to display.
 */
export const Date_selector = ({userData}) => {
  const [active, setActive] = useState(false);

  function clickIcon(event) {
    event.currentTarget.id === 'until' &&
    userData.start_date.toDateString() === (new Date()).toDateString()
    ? alert('Por favor, seleccione primero la fecha de inicio') : setActive(!active);
  }

  function calendarClick(day) {
    if (userData.start_date.toDateString() === (new Date()).toDateString()) {
      userData.start_date = day;
    } else if (userData.end_date.toDateString() === (new Date()).toDateString()){
      userData.start_date > day ? alert('Seleccione una fecha final válida') :
      userData.end_date = day;
    }
    setActive(!active);
  }
  return (
    <div>
      <From_until handleClick={clickIcon}
      date_from={userData.start_date.toDateString()}
      date_until={userData.end_date.toDateString()} />
      <br/>
      <My_Calendar active={active}
      handleClick={calendarClick} />
    </div>
  );
};