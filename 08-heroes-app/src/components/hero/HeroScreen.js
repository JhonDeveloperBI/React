import { useParams, Navigate } from "react-router-dom"
import { getHeroById } from "../../selectors/getHeroById";

export const HeroScreen = () => {

  const { heroeId } = useParams(); // get data of the URl
  const hero = getHeroById( heroeId);

 // if( !hero ) return <p> No hay heroe</p>

 if(!hero){
    return <Navigate to='/' />
 }

  return (
    <div>
        <h1>HeroScreen</h1>
        <p>{ hero.superhero }</p>
    </div>
  )
}
