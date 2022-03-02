import { useMemo } from 'react';

import { HeroCard } from './HeroCard';
import { getHeroesByPublish } from '../../selectors/getHeroesByPublisher'



export const HeroList = ({ publisher }) => {

    const heroes = useMemo (() => getHeroesByPublish( publisher ) ,[ publisher ]);
  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn"> 
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
