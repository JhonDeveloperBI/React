import { HeroList } from "../hero/HeroList"

export const DcScreen = () => {
  const publisherDC = 'DC Comics';
  return (
    <div>
        <h1>DCScreen</h1>
        <HeroList publisher={publisherDC} />
    </div>
  )
}
