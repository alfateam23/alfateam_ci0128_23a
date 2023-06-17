import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import SendMail from "./SendEmail";

export const activateModal = (openModal, setOpenModal) => {
  setOpenModal(!openModal);
};

export const checkEmail = async (modifyModalBody, id) => {
  let result = null;
  await fetch('/backend/insertReservation/checkEmail', {
    method: 'POST',
    body: JSON.stringify({
      id: id
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((res) => {
    if (!res.ok) {
      console.log('Network response was not ok');
    }
    return res.json();
  }).then((data) => {
    result = data;
    modifyModalBody(data)
  })
  .catch((error) => {
    console.error('Error sending email:', error);
  });
  return result;
};

/**
 * Saves a full reservations (meaning that it comes from
 * a new user)
 */
export const SaveReservationFull = (userData) => {
  fetch('/backend/insertReservation/', {
    method: 'POST',
    body: JSON.stringify({
      userData
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((res) => {
    if (!res.ok) {
      console.log('Network response was not ok');
    }
    fetch(`/backend/reservationCode/${userData.mail}`)
    .then((res) => {
      if (!res.ok) {
        console.log('Network response was not ok');
      }
      return res.json();
    })
    .then((data) => SendMail(userData, data[0].Codigo))
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });
};

/**
 * Saves a reservation from an user that is already on the database
 */
export const SaveReservationUser = (userData) => {
  fetch('/backend/insertReservation/oldUser', {
    method: 'POST',
    body: JSON.stringify({
      userData
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((res) => {
    if (!res.ok) {
      console.log('Network response was not ok');
    }
    fetch(`/backend/reservationCode/${userData.id}`)
    .then((res) => {
      if (!res.ok) {
        console.log('Network response was not ok');
      }
      return res.json();
    })
    .then((data) => SendMail(userData, data[0].Codigo))
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });
};