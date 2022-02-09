import { useState } from "react";
import PropTypes from "prop-types";
//Functional Component


const CounterApp =( {value = 1 } ) =>{ //desestructuracion

 const [ counter , setCounter ] = useState( value ); //depend setNombre of first argument [ nombre, setNombre]


    const handleAdd = () =>{
     setCounter(counter + 1 ) // function for modified the state
    }

    const handleSubtract = () => setCounter(counter - 1)
    

    const handleReset = () =>  setCounter( value )
    


    return ( 
             <>
             <h1>CounterApp</h1>
             <h2> { counter } </h2>
             <button onClick={  handleAdd } > +1 </button>  
             <button onClick={  handleReset } >Reset</button>
             <button onClick={  handleSubtract } > -1 </button>
            </>
    );
}

CounterApp.propTypes = {
  value:PropTypes.number   
}

export default CounterApp;