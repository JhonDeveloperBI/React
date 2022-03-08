
import { types } from "../types/types";
/*
{
    notes:[],
    active: null,
    acrive: {
        id:'uuid',
        title:'',
        body:'',
        imageUrl:'',
        date:1222
    }
}
*/


const initialState ={
    notes:[],
    active: null
}


export const notesReducer = ( state = initialState, action) => {

    switch (action.type) {
        
        case types.notesActive:
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }
        
        default:
            return state;
        }  
}