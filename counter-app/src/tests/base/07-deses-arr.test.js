import { retornaArreglo } from "../../base/07-deses-arr"

describe('test in file 07-deses-arr', () => { 

    test('should return a string and a number', () => { 
        
        //const arr = retornaArreglo();
        const [ letras, numeros] = retornaArreglo();


        expect( letras ).toBe( 'ABC');
        expect( typeof letras).toBe( 'string');

        expect( numeros ).toBe( 123);
        expect( typeof numeros).toBe( 'number');
        //expect(arr).toEqual(['ABC',123]);
    })
 })