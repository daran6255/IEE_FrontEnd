import { combineReducers } from 'redux';

import AuthReducer from './auth/reducer';
import InvoiceReducer from './invoice/reducer';
import AdminReducer from './admin/reducer';
import CustomerReducer from './customer/reducer';

const rootReducer = combineReducers({
    Auth: AuthReducer,
    Invoice: InvoiceReducer,
    Admin: AdminReducer,
    Customer: CustomerReducer,
});

export default rootReducer;
