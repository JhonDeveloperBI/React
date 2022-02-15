import { getGifs } from '../../helpers/getGifs';


describe('Test with getGifs Fecth', () => {
    
    test('should get 10 elements', async() => {
        
        const gifs = await getGifs('One Punch');

        expect( gifs.length ).toBe( 10 );

    })

    test('should get 10 elements send category empty', async() => {
        
        const gifs = await getGifs('');

        expect( gifs.length ).toBe( 0 );

    })
    
})
