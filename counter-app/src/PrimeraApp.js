import PropTypes from "prop-types";
//Functional Component


const PrimeraApp =( {saludo} ) =>{ //desestructuracion

    // if( !saludo){
    //     throw new Error(' EL saludo es necesario')
    // }

    return ( 
             <>
             <h1 > { saludo }</h1>
                {/* <pre> { JSON.stringify(saludo, null, 3) }</pre> */}
                <p> Mi primera aplicacion</p>
            </>
    );
}

PrimeraApp.propTypes = {
  saludo:PropTypes.string.isRequired   
}

export default PrimeraApp;