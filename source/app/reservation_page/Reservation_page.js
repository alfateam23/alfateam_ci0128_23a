import React, {useState} from 'react';
import { My_Calendar } from "./Calendar";
import { From_until, Reservation_type, Next_link, NavBar_PIR } from './Common';
import { Party_title, Availability_title, Spaces_left } from './Availability_page';

const Select_dates_title = () => {
  return (
    <div className="w-1/2 float-left mt-[3%]">
      <p className="font-lexend text-2xl
      ml-20 mt-0.5">Select dates</p>
      <hr className="ml-10 mr-24 bg-black h-0.5"/>
    </div>
  );
};

/*
Function to show the page where the traveller will select the lot
*/

export const Parcel_page = () => {
  return (
    <div>
      <From_until />
      <br />
      <Reservation_type />
      <br />
      <NavBar_PIR selected={"lot"}/>
      <br />
      {/*Jose's part goes here*/}
      <Next_link route_next='/reservation/info'
      route_back='/reservation/availability'/>
    </div>
  );
};

/*
Function to add the form for the traveller to fill
*/
export const T_information = () => {
  return (
    <div>
      <From_until />
      <br />
      <Reservation_type />
      <br />
      <NavBar_PIR selected={"traveller"}/>
      <br />
      {/*Jason's part goes here*/}
      <Next_link route_next='/reservation/review'
      route_back='/reservation/lot'/>
    </div>
  );
};

/*
Function to show the review page
*/

export const Review = () => {
  return (
    <div>
      <From_until />
      <br />
      <Reservation_type />
      <br />
      <NavBar_PIR selected={"review"}/>
      <br />
      <Next_link route_next='/'
      route_back='/reservation/info' />
    </div>
  );
};

/*
Page where the user can see the availability of the dates selected for the visit
*/
export const Availability_page = () => {
  let quantity = 100;
  return (
    <div>
      <From_until />
      <br />
      <Reservation_type />
      <br />
      <Availability_title />
      <br />
      <Spaces_left quantity={quantity}/>
      <br />
      <Party_title />
      <Next_link route_next='/reservation/lot'
      route_back='/reservation/'/>
    </div>
  );
};

/**
 * Page where the user can set the dates of the visit
 */

export const Select_dates_page = () => {
  const [active, setActive] = useState(false);
  function handleClick() {
    setActive(!active);
  }

  return (
    <div>
      <Select_dates_title />
      <br/>
      <Reservation_type />
      <From_until handleClick={handleClick} />
      <br/>
      <My_Calendar active={active}/>
      <br/>
      <Next_link route_next='/reservation/availability'
      route_back='/'/>
    </div>
  );
};