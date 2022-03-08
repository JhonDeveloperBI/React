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
        default:
            return state;
    }
}