import React from 'react';
import { IconName } from "react-icons/";
import { CiCalendar } from "react-icons/ci";
import { BrowserRouter as Router, Routes, Route, Link,
 useNavigate } from 'react-router-dom';

 /**
  * Component to handle what the From div will contain
  * If the user has already selected a date then it will
  * show the date, if not it will show the text
  */
const From_fill = ({date, handleClick}) => {
  if (date !== (new Date()).toDateString()) {
    return (
      <From_fill_date date={date} />
    );
  }
  return (
    <From_fill_text handleClick={handleClick}/>
  );
};

/**
  * Component to handle what the until div will contain
  * If the user has already selected a date then it will
  * show the date, if not it will show the text
  */
const Until_fill = ({date, handleClick}) => {
  if (date !== (new Date()).toDateString()) {
    return (
      <Until_fill_date date={date} />
    );
  }
  return (
    <Until_fill_text handleClick={handleClick}/>
  );
};

/**
 * Component to show the from text
 */
const From_fill_text = ({handleClick}) => {
  return (
    <div className='inline-block'>
      <p className= "inline-block pr-16">Desde</p>
      <button id='from' onClick={handleClick} className='mr-5'>
        <CiCalendar size="1.4rem" className='inline-block'/>
      </button>
    </div>
  );
};

/**
 * Component to show the from date
 */
const From_fill_date = ({date}) => {
  return (
    <div className='inline-block'>
      <p className= "inline-block pr-5 text-sm">{date}</p>
    </div>
  );
};

/**
 * Component to show the until text
 */
const Until_fill_text = ({handleClick}) => {
  return (
    <div className='inline-block'>
      <p className= "inline-block pr-16 ml-5">Hasta</p>
      <button id='until' onClick={handleClick}>
        <CiCalendar size="1.4rem" className='inline-block'/>
      </button>
    </div>
  );
};

/**
 * Component to show the until date
 */
const Until_fill_date = ({date}) => {
  return (
    <div className='inline-block'>
      <p className= "inline-block pl-5 text-sm">{date}</p>
    </div>
  );
};

/**
 * Component for the from_until rectangle which calls the
 * from and until fills.
 */
export const From_until = ({handleClick, date_from, date_until}) => {

  return (
    <div className="shadow-[1px_7px_15px_-4px_rgba(0,0,0,0.75)]
    bg-white float-left px-6 py-4 ml-[10%] mt-[3%]
    divide-x divide-slate-400">
      <From_fill date={date_from} handleClick={handleClick}/>
      <Until_fill date={date_until} handleClick={handleClick}/>
    </div>
  );
};

/**
 * This component shows the user what he is currently reserving
 * there are two types of reservations, either services or lot.
 */
export const Reservation_type = () => {
  let common_style = 'font-sans text-white text-sm rounded-none\
  bg-blueNormal p-4 w-80 hover:bg-bluePressed';
  let active_shadow = ' shadow-[0px_0px_14px_0px_rgba(0,0,0,0.50)_inset]';
  let active_color = ' bg-bluePressed';
  let style_lot = '';
  let style_kayak = 'mt-[0.05px] ';
  let link = new RegExp('\/reservation\/*')
  if (link.test(window.location.pathname)) {
    style_lot = common_style + active_shadow + active_color;
    style_kayak += common_style;
  } else {
    style_lot = common_style;
    style_kayak += common_style + active_shadow + active_color;
  }
  return (
    <div className="w-1/2 float-right mt-[4%]">
      <div className="bg-blueNormal w-80 ml-[30%]">
        <button onClick={()=>window.location.href = '/reservation'}
        className={style_lot}>
          Parcela
        </button>
        <hr className="bg-white w-48 ml-[21%]"/>
        <button onClick={()=>window.location.href = '/services'}
        className={style_kayak}>
          Reserva de Servicios
        </button>
      </div>
    </div>
  );
};

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
      mr-[20%] mb-[5%] px-8 py-2 shadow-lg hover:bg-YellowButton
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
        mr-[20%] mb-[5%] px-8 py-2 shadow-lg hover:bg-YellowButton
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