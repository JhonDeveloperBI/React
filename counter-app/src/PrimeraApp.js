import PropTypes from "prop-types";
//Functional Component


const PrimeraApp =( {saludo, subtitulo } ) =>{ //desestructuracion

    // if( !saludo){
    //     throw new Error(' EL saludo es necesario')
    // }

    return ( 
             <>
             <h1 > { saludo }</h1>
                {/* <pre> { JSON.stringify(saludo, null, 3) }</pre> */}
                <p> { subtitulo }</p>
            </>
    );
}

PrimeraApp.propTypes = {
  saludo:PropTypes.string.isRequired   
}

PrimeraApp.defaultProps = {
    subtitulo:'Soy un subtitulo'
}

export default PrimeraApp;