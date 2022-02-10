import { getImagen } from "../../base/11-async-await"

describe('test in the file 11-async-await and fetch',  () => { 

    test('should return url of image',async () => { 

         const url =  await getImagen();

         expect ( url.includes('https://') ).toBe( false )
     })
 })