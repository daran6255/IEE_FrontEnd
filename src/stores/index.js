import { combineReducers } from 'redux';

import LoginReducer from './login/reducer';
import InvoiceReducer from './invoice/reducer';

const rootReducer = combineReducers({
    Login: LoginReducer,
    Invoice: InvoiceReducer
});

export default rootReducer;
