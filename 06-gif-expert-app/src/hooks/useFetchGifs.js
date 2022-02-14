import { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';


export const useFetchGifs = ( category ) => { // hook begin with word Use
    
    const [state, setState] = useState({ // rendered when some change
        data: [],
        loading: true
    });
console.log(category)
    
    useEffect( () => { // cannot had  async the useEffect

        getGifs( category )
            .then( imgs => {
                setTimeout ( () => {

                
                setState({
                    data: imgs,
                    loading: false
                });

            },3000)
            })

    }, [category])


    return state; // { data:[], loading: true };


}