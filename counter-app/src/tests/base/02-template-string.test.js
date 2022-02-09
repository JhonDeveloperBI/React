import '@testing-library/jest-dom'
import { getSaludo } from "../../base/02-template-string";

describe('test in 02-template-string.js', () => { 
    test('getSaludo should return hola fernando',() =>{
      
        const nombre = 'Fernando';

        //stimulate
        const saludo = getSaludo( nombre);

        expect(saludo).toBe('Hola '  + nombre);
    })

    // getSaludo should be return Hola Carlos! if not there is argument in the name

    test('getSaludo should be return Hola Carlos! if not there is argument in the name', () => { 


        //stimulate
        const saludo = getSaludo();
        
        expect(saludo).toBe('Hola Carlos!')
     })
})