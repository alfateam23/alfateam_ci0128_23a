import React from 'react';
import { IconName } from "react-icons/";
import { CiCalendar } from "react-icons/ci";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

export const From_until = () => {
  return (
    <div className="shadow-[1px_7px_15px_-4px_rgba(0,0,0,0.75)]
    bg-white float-left px-6 py-4 ml-[10%] mt-[3%]
    divide-x divide-slate-400">
      <div className='inline-block'>
        <p className= "inline-block pr-16">From</p>
        <CiCalendar size="1.4rem" className='inline-block mr-5'/>
      </div>
      <div className='inline-block'>
        <p className= "inline-block pr-16 ml-5">Until</p>
        <CiCalendar size="1.4rem" className='inline-block'/>
      </div>
    </div>
  );
};

export const Reservation_type = () => {
  return (
    <div className="w-1/2 float-right mt-[4%]">
      <div className="bg-blueNormal w-80 ml-[30%]">
        <button className="font-sans text-white text-sm rounded-none
        bg-blueNormal p-4 w-80 hover:bg-bluePressed
        active:shadow-[0px_0px_14px_0px_rgba(0,0,0,0.50)_inset]">
          Parcel
        </button>
        <hr className="bg-white w-48 ml-[21%]"/>
        <button className="font-sans text-white text-sm rounded-none
        bg-blueNormal p-4 w-80 mt-[0.05px]
        hover:bg-bluePressed
        active:shadow-[0px_0px_14px_0px_rgba(0,0,0,0.50)_inset]">
          Kayak Booking
        </button>
      </div>
    </div>
  );
};

/*outline-1 outline-dashed outline-black-500*/

export const Next_link = ({route}) => {
  return (
    <footer className="bottom-0 absolute w-full">
      <Link to={route} className="font-sans bg-YellowButtonP float-right
      mr-[20%] mb-[5%] px-8 py-2 shadow-lg hover:bg-YellowButton">
        Next
      </Link>
    </footer>
  );
};

/*Navbar for Parcel Information and Review
PIR*/

/*

<div className='bg-OrangeNavBar w-full mt-48
outline-1 outline-dashed outline-red-500'>
  <div className='inline-block
  ml-44 w-80 text-xl h-12 rounded-t-2xl
  shadow-[0px_1px_4px_0px_rgba(0,0,0,0.50)_inset]'>
  <Link to="/reservation/parcel" className='flex justify-center
  items-center'>
      Parcel Selection
  </Link>
  </div>
  <Link to="/reservation/info" className='inline-block ml-32
  text-center w-60
  outline-1 outline-dashed outline-red-500'>
    Traveller's Information
  </Link>
  <Link to="/reservation/review" className='inline-block ml-32'>
    Review
  </Link>
</div>

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
  let parcel_style = '';
  let traveller_style = '';
  let review_style = '';

  if (selected === 'parcel') {
    parcel_style = selected_style;
    traveller_style = review_style = non_selected_style;
  } else if (selected === 'traveller') {
    traveller_style = selected_style;
    parcel_style = review_style = non_selected_style;
  } else {
    review_style = selected_style;
    parcel_style = traveller_style = non_selected_style;
  }

  return (
    <div className="flex justify-center items-center
    bg-OrangeNavBar w-full mt-48 pt-4">
      <Link to="/reservation/parcel" className={parcel_style}>
        Parcel Selection
      </Link>
      <Link to="/reservation/info" className={traveller_style}>
        Traveller's Information
      </Link>
      <Link to="/reservation/review" className={review_style}>
        Review
      </Link>
    </div>
  );
};