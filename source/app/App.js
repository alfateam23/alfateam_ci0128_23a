import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Page } from './reservation_page/Reservation_page';
import './App.css';

// Based on example from
// https://axios-http.com/docs/example

const axios = require('axios').default;

const Home = () => {
   const handleClick = () => {
      window.location.href = '/reservation';
   };

   var visitors;

   axios.get('/visitors', {

   })
      .then(function (response) {
         console.log(response);
         visitors = JSON.parse(response.data)
      })
      .catch(function (error) {
         console.log(error);
      })
      .finally(function () {
         console.log('finally');
      });

   return (
      <div>
         <button id="book_now" onClick={handleClick}>Book Now</button>
         <div>
         {visitors}
         </div>
      </div>
   );
}

const App = () => {
   return (
      <div>
         <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/reservation" element={<Page />} />
         </Routes>
      </div>
   );
}

export default App;
