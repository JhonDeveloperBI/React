import React, { useState, useEffect } from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const [Images, setImages] = useState([]) //always init

    //it is used to solve the rendering problem of the component
    useEffect(() =>{
        getGifs();

    },[]) // componentDidmount


    const getGifs = async() => {

            const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=A8xMXqzieIHmtO3BjGLAtf1daSSDAv8K`;
          
            const resp = await fetch( url );
            const { data } = await resp.json();
        
            const gifs = data.map( img => {
                return {
                    id: img.id,
                    title: img.title,
                    url: img.images?.downsized_medium.url
                }
            })
       setImages(gifs);
        }

      //  getGifs();

  return (
    <div>
        <h3>{ category }</h3>
       {/*  <ol>
            {
             Images.map( ({ id, title}) =>  (
               <li key={id}>{title}</li> 
              ))
            }
        </ol> */}

         {
             Images.map( ( img ) =>  (
               <GifGridItem  
                key= { img.id } 
                { ...img } //operator express propiedad independiente
                /> 
              ))
            }

    </div>
  )
}
