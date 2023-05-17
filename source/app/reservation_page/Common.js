import React from 'react';
import { IconName } from "react-icons/";
import { CiCalendar } from "react-icons/ci";
import { BrowserRouter as Router, Routes, Route, Link,
 useNavigate } from 'react-router-dom';

/*outline-1 outline-dashed outline-black-500*/

/**
 * This component shows the button that will send the user to the next
 * step in the reservation.
 * If the button is at the step where the user has to select dates,
 * the button first checks that the user has selected the dates,
 * if the dates are empty then it sends an alert, if not it continues
 */
export const Next_link = ({route_next, route_back,
  userData, check, info}) => {
  
  const navigate = useNavigate();
  
  function checkDates (event) {
    event.preventDefault();
    if (userData.start_date.toDateString() !== (new Date()).toDateString() &&
    userData.end_date.toDateString() !== (new Date()).toDateString()) {
      navigate(route_next);
    } else {
      alert('Por favor digite las fechas que desea antes de continuar')
    }
  }

  if (check != null) {
    return (
      <footer className="bottom-0 absolute w-full">
      <Link to={route_back}
      className="font-sans bg-YellowButtonP float-left
      ml-[10%] mb-[5%] px-8 py-2 shadow-lg hover:bg-YellowButton
      inline-block">
        Atrás
      </Link>
      <Link to={route_next} onClick={checkDates} className="font-sans bg-YellowButtonP float-right
      mr-[10%] mb-[5%] px-8 py-2 shadow-lg hover:bg-YellowButton
      inline-block">
        Siguiente
      </Link>
    </footer>
    );
  } else if (info != null) {
    return (
      <div className='flex flex-col'>
        <footer className="">
          <Link to={route_back} className="font-sans bg-YellowButtonP float-left
          ml-[10%] mb-[5%] px-8 py-2 shadow-lg hover:bg-YellowButton
          inline-block">
            Atrás
          </Link>
        </footer>
      </div>
    );
  }
  return (
    <div className='flex flex-col'>
      <footer className="">
        <Link to={route_back} className="font-sans bg-YellowButtonP float-left
        ml-[10%] mb-[5%] px-8 py-2 shadow-lg hover:bg-YellowButton
        inline-block">
          Atrás
        </Link>
        <Link to={route_next} className="font-sans bg-YellowButtonP float-right
        mr-[10%] mb-[5%] px-8 py-2 shadow-lg hover:bg-YellowButton
        inline-block">
          Siguiente
        </Link>
      </footer>
    </div>
  );
};

/*Navbar for lot Information and Review
PIR*/
/**
 * This navbar shows the steps to select the lot, add the information
 * of the visitors and where they will review the information so 
 * the reservation can eventually be confirmed.
 */
export const NavBar_PIR = ({selected}) => {
  let selected_style = 'inline-block mx-2 text-center\
  font-sans w-72 text-lg py-3 rounded-t-2xl\
  shadow-[0px_1px_3px_0px_rgba(0,0,0,0.50)_inset]';
  let non_selected_style = "inline-block mx-2 text-center\
  font-sans w-72 py-3 rounded-t-2xl\
  shadow-[0px_1px_1px_0px_rgba(0,0,0,0.50)]\
  hover:shadow-[0px_1px_3px_0px_rgba(0,0,0,0.50)_inset]\
  hover:rounded-t-2xl";
  let lot_style = '';
  let traveller_style = '';
  let review_style = '';

  if (selected === 'lot') {
    lot_style = selected_style;
    traveller_style = review_style = non_selected_style;
  } else if (selected === 'traveller') {
    traveller_style = selected_style;
    lot_style = review_style = non_selected_style;
  } else {
    review_style = selected_style;
    lot_style = traveller_style = non_selected_style;
  }

  return (
    <div className="flex justify-center items-center
    bg-OrangeNavBar w-full mt-48 pt-4">
      <Link to="/reservation/lot" className={lot_style}>
        Seleccion de Parcela
      </Link>
      <Link to="/reservation/info" className={traveller_style}>
        Información del Visitante
      </Link>
      <Link to="/reservation/review" className={review_style}>
        Revisión
      </Link>
    </div>
  );
};

export const Dates_type_info = ({userData}) => {
  let dates = (userData.end_date !== (new Date()).toDateString()) ?
  'Fechas Seleccionadas: ' + userData.start_date.toDateString()
  + ' - ' + userData.end_date.toDateString() :
  'Fecha: ' + userData.start_date.toDateString();
  let type = 'Tipo de reservación\n' + userData.reservation_type === 1 ?
  'Parcela' : 'Picnic';

  return (
    <div className='flex flex-row justify-center items-center space-x-96
    mt-10 outline-1 outline-dashed outline-red-500 bg-gr'>
      <div className='bg-gray-800 text-white'>
        {dates}
      </div>
      <div className=''>
        {}
      </div>
    </div>
  );
};