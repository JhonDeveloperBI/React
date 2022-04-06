import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import { startChecking } from '../actions/auth';
import { LoginScreen } from '../components/auth/LoginScreen';
import { CalendarScreen } from '../components/calendar/CalendarScreen';

export const AppRouter = () => {

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch( startChecking())
  }, [dispatch])
  
  
  return (
    <BrowserRouter>
     <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/" element={<CalendarScreen />} />
        
        <Route path="*" element={<LoginScreen />} />
    </Routes> 
    </BrowserRouter>
  )
}
