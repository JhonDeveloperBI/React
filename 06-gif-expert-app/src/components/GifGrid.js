import React, { useState, useEffect } from 'react'
import { GifGridItem } from './GifGridItem';
import { getGifs } from './helpers/getGifs';

export const GifGrid = ({ category }) => {

    const [Images, setImages] = useState([]) //always init

    //it is used to solve the rendering problem of the component
    useEffect(() =>{
       getGifs(category) // return promise
           .then(imgs => setImages( imgs ) )
    },[category]) // componentDidmount if category change




  return (
    <>
    <h3>{ category }</h3>
    <div className='card-grid'>
    

         {
             Images.map( ( img ) =>  (
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
