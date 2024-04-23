import { createAsyncThunk } from '@reduxjs/toolkit';

import {
    getCustomers as getCustomersApi,
    getCreditHistory as getCreditHistoryApi,
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

export const getCreditHistory = createAsyncThunk(
    'invoice/getCreditHistory',
    async (userId) => {
        try {
            const response = await getCreditHistoryApi(userId);
            console.log(response);
            return response;
        } catch (error) {
            return error;
        }
    }
);