import React, {useRef, useState} from 'react';
import { My_Calendar } from "./Calendar";
import { Next_link, NavBar_PIR } from './Common';
import { From_until } from './select_dates/From_until'
import { Party_title, Availability_title, Spaces_left } from './Availability_page';
import { Start_reservation, Reservation_type } from './select_dates/Select_dates';
import { Parcelas } from "./Parcelas";
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
      <Parcelas UserData={UserData}/>
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
      <FormularioView UserData={UserData}  />
      <Next_link route_next='/reservation/review'
      route_back='/reservation/lot' info={1}/>
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
      <Party_title UserData={UserData}/>
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
      <Start_reservation userData={UserData}/>
      <br/>
      <Next_link route_next='/reservation/availability'
      route_back='/' userData={UserData} check={1}/>
    </div>
  );
};