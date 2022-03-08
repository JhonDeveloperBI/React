import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import { login } from '../actions/auth';
import { JournalScreen } from '../components/journal/JournalScreen';
import { projectAuth } from '../firebase/fireabase-config';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {

   const dispatch = useDispatch();

  useEffect(() => {
      projectAuth.onAuthStateChanged( ( user ) =>{
        
        //console.log(user);
         if( user?.uid ){
           dispatch( login(user.uid, user.displayName) ) 
         }

      });

  }, [ dispatch ])  // only execute one 
  
  return (
    <Router>
      <div>
          <Switch>
              <Route 
                path="/auth"
                component={ AuthRouter } 
                />

                <Route
                exact 
                path="/"
                component={ JournalScreen } 
                />

                <Redirect to="/auth/login" />
          </Switch>
      </div>
    </Router>
  )
}
