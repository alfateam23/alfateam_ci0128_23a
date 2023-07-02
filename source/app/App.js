import React, { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import {
   Availability_page,
   Review,
   Select_dates_page,
   T_information
} from './reservation_page/Reservation_page';
import { UserData } from './UserData';
import { Visitors } from './visitors/Visitors';
import Lista from './admin_dashboard/pages/Lista/Lista';
import { useLocation } from 'react-router-dom';
import {
   LandingPage,
   AboutPage,
   ActivitiesPage,
   ContactPage
} from './landing_page/LandingPage'

/* import for Centro de Control */
import RootLayout from './admin_dashboard/layout/RootLayout';
import Settings from './admin_dashboard/pages/Settings';
import Home from './admin_dashboard/pages/Home';
import Tarifas from './admin_dashboard/pages/Tarifas';
import TarifasEditar from './admin_dashboard/pages/TarifasEditar';
import Reports from './admin_dashboard/pages/Reports';
import Users from './admin_dashboard/pages/users/usersList';
import Horarios from './admin_dashboard/pages/Horarios';
import UsersEdit from './admin_dashboard/pages/users/userListEdit';
import UserCreate from './admin_dashboard/pages/users/UserCreate';

/* Authentication */
import Login from './authentication/login';
import withAuth from './authentication/withAuth';
const AuthenticatedRootLayout = withAuth(RootLayout);

const AdminApp = () => {
   const userData = new UserData();
   return (
      <div>
         <Routes>
            <Route path="/" element={<Login />} />
            <Route element={<AuthenticatedRootLayout />}>
               <Route path="/home" element={<Home />} />
               <Route path="/lista" element={<Lista />} />
               <Route path="/settings" element={<Settings />} />
               <Route path="/reservation" element={<Select_dates_page UserData={userData} />} />
               <Route path="/reservation/availability" element={<Availability_page UserData={userData} />} />
               <Route path="/reservation/info" element={<T_information UserData={userData} />} />
               <Route path="/reservation/review" element={<Review UserData={userData} />} />
               <Route path='/tarifas' element={<Tarifas />} />
               <Route path='users' element={<Users />} />
               <Route path='/tarifas/editar/:TipoProcedencia/:TipoVisita/:Estatus/:CategoriaPago' element={<TarifasEditar />} />
               <Route path='/users/editar/:Cedula' element={<UsersEdit/>} />
               <Route path='/users/create' element={<UserCreate/>} />
               <Route path='/reports' element={<Reports />} />
               <Route path='/Horarios' element={<Horarios />} />
               <Route path="/login" element={<Login />} />
            </Route>
         </Routes>
      </div>
   );
}

const CustomerApp = () => {
   const userData = new UserData();
   return (
      <div>
         <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/activities" element={<ActivitiesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/reservation" element={<Select_dates_page UserData={userData} />} />
            <Route path="/reservation/availability" element={<Availability_page UserData={userData} />} />
            <Route path="/reservation/info" element={<T_information UserData={userData} />} />
            <Route path="/reservation/review" element={<Review UserData={userData} />} />
            <Route path="/visitors" element={<Visitors />} />
         </Routes>
      </div>
   );
}

/**
 * This is the component in charge of handling the routing for the whole
 * web application.
 */
const App = () => {
   const runAdminApp = true; // Change for either admin or guest mode
   if (runAdminApp) {
      return (AdminApp());
   } else {
      return (CustomerApp());
   }
}

export default App;
