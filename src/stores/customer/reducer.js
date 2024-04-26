import { createSlice } from '@reduxjs/toolkit';

import { getCustomerData, getCreditHistory } from './thunk';

export const initialState = {
    creditsHistory: [],
    userData: {},
    loadingData: false,
    loadingCredits: false,
    error: '',
};

const customerSlice = createSlice({
    name: 'Customer',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCustomerData.pending, (state) => {
            state.loadingData = true;
        });
        builder.addCase(getCustomerData.fulfilled, (state, action) => {
            state.userData = action.payload;
            state.loadingData = false;
        });
        builder.addCase(getCustomerData.rejected, (state, action) => {
            state.error = action.payload || null;
            state.loadingData = false;
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

export default customerSlice.reducer;
