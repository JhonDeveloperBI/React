import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DashboardRoutes } from './DashboardRoutes';
import { LoginScreen } from '../components/login/LoginScreen';


export const AppRouter = () => {
  return (
    <BrowserRouter>
        <h1>Welcome to React Router !</h1>
        <Routes>
             <Route path="/login" element={<LoginScreen />} />

             <Route path="/*" element={<DashboardRoutes />} />
        </Routes>
    </BrowserRouter>
  )
}
