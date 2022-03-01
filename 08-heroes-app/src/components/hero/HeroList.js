import { getHeroesByPublish } from '../../selectors/getHeroesByPublisher'

export const HeroList = ({ publisher }) => {

    const heroes = getHeroesByPublish( publisher );
  return (
    <> 
        <ul>
            <li>
                {
                    heroes.map( hero =>(
                        <li key={ hero.id }>
                            { hero.superhero }
                        </li>
                    ))
                }
            </li>

        </ul>
    </>
  )
}
