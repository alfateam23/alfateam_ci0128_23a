import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import {Availability_page, Parcel_page,
      Review,
      Select_dates_page,
      T_information} from './reservation_page/Reservation_page';

const Home = () => {
   const handleClick = () => {
      window.location.href = '/reservation';
   };

   return (
      <div>
         <Link to="/reservation" className="bg-blue-500 hover:bg-blue-700
         text-white font-bold py-2 px-4 rounded">Book Now</Link>
      </div>
   );
}

const App = () => {
  return (
   <div>
      <Routes>
         <Route exact path="/" element={<Home />} />
         <Route path="/reservation" element={<Select_dates_page />} />
         <Route path="/reservation/availability" element={<Availability_page />} />
         <Route path="/reservation/parcel" element={<Parcel_page />} />
         <Route path="/reservation/info" element={<T_information />}/>
         <Route path="/reservation/review" element={<Review />}/>
      </Routes>
   </div>
  );
}

export default App;
