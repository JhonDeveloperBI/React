import { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';


export const useFetchGifs = ( category ) => { // hook begin with word Use
    
    const [state, setState] = useState({ // rendered when some change
        data: [],
        loading: true
    });

    /*
    useEffect( () => {

        getGifs( category )
            .then( imgs => {
                
                setState({
                    data: imgs,
                    loading: false
                });
            })

    }, [category])

    */

    setTimeout ( () => {
        setState({
            data:[1,2,3,4,5,6,7],
            loading:false
        })
    },3000)



    return state; // { data:[], loading: true };


}