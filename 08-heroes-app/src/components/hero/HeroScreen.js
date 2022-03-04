import { useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom"
import { heroImages } from "../../helpers/heroImages";
import { getHeroById } from "../../selectors/getHeroById";
//import batman from '../../assets/dc-batman.jpg'; estatico


export const HeroScreen = () => {

  const { heroeId } = useParams(); // get data of the URl
  const hero = useMemo( () => getHeroById( heroeId) ,[ heroeId ] );
  const navigate = useNavigate();

  const handleReturn = () => {

    navigate(-1); //page back
  }

 // if( !hero ) return <p> No hay heroe</p>

 if(!hero){
    return <Navigate to='/' />
 }

 const {
   superhero,
   publisher,
   alter_ego,
   first_appearance,
   characters
 } = hero

// const imagePath = `/assets/${id}.jpg`;

const imagePath = heroImages(`./${ heroeId }.jpg`);  // `/assets/${id}.jpg`;

  return (
    <div className="row mt-5">
        <div className="col-4">
          <img  //src={ imagePath }  // desde public/assets
              //src={ batman } // import
              src={ imagePath } 
              alt ={ superhero } 
              className="img-thumbnail animate__animated animate__fadeInLeft" />
        </div>

        <div className="col-8 animate__animated animate__fadeInLeft">
          <h3> { hero.superhero }</h3>
          <ul className="list-group list-group-flush"> 
              <li className="list-group-item"> <b>Alter ego: </b>{ alter_ego}</li>
              <li className="list-group-item"> <b>publisher: </b>{ publisher }</li>
              <li className="list-group-item"> <b>First Appearance: </b>{ first_appearance }</li>

              <h5 className="mt-3">Characters</h5>
              <p> { characters }</p>

              <button
                className="btn btn-outline-info"
                onClick={ handleReturn }
                > 

                Regresar
              </button>
          </ul>
        </div>

    </div>
  )
}
