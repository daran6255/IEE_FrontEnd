import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import {
    processInvoice as processInvoiceApi
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