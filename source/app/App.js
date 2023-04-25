import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {Page} from './reservation_page/Reservation_page';
import './App.css';

const Home = () => {
   const handleClick = () => {
      window.location.href = '/reservation';
   };

   return (
      <div>
         <button id="book_now" onClick={handleClick}>Book Now</button>
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
