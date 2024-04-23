import { createSlice } from '@reduxjs/toolkit';

import {
    getCustomers, getCreditHistory, getDashboardStats
} from './thunk';

export const initialState = {
    stats: {},
    customers: [],
    creditsHistory: [],
    loadingStats: false,
    loadingCustomer: false,
    loadingCredits: false,
    error: '',
};

const adminSlice = createSlice({
    name: 'Admin',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getDashboardStats.pending, (state) => {
            state.loadingStats = true;
        });
        builder.addCase(getDashboardStats.fulfilled, (state, action) => {
            state.stats = action.payload;
            state.loadingStats = false;
        });
        builder.addCase(getDashboardStats.rejected, (state, action) => {
            state.error = action.payload || null;
            state.loadingStats = false;
        });

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
