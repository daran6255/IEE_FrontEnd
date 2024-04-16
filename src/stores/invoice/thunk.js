import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import {
    processInvoice as processInvoiceApi,
    downloadExcel as downloadExcelApi,
    downloadJson as downloadJsonAPI,
} from '../../helpers/backend_helper';

export const processInvoice = createAsyncThunk(
    'invoice/processInvoice',
    async (invoices) => {
        try {
            const response = await processInvoiceApi(invoices);
            toast.success('Processed Invoice Successfully', { autoClose: 3000 });
            return response;
        } catch (error) {
            toast.error('Invoice Processing Failed', { autoClose: 3000 });
            return error;
        }
    }
);

export const downloadExcel = (requestId) => async (dispatch) => {
    try {
        const response = await downloadExcelApi(requestId);
        const url = window.URL.createObjectURL(response);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', requestId + '_extracted.xlsx');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } catch (error) {
        return error;
    }
}

export const downloadJson = (requestId) => async (dispatch) => {
    try {
        const response = await downloadJsonAPI(requestId);
        const url = window.URL.createObjectURL(response);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', requestId + '_extracted.json');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } catch (error) {
        return error;
    }
}