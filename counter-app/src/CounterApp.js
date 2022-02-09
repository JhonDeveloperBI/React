import { useState } from "react";
import PropTypes from "prop-types";
//Functional Component


const CounterApp =( {value} ) =>{ //desestructuracion

 const [ counter , setCounter ] = useState(0); //depend setNombre of first argument [ nombre, setNombre]


    const handleAdd = () =>{
     //setCounter(counter + 1 ) // function for modified the state
      setCounter ( (c) => c + 1 )
    }

    return ( 
             <>
             <h1>CounterApp</h1>
             <h2> { counter } </h2>
             <button onClick={  handleAdd }>+1</button>  
            </>
    );
}

CounterApp.propTypes = {
  value:PropTypes.number   
}

export default CounterApp;