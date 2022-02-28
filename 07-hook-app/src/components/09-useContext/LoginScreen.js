import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const LoginScreen = () => {



  // 1. get the reference the UserContext
  const { setUser } = useContext(UserContext)

  console.log( setUser );
  // 2. setUser

  /*
   {
     id:123,
     name: 'jhon'
   }

  */

  return (
    <div>
      <h1>LoginScreen</h1>
      <hr />
      <button
         className="btn btn-primary"
         onClick ={ ()=> setUser({
            id:123,
            name:'jhon'
         })} >
           Login
         </button>
   </div>
)
}
