import { createAsyncThunk } from '@reduxjs/toolkit';

import {
    getCustomerData as getCustomerDataApi,
    getCreditHistory as getCreditHistoryApi,
} from '../../helpers/backend_helper';

export const getCustomerData = createAsyncThunk(
    'customer/getCustomerData',
    async () => {
        try {
            const response = await getCustomerDataApi();
            const result = response.result;

            if (result && response.status === 'success') {
                return result;
            }
        } catch (error) {
            return error;
        }
    }
);

export const getCreditHistory = createAsyncThunk(
    'customer/getCreditHistory',
    async (userId) => {
        try {
            const response = await getCreditHistoryApi(userId);
            return response;
        } catch (error) {
            return error;
        }
    }
);