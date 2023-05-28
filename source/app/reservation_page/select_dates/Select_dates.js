import { useState, useEffect } from "react";
import { My_Calendar } from "../Calendar";
import { From_until } from "./From_until";

/**
 * Component for the title on the select dates page
 */
export const Select_dates_title = ({title}) => {
  return (
    <div className="flex justify-center flex-col
    mt-[3%]">
      <p className="flex justify-center font-lexend text-2xl
      max-w-xs mx-auto">
        {title}
      </p>
      <hr className="flex justify-center border border-black
      mt-2 max-w-md mx-auto w-full"/>
    </div>
  );
};

/**
 * This component shows the user what he is currently reserving
 * there are two types of reservations, either services or lot.
 */
export const Reservation_type = ({userData, handleTitleChange}) => {
  let common_style = 'font-sans text-white text-sm rounded-none\
  bg-blueNormal p-4 w-80 hover:bg-bluePressed';
  let active_shadow = ' shadow-[0px_0px_14px_0px_rgba(0,0,0,0.50)_inset]';
  let active_color = ' bg-bluePressed';
  const [styleLot, setStyleLot] = useState(common_style);
  const [stylePicnic, setStylePicnic] = useState('mt-[0.05px] ' +
                                                common_style);
  const [insideDivStyle, setInsideDivStyle] =
  useState('bg-blueNormal w-80 translate-y-[60px]');

  function activate_selection(id) {
    if (id === 1) { // lot
      setStyleLot(styleLot + active_shadow + active_color);
      handleTitleChange("Camping");
      setStylePicnic('mt-[0.05px] ' + common_style);
    } else if (id === 2) {
      setStylePicnic(stylePicnic + active_shadow + active_color);
      handleTitleChange("Picnic");
      setStyleLot(common_style);
    }
    setInsideDivStyle('bg-blueNormal w-80\
    transition-transform duration-500');
  };

  return (
    <div className="flex justify-center max-w-xs mx-auto">
      <div className={insideDivStyle}>
        <button onClick={() => activate_selection(1)}
        className={styleLot}>
          Parcela
        </button>
        <hr className="bg-white w-48 ml-[21%]"/>
        <button onClick={() => activate_selection(2)}
        className={stylePicnic}>
          Picnic
        </button>
      </div>
    </div>
  );
};

/**
 * Component in charge of checking when the user clicks a dates
 * and through variables, let the from_until component know
 * what to display.
 */
export const Date_selector = ({userData, activate}) => {
  const [active, setActive] = useState(false);
  const [selection, setSelection] = useState('');

  function clickIcon(event) {
    event.currentTarget.id === 'until' &&
    userData.start_date === ''
    ? alert('Por favor, seleccione primero la fecha de inicio') : setActive(!active);
    setSelection(event.currentTarget.id);
  }

  function calendarClick(day) {
    if (userData.start_date === '') {
      userData.start_date = day;
    } else if (userData.end_date === ''){
      userData.start_date > day ? alert('Seleccione una fecha final válida') :
      userData.end_date = day;
    } else if (selection === 'from' && userData.start_date instanceof Date){
      userData.end_date < day ? alert('Seleccione una fecha inicial válida') :
      userData.start_date = day;
    } else if (selection === 'until' && userData.end_date instanceof Date){
      userData.start_date > day ? alert('Seleccione una fecha final válida') :
      userData.end_date = day;
    }
    setActive(!active);
  }
  return (
    <div>
      <From_until handleClick={clickIcon}
      date_from={userData.start_date}
      date_until={userData.end_date}
      activate={activate} />
      <br/>
      <My_Calendar active={active}
      handleClick={calendarClick} />
    </div>
  );
};


/**
 * This component is for showing the initial reservation steps
 * select the type of reservation you want to do and the
 * dates of when you want to do this
 * 
 * The page state variable keeps track of when the user selects
 * the reservation, then the dates.
 */
export const Start_reservation = ({userData}) => {

  const [title, setTitle] = useState('Seleccione la reservación');
  const [selectedDate, setSelectedDate] = useState(0);

  const handleTitleChange = (id) => {
    userData.reservation_type = id;
    setSelectedDate(()=>1);
  };

  useEffect(() => {
    if (selectedDate) {
      setTitle('Seleccione la fecha');
    } else {
      setTitle('Seleccione la reservación');
    }
  }, [selectedDate]);


  return (
    <div className="flex flex-col space-y-7">
      <Select_dates_title title={title}/>
      <Reservation_type userData={userData}
      handleTitleChange={handleTitleChange}/>
      <Date_selector userData={userData}
      activate={selectedDate} />
    </div>
  );
};