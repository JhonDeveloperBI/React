import PropTypes from "prop-types";
//Functional Component


const CounterApp =( {value} ) =>{ //desestructuracion

    return ( 
             <>
             <h1>CounterApp</h1>
             <h2> { value } </h2>
            </>
    );
}

CounterApp.propTypes = {
  value:PropTypes.number   
}

export default CounterApp;