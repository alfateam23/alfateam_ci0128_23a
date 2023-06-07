import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import SendMail from "./SendEmail";

export const SaveReservation = (userData) => {
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
    console.log(res.json());
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