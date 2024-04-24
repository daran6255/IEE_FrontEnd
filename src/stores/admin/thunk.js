import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import {
    getCustomers as getCustomersApi,
    getCreditHistory as getCreditHistoryApi,
    getDashboardStats as getDashboardStatsApi,
    addCredits as addCreditsApi,
} from '../../helpers/backend_helper';

import { updateCreditsStatus, apiError } from './reducer';

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

export const addCredits = (data) => async (dispatch) => {
    dispatch(updateCreditsStatus(true));

    try {
        const response = await addCreditsApi(data);

        const result = response.result;
        let message = 'Something went wrong';

        if (result) {
            if (response.status === 'success') {
                toast.success(result, { autoClose: 3000 });
                dispatch(updateCreditsStatus(false));
                return;
            }
            else {
                message = result;
            }
        }

        dispatch(apiError(message));
        toast.error(message, { autoClose: 3000 });
    } catch (error) {
        dispatch(apiError(error));
        toast.error(error, { autoClose: 3000 });
    }
};