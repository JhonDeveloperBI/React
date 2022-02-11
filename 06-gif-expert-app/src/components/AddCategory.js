import { React, useState } from 'react'

export const AddCategory = () => {

   const [inputValue, setinputValue] = useState('initialState')
   
   const handleInputChange =(e) => {
    setinputValue(e.target.value)
   }
   
   const handleSubmit = (e) => {
       e.preventDefault(); // no se refresca la pagina
       console.log("submit done");
   }

  return (
    <form onSubmit={ handleSubmit }>
    {/*  <h1> { inputValue }</h1> */}
        <input 
            type = "text" 
            value={ inputValue }
            onChange= { handleInputChange }
        />
    </form>
  )
}
