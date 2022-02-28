import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import { NavBar } from "./NavBar";

import { AboutScreen } from './AboutScreen';
import { LoginScreen } from "./LoginScreen";
import { HomeScreen } from "./HomeScreen";



export const AppRouter = () => {
  return (
    <Router>
      <NavBar />
        <Routes>
                        <Route  path="/" element={ <HomeScreen /> } />
                        <Route  path="/about" element={ <AboutScreen />} />
                        <Route  path="/login" element={ <LoginScreen /> } />

                        <Route path="*" element={ <HomeScreen />} /> 
        </Routes>
    </Router>
  )
}
