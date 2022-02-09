import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";


describe('test with promesas', () => { 

   test('getHeroeByIdAsync should be return a heroe async', ( done ) => {  // done for over the process when is worked with asyn in test
           
    const id = 1;

         getHeroeByIdAsync( id )
           .then ( heroe => {

            expect( heroe ).toBe( heroes[0]);
            done();
           });
    });



   test('getHeroeByIdAsync should be return a error if the heroe by id not exist', ( done ) => {  // done for over the process when is worked with asyn in test
           
    const id = 10;

         getHeroeByIdAsync( id )
           .catch( error => {
                // eslint-disable-next-line jest/no-conditional-expect
                expect( error ).toBe('No se pudo encontrar el héroe');
                done();
           })
    });

})