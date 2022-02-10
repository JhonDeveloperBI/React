import { render } from "@testing-library/react";
import { shallow } from "enzyme";
import PrimeraApp from "../PrimeraApp";

describe('test in <PrimeraApp />', () => { 
   /*  test('should show message "Hola', () => { 

        const saludo = 'Hola';

        const { getByText } = render(<PrimeraApp saludo={ saludo } />)

        expect( getByText(saludo)).toBeInTheDocument();
     }) */
     
     test('should be show <PrimeraApp /> success',() => {

        const saludo = 'Hola' 
        const wrapper = shallow(<PrimeraApp saludo={ saludo }/>) // simulate click, documents
         
        expect( wrapper).toMatchSnapshot(); // snapshot
     });


     test('should show the subtitle send for props',() => {

      const saludo = 'Hola';
      const subtitulo = 'mensaje';

      const wrapper = shallow(
                  <PrimeraApp 
                  saludo={ saludo }
                  subtitulo = { subtitulo }
                  />
      ); // simulate click, documents
       
      const textParrafo = wrapper.find('p').text(); //document.querySelector

      
      expect(textParrafo).toBe(subtitulo); // snapshot
   });

 })