import { createSlice } from '@reduxjs/toolkit';

import {
    getCustomers
} from './thunk';

export const initialState = {
    customers: [],
    loadingCustomer: false,
    error: '',
};

const adminSlice = createSlice({
    name: 'Admin',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCustomers.pending, (state) => {
            state.loadingCustomer = true;
        });
        builder.addCase(getCustomers.fulfilled, (state, action) => {
            state.customers = action.payload;
            state.loadingCustomer = false;
        });
        builder.addCase(getCustomers.rejected, (state, action) => {
            state.error = action.payload || null;
            state.loading = false;
        });
    },
});

export default adminSlice.reducer;
