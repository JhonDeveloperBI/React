import { HeroList } from "../hero/HeroList";

export const MarvelScreen = () => {
  const publisherMarvel = 'Marvel Comics';
    return (
      <div>
          <h1>MarvelScreen</h1>
          <HeroList publisher={ publisherMarvel} />
      </div>
    )
  }
  