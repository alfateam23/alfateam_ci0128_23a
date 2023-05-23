import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import {
   Availability_page, Parcel_page,
   Review,
   Select_dates_page,
   T_information
} from './reservation_page/Reservation_page';
import { UserData } from './UserData';
import { Visitors } from './visitors/Visitors';
import { Page } from './reservation_page/Reservation_page';
import Dashboard from './admin_dashboard/Dashboard';
import DashboardHome from './admin_dashboard//dashboard_home';
import { useLocation } from 'react-router-dom';


/**
 * Temp navbar of project
 */
const Home = () => {
   return (
      <div className="background-color: rgb(254 243 199)" >
         <h1 className="flex justify-center items-center  text-4xl p-4"> navegation bar </h1>
         <ul className="hidden md:flex">
            <li className="p-4">
               <a className="transition ease-in-out hover:text-[#ffaf00] hover:duration-700 cursor-pointer" href="/Dashboard">Dashboard</a>
            </li>
            <li className="p-4">
               <a className="transition ease-in-out hover:text-[#ffaf00] hover:duration-700 cursor-pointer" href="/reservation">Reserva Ahora</a>
            </li>
         </ul>
      </div>
   );
}

/**
 * This is the component in charge of handling the routing for the whole
 * web application.
 */
const App = () => {
   const userData = new UserData();
   // Varaibles to determine location and set navbar
   const location = useLocation();
   const isDashboardPage = location.pathname === '/Dashboard';
   return (
      <div>
         {isDashboardPage ? <Dashboard /> : <Home />}
         <Routes>
            
            <Route path="/reservation" element={<Select_dates_page
               UserData={userData} />} />
            <Route path="/reservation/availability" element={<Availability_page
               UserData={userData} />} />
            <Route path="/reservation/lot" element={<Parcel_page
               UserData={userData} />} />
            <Route path="/reservation/info" element={<T_information
               UserData={userData} />} />
            <Route path="/reservation/review" element={<Review
               UserData={userData} />} />
            <Route path="/visitors" element={<Visitors />} />
            <Route path='/Dashboard' element={<Dashboard />} />
         </Routes>
      </div>
   );
}

export default App;
