import { shallow } from "enzyme"
import { AddCategory } from "../../components/AddCategory"

describe('Test with <AddCategory /> ', () => {

    const setCategories = () => {};
    
    test('should show correcta', async() => {
        
        const wrapper = shallow(<AddCategory  setCategories={ setCategories }/>);

        expect(wrapper).toMatchSnapshot();
        
    })
    
})