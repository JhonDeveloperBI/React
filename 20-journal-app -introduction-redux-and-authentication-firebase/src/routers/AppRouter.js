import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Switch
} from 'react-router-dom';
import { login } from '../actions/auth';
import { JournalScreen } from '../components/journal/JournalScreen';
import { projectAuth } from '../firebase/fireabase-config';
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

   const dispatch = useDispatch();

   const [ checking, setChecking ] = useState(true);
   const [ isLoggedIn, setIsLoggedIn ] = useState(false);
   

  useEffect(() => {
      projectAuth.onAuthStateChanged( ( user ) =>{
        
        //console.log(user);
         if( user?.uid ){
           dispatch( login(user.uid, user.displayName) )
           setIsLoggedIn( true ); 
         }else{
          setIsLoggedIn( false ); 
         }
         
         setChecking(false);

      });

  }, [ dispatch, setChecking, setIsLoggedIn ])  // only execute one 


  if(checking){
    return(
      <h1> Espere ...</h1>
    )
  }
  
  return (
    <Router>
      <div>
          <Switch>
          <PublicRoute 
                        path="/auth"
                        component={ AuthRouter }
                        isAuthenticated={ isLoggedIn }
                    />

                    <PrivateRoute 
                        exact
                        isAuthenticated={ isLoggedIn }
                        path="/"
                        component={ JournalScreen }
                    />

                <Redirect to="/auth/login" />
          </Switch>
      </div>
    </Router>
  )
}
