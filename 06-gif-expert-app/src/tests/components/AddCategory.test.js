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

      test('should called the setCategories and clean the box text',() =>{
        const value = 'Hola Mundo'; 
        // simulate inputChange
         wrapper.find('input').simulate('change',{ target:{ value }});
         //simulate submit
         wrapper.find('form').simulate('submit',{ preventDefault(){} });
          //setCategories should called
          expect( setCategories ).toHaveBeenCalled()
          expect( setCategories ).toHaveBeenCalledTimes(1) //expect one called
          expect( setCategories ).toHaveBeenCalledWith(expect.any(Function) ) //expect one function
          
          // value input should is empty
         expect(wrapper.find('input').prop('value') ).toBe('');
         
      })
})