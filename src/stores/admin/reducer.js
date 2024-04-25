import { createSlice } from '@reduxjs/toolkit';

import {
    getCustomers, getCustomerCreditHistory, getDashboardStats
} from './thunk';

export const initialState = {
    stats: {},
    customers: [],
    creditsHistory: [],
    loadingStats: false,
    loadingCustomer: false,
    loadingCredits: false,
    loadingAddCredits: false,
    error: '',
};

const adminSlice = createSlice({
    name: 'Admin',
    initialState,
    reducers: {
        apiError(state, action) {
            state.error = action.payload;
            state.loadingAddCredits = false;
        },
        updateCreditsStatus(state, action) {
            state.loadingAddCredits = action.payload;
        }
    },
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

        builder.addCase(getCustomerCreditHistory.pending, (state) => {
            state.loadingCredits = true;
        });
        builder.addCase(getCustomerCreditHistory.fulfilled, (state, action) => {
            state.creditsHistory = action.payload;
            state.loadingCredits = false;
        });
        builder.addCase(getCustomerCreditHistory.rejected, (state, action) => {
            state.error = action.payload || null;
            state.loadingCredits = false;
        });
    },
});

export const { apiError, updateCreditsStatus } = adminSlice.actions;

export default adminSlice.reducer;
