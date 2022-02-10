import { render } from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";

describe('test in <PrimeraApp />', () => { 
    test('should show message "Hola', () => { 

        const saludo = 'Hola';

        const { getByText } = render(<PrimeraApp saludo={ saludo } />)

        expect( getByText(saludo)).toBeInTheDocument();
     })
 })