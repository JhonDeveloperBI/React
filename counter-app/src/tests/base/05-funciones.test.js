import '@testing-library/jest-dom';

import { getUser, getUsuarioActivo } from "../../base/05-funciones"

describe('test in 05-functions', () => {

    test('getUser should be return an object',()=>{

       const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
    
        const user = getUser();

        // ===
        //expect( user ).toBe( userTest)
         // the same object
        expect( user ).toStrictEqual( userTest)


    })


    test('getUserEnable should be return an object',() => {
          
        const nombre = 'Juan';
        const user = getUsuarioActivo( nombre );

        expect(user).toEqual({
            uid: 'ABC567',
            username: nombre
        })

    })
    

})