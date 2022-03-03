import { types } from "../types/types";
/*
const state = {
    name: 'jhon',
    logged: true
}
*/

/* const loginAction = {
    type: types.login,
    payload:{         
        name:'jhon',
        email:'jhon@hotmail.com'
    }
}
 */


export const authReducer = ( state = {}, action) =>{

    console.log("action",action.payload)

    switch (action.type) {
        case types.login:
            return {
                ...action.payload,
                logged:true
            }
            
        case types.logout:
            return {
                logged: false
            } 
    
        default:
            return state;
    }

}