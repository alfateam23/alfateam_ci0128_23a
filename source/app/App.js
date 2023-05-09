import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import {Availability_page, Parcel_page,
      Review,
      Select_dates_page,
      T_information} from './reservation_page/Reservation_page';
import { UserData } from './UserData';
import { Visitors } from './visitors/Visitors';
import { Page } from './reservation_page/Reservation_page';

/**
 * Home component, for now it just shows a button to send the user to the reserve
 * module
 */
const Home = () => {
   return (
      <div>
         <Link to="/reservation" className="bg-blue-500 hover:bg-blue-700
         text-white font-bold py-2 px-4 rounded">Reserva Ahora</Link>
      </div>
   );
}

/**
 * This is the component in charge of handling the routing for the whole
 * web application.
 */
const App = () => {
   const userData = new UserData();
  return (
   <div>
      <Routes>
         <Route exact path="/" element={<Home />} />
         <Route path="/reservation" element={<Select_dates_page
            UserData={userData}/>} />
         <Route path="/reservation/availability" element={<Availability_page
         UserData={userData} />} />
         <Route path="/reservation/lot" element={<Parcel_page
         UserData={userData} />} />
         <Route path="/reservation/info" element={<T_information
         UserData={userData} />}/>
         <Route path="/reservation/review" element={<Review
         UserData={userData} />}/>
         <Route path="/reservation" element={<Page />} />
         <Route path="/visitors" element={<Visitors />} />
      </Routes>
   </div>
  );
}

export default App;
