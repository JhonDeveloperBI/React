import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('test in functions of heroes', () => {
    
    test('should be return a heroe by id', () => { 
    
        const id = 1;
        const heroe = getHeroeById(id);
       
        const heroeData = heroes.find(h => h.id === id)


        expect(heroe).toEqual( heroeData);

    });


    test('should be return a undefined if heroe not exist', () => { 
    
        const id = 10;
        const heroe = getHeroeById(id);

        expect(heroe).toBe( undefined); // undefined dato primitivo

    });

    //debe de retornar un arreglo con los heroes de DC
    // owner
    //toEqual al arreglo filtrado

    test('should be return an array with the heroes DC', () => { 
        
        const owner ='DC';
        const heroes = getHeroesByOwner( owner );

        const heroeData = heroes.filter(h => h.owner === owner)

        expect(heroes).toEqual(heroeData);

    })

    //debe de retornar un arreglo con los heroes de Marvel
    // length = 2 // toBe


    test('should be return an array with the heroes Marvel', () => { 

        const owner ='Marvel';
        const heroes = getHeroesByOwner(owner);

        expect(heroes.length).toBe(2);

        
    })




 })