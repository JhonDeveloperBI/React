import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import { JournalScreen } from '../components/journal/JournalScreen';
import { projectAuth } from '../firebase/fireabase-config';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {

  useEffect(() => {
      projectAuth.onAuthStateChanged( ( user ) =>{
        
        console.log(user);
      })
  }, [])
  
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
