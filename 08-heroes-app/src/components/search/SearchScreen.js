import { useNavigate, useLocation } from "react-router-dom";
import queryString  from 'query-string'
import { useForm } from "../../hooks/useForm";
import { getHeroesByName } from "../../selectors/getHeroesByName";
import { HeroCard } from "../hero/HeroCard";

export const SearchScreen = () => {

  const navigate = useNavigate();
  const location = useLocation();

  
  const { q = '' } = queryString.parse(location.search);
  console.log(q)


  const initialForm = {
    searchText: q
};

const [ formValues, handleInputChange ] = useForm( initialForm );

const { searchText } = formValues;
const heroesFilter = getHeroesByName( q );


  const handleSearch = ( e ) =>{
    e.preventDefault();

    console.log(searchText)

    navigate(`?q=${ searchText }`)

  }

    return (
      <>
          <h1>Busquedas</h1>
          <hr />

          <div className="row">
            <div className="col-5">
              <h4> Buscar</h4>
              <hr />

              <form onSubmit={ handleSearch }>
                 <input
                    type="text"
                    placelholder =" Buscar un heroe"
                    className= "form-control"
                    name="searchText"
                    autoComplete="off"
                    value={ searchText }
                    onChange={ handleInputChange }
                    />

                    <button  className="btn btn-outline-primary mt-1 " type="submit">
                        Buscar...
                    </button>
              </form>
            </div>
            <div className="col-7">
              <h4> Resultados </h4>
              <hr />

              {
                heroesFilter.map( hero =>(
                  <HeroCard 
                      key = { hero.id }
                      { ...hero } 
                  
                  />
                ))
              }
            </div>
          </div>
      </>
    )
  }
  