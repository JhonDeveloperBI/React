import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { DashboardRoutes } from './DashboardRoutes';
import { LoginScreen } from '../components/login/LoginScreen';

import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';


export const AppRouter = () => {
  return (
    <BrowserRouter>
        <h1>Welcome to React Router !</h1>
        <Routes>
             
             {/*<Route path="/login" element={<LoginScreen />} /> */}
             <Route path="/login" element={
                <PublicRoute>
                      <LoginScreen />
                </PublicRoute>   
             } 
             /> 

             <Route path="/*" element={
             <PrivateRoute>
                   <DashboardRoutes />     
              </PrivateRoute> 
               } />

            {/* <Route path="/*" element={<DashboardRoutes />} />*/}
        </Routes>
    </BrowserRouter>
  )
}
