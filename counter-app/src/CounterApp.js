import PropTypes from "prop-types";
//Functional Component


const CounterApp =( {value} ) =>{ //desestructuracion

    //handleAAd
    const handleAdd = (e) =>{
      console.log(e)    // had a return undefined
     // return () => console.log('Hola Mundo');
    }

    // handleAdd() expected return function in this case is hello World
    return ( 
             <>
             <h1>CounterApp</h1>
             <h2> { value } </h2>
             <button onClick={  handleAdd }>+1</button>  
            </>
    );
}

CounterApp.propTypes = {
  value:PropTypes.number   
}

export default CounterApp;