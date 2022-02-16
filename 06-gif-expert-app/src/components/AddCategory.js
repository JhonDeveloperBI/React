import { React, useState } from 'react'
import PropTypes from "prop-types";

export const AddCategory = ( { setCategories } ) => {

   const [inputValue, setinputValue] = useState(''); //undefined
   
   const handleInputChange =(e) => {
    setinputValue(e.target.value)
   }
   
   const handleSubmit = (e) => {
       e.preventDefault(); // no se refresca la pagina

       if( inputValue.trim().length >2){
        setCategories( cats => [inputValue,...cats])
        setinputValue(''); // evita doble post in the form
       }
   }

  return (
    <form onSubmit={ handleSubmit }>
        <p> { inputValue }</p>
        <input 
            type = "text" 
            value={ inputValue }
            onChange= { handleInputChange }
        />
    </form>
  )
}

AddCategory.propTypes = {
    setCategories:PropTypes.func.isRequired   
}