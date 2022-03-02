import { HeroCard } from './HeroCard';
import { getHeroesByPublish } from '../../selectors/getHeroesByPublisher'


export const HeroList = ({ publisher }) => {

    const heroes = getHeroesByPublish( publisher );
  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3"> 
            <li>
                {
                    heroes.map( hero =>(
                        <HeroCard key={ hero.id } 
                            { ...hero }/>
                    ))
                }
            </li>
    </div>
  )
}
