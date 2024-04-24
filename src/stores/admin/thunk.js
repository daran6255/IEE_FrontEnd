import { createAsyncThunk } from '@reduxjs/toolkit';

import {
    getCustomers as getCustomersApi,
    getCreditHistory as getCreditHistoryApi,
    getDashboardStats as getDashboardStatsApi
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
            return response;
        } catch (error) {
            return error;
        }
    }
);

export const getDashboardStats = createAsyncThunk(
    'invoice/getDashboardStats',
    async () => {
        try {
            const response = await getDashboardStatsApi();
            return response;
        } catch (error) {
            return error;
        }
    }
);