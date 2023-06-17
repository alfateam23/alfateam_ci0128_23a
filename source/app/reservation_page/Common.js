import React, {useState, useEffect} from 'react';
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
  userData, check, info, review, clickFunction}) => { 
  
  const navigate = useNavigate();

  const [sendReservation, setSendReservation] = useState(0);
  
  function checkDates (event) {
    event.preventDefault();
    if (userData.start_date !== '' &&
    userData.end_date !== '') {
      navigate(route_next);
    } else if (userData.area === 'Picnic' &&
    userData.start_date !== '') {
      navigate(route_next);
    } else {
      alert('Por favor digite las fechas que desea antes de continuar')
    }
  }

  
  useEffect(() => {
    function reservationSave(userData) {
      if (clickFunction && sendReservation === 1) {
        clickFunction(userData, userData.mail);
        //navigate(route_next);
      }
    }
    reservationSave(userData);
    setSendReservation(0)
  },[sendReservation]);

  if (check === 1) {
    return (
      <div className="bottom-5 absolute flex flex-row
      space-x-32 lg:space-x-96 justify-center items-center">
        <Link to={route_back}
        className="flex font-sans bg-YellowButtonP
        px-8 py-2 shadow-lg hover:bg-YellowButton">
          Atrás
        </Link>
        <Link to={route_next} onClick={checkDates} className="font-sans
        bg-YellowButtonP
        px-8 py-2 shadow-lg hover:bg-YellowButton">
          Siguiente
        </Link>
      </div>
    );
  } else if (info === 1) {
    return (
      <div className='flex flex-col'>
        <div className="">
          <Link to={route_back} className="font-sans bg-YellowButtonP float-left
          ml-[10%] mb-[5%] px-8 py-2 shadow-lg hover:bg-YellowButton
          inline-block">
            Atrás
          </Link>
        </div>
      </div>
    );
  } else if (review === 1) {
    return (
      <div className="mt-5 flex flex-row
      space-x-32 lg:space-x-96 justify-center items-center">
        <Link to={route_back}
        className="flex font-sans bg-YellowButtonP
        px-8 py-2 shadow-lg hover:bg-YellowButton">
          Atrás
        </Link>
        <Link onClick={()=>{
          setSendReservation(()=>1)}} className="font-sans
        bg-YellowButtonP
        px-8 py-2 shadow-lg hover:bg-YellowButton">
          Confirmar
        </Link>
      </div>
    );
  }
  return (
    <div className="mt-5 flex flex-row
    space-x-32 lg:space-x-96 justify-center items-center">
      <Link to={route_back}
      className="flex font-sans bg-YellowButtonP
      px-8 py-2 shadow-lg hover:bg-YellowButton">
        Atrás
      </Link>
      <Link to={route_next} className="font-sans
      bg-YellowButtonP
      px-8 py-2 shadow-lg hover:bg-YellowButton">
        Siguiente
      </Link>
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
  let traveller_style = '';
  let review_style = '';

  if (selected === 'traveller') {
    traveller_style = selected_style;
    review_style = non_selected_style;
  } else {
    review_style = selected_style;
    traveller_style = non_selected_style;
  }

  return (
    <div className="flex justify-center items-center
    bg-OrangeNavBar w-full pt-4">
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
  if (userData.area === "Camping") {
    return (
      <div className="flex flex-col justify-center items-center mt-10
      sm:flex-row sm:space-x-40 md:space-x-60">
        <div className="bg-white divide-x px-8 py-4 rounded-2xl
        lg:-translate-x-40">
          <div className="inline-block">
            <p className="mr-5">{userData.start_date.toDateString()}</p>
          </div>
          <div className="inline-block">
            <p className="ml-5">{userData.end_date.toDateString()}</p>
          </div>
        </div>
        <div className="bg-white px-8 py-4 rounded-2xl mt-4 sm:mt-0">
          <p>{userData.area}</p>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col justify-center items-center mt-10
    sm:flex-row sm:space-x-40 md:space-x-60">
      <div className="bg-white px-8 py-4 rounded-2xl
      lg:-translate-x-40">
        <div className="inline-block">
          <p className="mr-5">{userData.start_date.toDateString()}</p>
        </div>
      </div>
      <div className="bg-white px-8 py-4 rounded-2xl mt-4 sm:mt-0">
        <p>{userData.area}</p>
      </div>
    </div>
  );
};
