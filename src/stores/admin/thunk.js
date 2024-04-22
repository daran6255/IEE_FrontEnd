import { createAsyncThunk } from '@reduxjs/toolkit';

import {
    getCustomers as getCustomersApi,
} from '../../helpers/backend_helper';

export const getCustomers = createAsyncThunk(
    'invoice/getCustomers',
    async () => {
        try {
            const response = await getCustomersApi();
            return response;
        } catch (error) {
            return error;
        }
    }
);