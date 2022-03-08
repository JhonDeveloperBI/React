import { types } from '../components/types/types';

export const setError = ( err ) => ({
    type: types.uiSetError,
    payload: err
});

export const removeError = () => ({
    type: types.uiRemoveError
});

// task 
export const startLoading = () => ({
    type: types.uiStartLoading
})

//task
export const finishLoading = () => ({
    type: types.uiFinishLoading
})

