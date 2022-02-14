import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => { 


   const { data:images,loading } =  useFetchGifs(category);

  return (
    <>
    <h3>{ category }</h3>
     <div className='card-grid'>
        { loading && <p> loading</p>}

         {
             images.map( ( img ) =>  (
               <GifGridItem  
                key= { img.id } 
                { ...img } //operator express propiedad independiente
                /> 
              ))
            }

    </div> 
    </>
  )
}
