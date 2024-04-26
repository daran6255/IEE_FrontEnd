import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
    requestId: '',
    entities: [],
    error: '', // for error message
    loading: false,
};

const invoiceSlice = createSlice({
    name: 'Invoice',
    initialState,
    reducers: {
        invoiceProcessStarted(state, action) {
            state.loading = true;
        },
        invoiceProcessSuccess(state, action) {
            if (action.payload.requestId) {
                state.requestId = action.payload.requestId;
                state.entities = action.payload.output;
            }
            else {
                state.error = action.payload || null;
            }

            state.loading = false;
        },
        apiError(state, action) {
            state.error = action.payload || null;
            state.loading = false;
        },
        reset_invoice(state) {
            state.requestId = '';
            state.entities = [];
            state.loading = false;
        },
    },
});

export const { invoiceProcessStarted, invoiceProcessSuccess, apiError, reset_invoice } = invoiceSlice.actions;

export default invoiceSlice.reducer;
