import { GifGridItem } from "../../components/GifGridItem"
import { shallow } from "enzyme";

describe('test in GifGridItem', () => { 

    const title = 'test';
    const url = 'https://www.google.com';

    test('should show <GifGridItem /> correct', () => { 
        
        const wrapper = shallow(<GifGridItem title={title}  url = {url} />)

        expect( wrapper).toMatchSnapshot(); // snapshot
     })
 })