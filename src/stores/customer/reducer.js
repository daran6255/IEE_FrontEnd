import { createSlice } from '@reduxjs/toolkit';

import { getCreditHistory } from './thunk';

export const initialState = {
    creditsHistory: [],
    loadingCredits: false,
    error: '',
};

const customerSlice = createSlice({
    name: 'Customer',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
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
