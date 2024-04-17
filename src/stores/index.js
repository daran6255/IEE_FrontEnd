import { combineReducers } from 'redux';

import AuthReducer from './auth/reducer';
import InvoiceReducer from './invoice/reducer';

const rootReducer = combineReducers({
    Auth: AuthReducer,
    Invoice: InvoiceReducer
});

export default rootReducer;
