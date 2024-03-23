import { combineReducers } from 'redux';

import LoginReducer from './login/reducer';


const rootReducer = combineReducers({
    Login: LoginReducer,
});

export default rootReducer;
