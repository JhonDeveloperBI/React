import React, { useEffect, useState } from 'react'
import './effects.css'

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name:'',
        email:''
    });

    const { name, email} = formState;

    

    useEffect( () => {
        console.log('ok')
    },[]) //is trigger one

    useEffect( () => {
        console.log('email change')
    },[email]) //is trigger one // select, combobox
 
    useEffect( () => {
        console.log('Form change')
    },[formState]) //anyChange in formState execute the useEffect

    const  handleInputChange = ({ target }) =>{
     setFormState({
      ...formState,
         [target.name] : target.value
     });

    }

  return (
    <>
        <h1>useEffect</h1>
        <hr/>

        <div className="form-group">
            <input
               type="text"
               name="name"
               className="form-control"
               placeholder="Tu nombre"
               autoComplete="off"
               value= { name }
               onChange={ handleInputChange }

             />  
        </div>

        <div className="form-group">
            <input
               type="text"
               name="email"
               className="form-control"
               placeholder="email@gmail.com"
               autoComplete="off"
               value= { email }
               onChange={ handleInputChange }

             />  
        </div>
    </>
  )
}
