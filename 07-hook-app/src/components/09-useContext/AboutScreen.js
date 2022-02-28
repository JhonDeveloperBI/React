import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const AboutScreen = () => {

    // 1. get the reference the UserContext
    const { user, setUser } = useContext(UserContext)

    console.log( setUser );

    const hanleClick = () =>{
      setUser({});
    }
  return (
    <div>
        <h1>AboutScreen</h1>
        <hr />

        <pre>
            { JSON.stringify(user, null, 3)}
        </pre>

        <button 
            className="btn btn-warning"
            onClick={ hanleClick}>
          Logout
        </button>


    </div>
    ) 
}
