import React from "react";
import ReactDom from "react-dom";
import PrimeraApp from "./PrimeraApp";
import './index.css'



//const saludo = <h1>Hola mundo</h1>;

//console.log(saludo)

const divRoot = document.querySelector('#root');

ReactDom.render(<PrimeraApp saludo=" Hola soy " />, divRoot);


