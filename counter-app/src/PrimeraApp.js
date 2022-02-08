//Functional Component

//import { Fragment } from "react"; // fragment importacion innecesaria

const PrimeraApp =() =>{
    const saludo = 'Hola Mundo';
   // const saludo =[1,2,3,5,6];
    // const saludo ={    //fail
    //     "nombre":"jhon",
    //     "edad":45
    // }
    

    return ( 
             <>
             <h1 > { saludo }</h1>
                {/* <pre> { JSON.stringify(saludo, null, 3) }</pre> */}
                <p> Mi primera aplicacion</p>
            </>
    );
}


export default PrimeraApp;