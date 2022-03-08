import { projectAuth, googleAuthProvider } from '../firebase/fireabase-config';
import { types } from "../components/types/types";

export const startLoginEmailPassword = ( email,password) =>{
    return ( dispatch) =>{

        projectAuth.signInWithEmailAndPassword( email, password)
            .then( ({ user }) => {
                dispatch(
                    login( user.uid, user.displayName )
                )
            })
            .catch( e =>{
                console.log(e);
            })  
    }
}

export const startGoogleLogin = () => {
    return ( dispatch ) => {

        projectAuth.signInWithPopup( googleAuthProvider )
            .then( ({ user }) => {
                console.log(user)
                dispatch(
                    login( user.uid, user.displayName )
                )
            });

    }
}

export const startRegisterWithEmailPasswordName = (email, password, name ) => {
   
    return ( dispatch) => {  // task async
           projectAuth.createUserWithEmailAndPassword( email, password)
           .then( async ({ user }) => {

            //update profile
            await user.updateProfile({  displayName: name  })

            console.log(user)
            dispatch(
                login( user.uid, user.displayName )
            )
        })
        .catch( e =>{
            console.log(e)
        })      
    }
}


export const login = ( uid , displayName) =>{
   return {
       type: types.login,
       payload:{
           uid,
           displayName
       }
   }
}