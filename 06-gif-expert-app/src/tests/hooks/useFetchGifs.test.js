import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from '@testing-library/react-hooks';

describe('test in the hook useFetchGifs />', () => {



    test('should returned state init', async() => {

       const { result, waitForNextUpdate } = renderHook(() =>  useFetchGifs('One punch'))
        
       const {data ,loading} = result.current;

       await waitForNextUpdate();
       expect( data ).toEqual([]);
       expect( loading ).toBe(true);

       // const { data,loading } =  useFetchGifs(category);

    });

    test('should return an array  imgs and the  loading in false', async() => {
        
        const { result, waitForNextUpdate } = renderHook(() =>  useFetchGifs('One punch'))
        await waitForNextUpdate(); 

        
        const {data ,loading} = result.current;
 
        expect( data.length ).toEqual(10);
        expect( loading ).toBe(false);
 
        // const { data,loading } =  useFetchGifs(category);
    });
    

})