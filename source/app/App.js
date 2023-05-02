import React from 'react';
import Parcelas from './reservation_page/Parcelas';

//import { Routes, Route } from 'react-router-dom';
//import {Page} from './reservation_page/Reservation_page';

/* const Home = () => {
   const handleClick = () => {
      window.location.href = '/reservation';
   };

   return (
      <div>
         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleClick}>Book Now</button>
      </div>
   );
} */

const App = () => {
  return (
   <div>
      <Parcelas />
   </div>
  );
}

export default App;
