//Functional Component

//import { Fragment } from "react"; // fragment importacion innecesaria

const PrimeraApp =( {saludo = 'Hola mundo'} ) =>{ //desestructuracion

    return ( 
             <>
             <h1 > { saludo }</h1>
                {/* <pre> { JSON.stringify(saludo, null, 3) }</pre> */}
                <p> Mi primera aplicacion</p>
            </>
    );
}


export default PrimeraApp;