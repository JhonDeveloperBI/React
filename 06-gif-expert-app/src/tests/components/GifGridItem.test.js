import { GifGridItem } from "../../components/GifGridItem"
import { shallow } from "enzyme";

describe('test in GifGridItem', () => { 

    test('should show <GifGridItem /> correct', () => { 
        
        const title = 'test';
        const url = 'https://www.google.com';

        const wrapper = shallow(<GifGridItem title={title}  url = {url} />)

        expect( wrapper).toMatchSnapshot(); // snapshot
     })
 })