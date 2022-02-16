import { shallow } from "enzyme"
import { AddCategory } from "../../components/AddCategory"

describe('Test with <AddCategory /> ', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory  setCategories={ setCategories }/>);

    beforeEach ( () =>{
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory  setCategories={ setCategories }/>);
    });
    
    test('should show correcta', async() => {

        expect(wrapper).toMatchSnapshot();

    })


    test('should change the text box',() =>{
      const input = wrapper.find('input');
      const value = 'Hola Mundo';

      input.simulate('change',{ target: {
          value:value
      }});
      
      expect( wrapper.find('p').text().trim() ).toBe(value)
    })
    

    test('Not post information with submit',() =>{

        wrapper.find('form').simulate('submit',{
            preventDefault (){}
            }
        );
        
        expect( setCategories ).not.toHaveBeenCalled();  // not called setCategories
      })
})