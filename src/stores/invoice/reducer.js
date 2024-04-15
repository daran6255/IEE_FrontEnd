import { createSlice } from '@reduxjs/toolkit';

import {
    processInvoice
} from './thunk';

export const initialState = {
    requestId: '',
    entities: [],
    error: '', // for error message
    loading: false,
};

const invoiceSlice = createSlice({
    name: 'Invoice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(processInvoice.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(processInvoice.fulfilled, (state, action) => {
            if (action.payload.requestId) {
                state.requestId = action.payload.requestId;
                state.entities = action.payload.result;
                state.loading = false;
            }
            else {
                state.error = action.payload || null;
                state.loading = false;
            }
        });
        builder.addCase(processInvoice.rejected, (state, action) => {
            state.error = action.payload || null;
            state.loading = false;
        });
    },
});

export default invoiceSlice.reducer;
