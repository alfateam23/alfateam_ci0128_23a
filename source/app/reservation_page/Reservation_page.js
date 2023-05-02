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

export const Parcel_page = () => {
  return (
    <div>
      <From_until />
      <br />
      <Reservation_type />
      <br />
      <NavBar_PIR />
    </div>
  );
};

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
      <Next_link route='/reservation/parcel'/>
    </div>
  );
};

export const Select_dates_page = () => {
  return (
    <div>
      <Select_dates_title />
      <br/>
      <Reservation_type />
      <From_until />
      <br/>
      <My_Calendar />
      <br/>
      <Next_link route='/reservation/availability'/>
    </div>
  );
};