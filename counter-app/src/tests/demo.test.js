

describe(' test in the file demo.test.js',() =>{

    test('should be same the string', () => { 

        // 1. init
        const mensaje = 'Hola Mundo';

        // 2. stimulus
        const mensaje2 = `Hola Mundo`;

        // 3. behavior
        
        expect(mensaje).toBe(mensaje2); // === 
    
    })

});