import { shallow } from "enzyme";
import { GifExpertApp } from "../GifExpertApp";

describe('test in component <GifExpertApp />', () => {
    
    test('should show correct component',() => {
        
        const wrapper = shallow(<GifExpertApp />);

        expect(wrapper).toMatchSnapshot();

    })

    test('should show list categories', () => {

        const categories = ['One Punch', 'Dragon Ball'];
        const wrapper = shallow(<GifExpertApp defaultCategories={ categories } /> );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length );

        
    })

    
})