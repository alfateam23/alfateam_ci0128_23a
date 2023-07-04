import React, {useState, useEffect} from 'react';
import { IconName } from "react-icons/";
import { CiCalendar } from "react-icons/ci";
import { BrowserRouter as Router, Routes, Route, Link,
 useNavigate } from 'react-router-dom';


export const NextButtonSelectDates = ({route_back, route_next,
checkDates}) => {
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
}

export const NextButtonInfoPage = ({route_back}) => {
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
}

export const NextButtonReviewPage = ({route_back, setSendReservation}) => {
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

export const RegularNextButton = ({route_back, route_next}) => {
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
}


