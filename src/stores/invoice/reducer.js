import { createSlice } from '@reduxjs/toolkit';

import { getInvoiceRequests, getAllInvoiceData, getInvoiceFile, getInvoiceData, updateInvoiceData } from './thunk';

export const initialState = {
    requests: [],
    requestData: [],
    invoiceFile: null,
    invoiceData: {},
    fileUploadingProgress: 0,
    loadingRequest: false,
    loadingData: false,
    loadingFile: false,
    loadingAllData: false,
    updatingData: false,
    error: '',
    requestError: '',
};

const invoiceSlice = createSlice({
    name: 'Invoice',
    initialState,
    reducers: {
        uploadInvoiceProgress(state, action) {
            state.fileUploadingProgress = action.payload;
        },
        uploadInvoiceSuccess(state) {
            state.fileUploadingProgress = 100;
        },
        apiError(state, action) {
            state.error = action.payload || null;
            state.fileUploadingProgress = 0;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getInvoiceRequests.pending, (state) => {
            state.loadingRequest = true;
        });
        builder.addCase(getInvoiceRequests.fulfilled, (state, action) => {
            state.requests = action.payload;
            state.loadingRequest = false;
        });
        builder.addCase(getInvoiceRequests.rejected, (state, action) => {
            state.error = action.payload || null;
            state.loadingRequest = false;
        });

        builder.addCase(getAllInvoiceData.pending, (state) => {
            state.requestError = '';
            state.loadingAllData = true;
        });
        builder.addCase(getAllInvoiceData.fulfilled, (state, action) => {
            state.requestData = action.payload;
            state.loadingAllData = false;
        });
        builder.addCase(getAllInvoiceData.rejected, (state, action) => {
            state.requestError = action.error.message || null;
            state.loadingAllData = false;
        });

        builder.addCase(getInvoiceFile.pending, (state) => {
            state.loadingFile = true;
        });
        builder.addCase(getInvoiceFile.fulfilled, (state, action) => {
            state.invoiceFile = action.payload;
            state.loadingFile = false;
        });
        builder.addCase(getInvoiceFile.rejected, (state, action) => {
            state.error = action.payload || null;
            state.loadingFile = false;
        });

        builder.addCase(getInvoiceData.pending, (state) => {
            state.loadingData = true;
        });
        builder.addCase(getInvoiceData.fulfilled, (state, action) => {
            state.invoiceData = action.payload;
            state.loadingData = false;
        });
        builder.addCase(getInvoiceData.rejected, (state, action) => {
            state.error = action.payload || null;
            state.loadingData = false;
        });

        builder.addCase(updateInvoiceData.pending, (state) => {
            state.updatingData = true;
        });
        builder.addCase(updateInvoiceData.fulfilled, (state, action) => {
            state.updatingData = false;
        });
        builder.addCase(updateInvoiceData.rejected, (state, action) => {
            state.error = action.payload || null;
            state.updatingData = false;
        });
    }
});

export const { uploadInvoiceProgress, uploadInvoiceSuccess, apiError } = invoiceSlice.actions;

export default invoiceSlice.reducer;
