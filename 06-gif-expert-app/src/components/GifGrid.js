import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
//import { GifGridItem } from './GifGridItem';
//import { getGifs } from './helpers/getGifs';

export const GifGrid = ({ category }) => {

/*     const [Images, setImages] = useState([]) //always init

    //it is used to solve the rendering problem of the component
    useEffect(() =>{
       getGifs(category) // return promise
           .then(imgs => setImages( imgs ) )
    },[category]) // componentDidmount if category change


 */

   const { loading } =  useFetchGifs();

  return (
    <>
    <h3>{ category }</h3>
    { loading ? 'Cargando...': 'Data Cargada'}
  {/*   <div className='card-grid'>
    

         {
             Images.map( ( img ) =>  (
               <GifGridItem  
                key= { img.id } 
                { ...img } //operator express propiedad independiente
                /> 
              ))
            }

    </div> */}
    </>
  )
}
