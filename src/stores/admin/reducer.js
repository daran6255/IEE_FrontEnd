import { createSlice } from '@reduxjs/toolkit';

import {
    getCustomers, getCreditHistory
} from './thunk';

export const initialState = {
    customers: [],
    creditsHistory: [],
    loadingCustomer: false,
    loadingCredits: false,
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

        builder.addCase(getCreditHistory.pending, (state) => {
            state.loadingCredits = true;
        });
        builder.addCase(getCreditHistory.fulfilled, (state, action) => {
            state.creditsHistory = action.payload;
            state.loadingCredits = false;
        });
        builder.addCase(getCreditHistory.rejected, (state, action) => {
            state.error = action.payload || null;
            state.loadingCredits = false;
        });
    },
});

export default adminSlice.reducer;
