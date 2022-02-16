import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from '@testing-library/react-hooks';

describe('test in the hook useFetchGifs />', () => {



    test('should returned state init', () => {

       const { resul } = renderHook(() =>  useFetchGifs('One punch'))
        
       const {data ,loading} = resul.current;

       expect( data ).toEqual([]);
       expect( loading ).toBe(true);

       // const { data,loading } =  useFetchGifs(category);

    });

    

})