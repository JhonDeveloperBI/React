import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import {  startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';
import { useForm } from '../hooks/useForm';
import isEmail from 'validator/lib/isEmail';
import { removeError, setError } from '../../actions/ui';

export const LoginScreen = () => {

  const dispatch =useDispatch();
  const { msgError, loading } = useSelector(state => state.ui);

  console.log( loading)

  const [formValues, handleInputChange] = useForm({
    email:'test@gmail.com',
    password:'1234'
  });

const { email, password} = formValues;

const handleLogin = (e) =>{
   e.preventDefault();
  
   if( isFormValid() ){
        dispatch( startLoginEmailPassword(email, password) );
   } 
}

const handleGoogleLogin = () =>{
     dispatch( startGoogleLogin())
}


const isFormValid = () => {
  
    if( password.trim().length === 0){
        dispatch( setError(' the password is required') )
       // console.log(' the name is required')
        return false;

    }else if( ! isEmail( email) ){ 
      // console.log(' the email is invalid')
        dispatch( setError(' the email is invalid ') )
      
        return false;
   }
   
   dispatch( removeError() )
    return true;
}

    return (
        <>
            <h3 className="auth__title">Login</h3>
        
            <form>

            {
                    msgError &&
                    (  <div className="auth__alert-error">
                        { msgError }
                        </div>
                    )
                }

                <input 
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />

                <input 
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={ password }
                    onChange={ handleInputChange }
                />


                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    onClick={ handleLogin }
                    disabled={ loading }
                >
                    Login
                </button>

                
                <div className="auth__social-networks">
                    <p>Login with social networks</p>

                    <div 
                        className="google-btn"
                        onClick={ handleGoogleLogin }
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>

                <Link 
                    to="/auth/register"
                    className="link"
                >
                    Create new account    
                </Link>

            </form>
        </>
    )
}