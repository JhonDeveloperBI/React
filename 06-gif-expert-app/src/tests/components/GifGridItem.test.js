import { GifGridItem } from "../../components/GifGridItem"
import { shallow } from "enzyme";

describe('test in GifGridItem', () => { 

    const title = 'test';
    const url = 'https://www.google.com';
    const wrapper = shallow(<GifGridItem title={title}  url = {url} />)

    test('should show <GifGridItem /> correct', () => { 
        expect( wrapper).toMatchSnapshot(); // snapshot
     })

     test('show had a parraf with the title',() => {

         const p = wrapper.find('p');

         expect(p.text().trim()).toBe( title);
     })


     test('should had the image same url and alt of the props', () => { 
        
        const img = wrapper.find('img');
        
        expect(img.prop('src') ).toBe( url );
        expect(img.prop('alt') ).toBe( title );
        
      })

      test('should had animate__bounce', () => {
        
        const div = wrapper.find('div');
        const className = div.prop('className');

        expect( className.includes('animate__bounce') ).toBe( true );

    })
 })