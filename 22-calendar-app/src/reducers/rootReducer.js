import { combineReducers } from 'redux';
import { uiReducer } from './uiReducers';

import { calendarReducer } from './calendarReducer';
import { authReducer } from './AuthReducer';



export const rootReducer = combineReducers({
    ui: uiReducer,
    calendar: calendarReducer,
    auth: authReducer
})

