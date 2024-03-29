import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { My_Calendar } from "./Calendar";
import { Next_link, NavBar_PIR, Dates_type_info } from './Common';
import { From_until } from './select_dates/From_until'
import { Party_title,
  Availability_title,
  Spaces_left } from './Availability_page';
import { Start_reservation, Reservation_type } from './select_dates/Select_dates';
import {FormularioView} from "../form/Form";
import {Review_info} from "../review_page/Review_page";
import { checkEmail, activateModal, SaveReservationFull,
SaveReservationUser, updateUser } from '../form/SaveReservation';
import { MyModal } from './Modal';
import { ModalManager, ManageReservationOldUser } from './HelperFunctions';

/*
Function to add the form for the traveller to fill
*/
export const T_information = ({UserData}) => {
  return (
    <div className='flex flex-col space-y-8'>
      <Dates_type_info userData={UserData} />
      <br />
      <NavBar_PIR selected={"traveller"}/>
      <br />
      <FormularioView UserData={UserData}  />
      <Next_link route_next='/reservation/review'
      route_back='/reservation/availability' info={1}/>
    </div>
  );
};

/*
Function to show the review page
*/

export const Review = ({UserData}) => {
  const [openModal, setOpenModal] = useState(false);
  const [modalBody, setModalBody] = useState(null);
  const [storedUserData, setStoredUserData] = useState(null);
  const navigate = useNavigate();
  function modifyModalBody(value) {
    setModalBody(value);
  }

  async function modifyModal() {
    await ModalManager(openModal,setOpenModal,modifyModalBody,
      UserData,setStoredUserData,setModalBody,
      navigate, reservationOldUser);
  }
  // update = 0 doesn't want to update the details
  // update = 1 wants to update details
  async function reservationOldUser(update) {
    ManageReservationOldUser(update, storedUserData, UserData,
      setModalBody, navigate);
  }

  return (
    <div className='flex flex-col space-y-8'>
      <Dates_type_info userData={UserData} />
      <NavBar_PIR selected={"review"}/>
      <br />
      <Review_info UserData={UserData}/>
      <Next_link route_next='/' clickFunction={modifyModal}
      review={1} userData={UserData}
      route_back='/reservation/info' />
      <MyModal title={'Terminando Reservacion'} body={modalBody}
      openModal={openModal} setOpenModal={setOpenModal}
      acceptButtonFunc={reservationOldUser}
      declineButtonFunc={reservationOldUser}
      showFooter={(modalBody &&
        modalBody.result !== undefined &&
        modalBody.result.userInfo !== undefined &&
        modalBody.result.userInfo.EmailExists !== undefined)
        || modalBody === "Correo Enviado!"
      ? 0 : 1}/>
    </div>
  );
};

/*
Page where the user can see the availability of the dates selected for the visit
*/
export const Availability_page = ({UserData}) => {
  const [count, setCount] = useState(0);
  return (
    <div className='flex flex-col justify-center items-center'>
      <Dates_type_info userData={UserData} />
      <Availability_title />
      <br />
      <Spaces_left count={count}
      userData={UserData}/>
      <br />
      <Party_title count={count}
      setCount={setCount}
      UserData={UserData}/>
      <Next_link route_next='/reservation/info'
      route_back='/reservation/'/>
    </div>
  );
};

/**
 * Page where the user can set the dates of the visit
 */

export const Select_dates_page = ({UserData}) => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <Start_reservation userData={UserData}/>
      <Next_link route_next='/reservation/availability'
      route_back='/' userData={UserData} check={1}/>
    </div>
  );
};