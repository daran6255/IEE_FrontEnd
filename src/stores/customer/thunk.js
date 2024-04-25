import { createAsyncThunk } from '@reduxjs/toolkit';

import {
    getCreditHistory as getCreditHistoryApi,
} from '../../helpers/backend_helper';


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