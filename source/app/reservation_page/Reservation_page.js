import React, {useRef, useState} from 'react';
import { My_Calendar } from "./Calendar";
import { From_until, Reservation_type, Next_link, NavBar_PIR } from './Common';
import { Party_title, Availability_title, Spaces_left } from './Availability_page';
import { Date_selector, Select_dates_title } from './Select_dates';
import {FormularioView} from "../form/Form"

/*
Function to show the page where the traveller will select the lot
*/

export const Parcel_page = ({UserData}) => {
  return (
    <div>
      <From_until date_from={UserData.start_date.toDateString()}
      date_until={UserData.end_date.toDateString()}/>
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
export const T_information = ({UserData}) => {
  return (
    <div>
      <From_until date_from={UserData.start_date.toDateString()}
      date_until={UserData.end_date.toDateString()}/>
      <br />
      <Reservation_type />
      <br />
      <NavBar_PIR selected={"traveller"}/>
      <br />
      {/*Jason's part goes here*/}
      <FormularioView UserData={UserData}  />
      <Next_link route_next='/reservation/review'
      route_back='/reservation/lot'/>
    </div>
  );
};

/*
Function to show the review page
*/

export const Review = ({UserData}) => {
  return (
    <div>
      <From_until date_from={UserData.start_date.toDateString()}
      date_until={UserData.end_date.toDateString()}/>
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
export const Availability_page = ({UserData}) => {
  let quantity = 100;
  return (
    <div>
      <From_until date_from={UserData.start_date.toDateString()}
      date_until={UserData.end_date.toDateString()}/>
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

export const Select_dates_page = ({UserData}) => {
  UserData.start_date = new Date();
  UserData.end_date = new Date();
  return (
    <div>
      <Select_dates_title />
      <br/>
      <Reservation_type />
      <Date_selector userData={UserData}/>
      <br/>
      <Next_link route_next='/reservation/availability'
      route_back='/' userData={UserData} check={1}/>
    </div>
  );
};