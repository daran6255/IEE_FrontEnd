import moment from 'moment';
import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';

import {
    getInvoiceRequests as getInvoiceRequestsApi,
    initUpload as initUploadApi,
    uploadInvoice as uploadInvoiceApi,
    getAllInvoiceData as getAllInvoiceDataApi,
    getInvoiceData as getInvoiceDataApi,
    updateInvoiceData as updateInvoiceDataApi,
    getInvoiceFile as getInvoiceFileApi,
    downloadExcel as downloadExcelApi,
    downloadJson as downloadJsonAPI,
    deleteInvoiceRequests as deleteRequestsApi
} from '../../helpers/backend_helper';

import { uploadInvoiceProgress, uploadInvoiceSuccess, apiError } from './reducer';


export const getInvoiceRequests = createAsyncThunk(
    'invoice/getInvoiceRequests',
    async () => {
        try {
            const response = await getInvoiceRequestsApi();
            return response;
        } catch (error) {
            return error;
        }
    }
);

export const uploadInvoice = (invoices) => async (dispatch) => {
    try {
        const totalImages = invoices.length;
        const response = await initUploadApi({ total_images: totalImages });
        const requestId = response.request_id;
        if (!requestId) {
            throw new Error('Problem initializing upload');
        }

        const chunkSize = 5;
        const maxRetries = 3;
        let uploadedCount = 0;

        for (let i = 0; i < totalImages; i += chunkSize) {
            let success = false;
            let attempts = 0;
            const chunk = invoices.slice(i, i + chunkSize);

            while (!success && attempts < maxRetries) {
                try {
                    const formData = new FormData();
                    formData.append('request_id', requestId);
                    chunk.forEach(file => {
                        const fileName = file.name;
                        const newFile = new File([file], fileName, { type: file.type });
                        formData.append('images', newFile);
                    });

                    const handleProgress = (uploadedCount, progressEvent) => {
                        const total = progressEvent.total;
                        const current = progressEvent.loaded;
                        dispatch(uploadInvoiceProgress((uploadedCount + current / total) / totalImages * 100));
                    };

                    await uploadInvoiceApi(formData, handleProgress.bind(null, uploadedCount));

                    uploadedCount += chunk.length;
                    success = true;
                } catch (error) {
                    attempts++;
                    if (attempts === maxRetries) {
                        throw new Error('Problem while uploading');
                    }
                }
            }
        }

        dispatch(uploadInvoiceSuccess());
    } catch (error) {
        toast.error(error, { autoClose: 3000 });
        dispatch(apiError(error));
    }
    finally {
        dispatch(getInvoiceRequests());
    }
}

export const getAllInvoiceData = createAsyncThunk(
    'invoice/getAllInvoiceData',
    async (requestId) => {
        const response = await getAllInvoiceDataApi(requestId);
        return response.files;
    }
);

export const getInvoiceFile = createAsyncThunk(
    'invoice/getInvoiceFile',
    async ({ requestId, invoiceName }) => {
        try {
            const response = await getInvoiceFileApi(requestId, invoiceName);
            return URL.createObjectURL(response);
        } catch (error) {
            return error;
        }
    }
);

export const getInvoiceData = createAsyncThunk(
    'invoice/getInvoiceData',
    async ({ requestId, invoiceName }) => {
        try {
            const response = await getInvoiceDataApi(requestId, invoiceName);
            return response;
        } catch (error) {
            return error;
        }
    }
);

export const updateInvoiceData = createAsyncThunk(
    'invoice/updateInvoiceData',
    async ({ requestId, data }) => {
        try {
            const response = await updateInvoiceDataApi(requestId, data);
            toast.success('Updated data', { autoClose: 1000 });
            return response;
        } catch (error) {
            return error;
        }
    }
);

export const deleteRequests = (requestId) => async (dispatch) => {
    try {
        const response = await deleteRequestsApi(requestId);

        const result = response.result;
        let message = 'Something went wrong';

        if (result) {
            if (response.status === 'success') {
                toast.success(result, { autoClose: 3000 });
                return;
            }
            else {
                message = result;
            }
        }

        toast.error(message, { autoClose: 3000 });
    } catch (error) {
        return error;
    }
    finally {
        dispatch(getInvoiceRequests());
    }
}

export const downloadExcel = (requestId) => async (dispatch) => {
    try {
        const response = await downloadExcelApi(requestId);
        const url = window.URL.createObjectURL(response);
        const link = document.createElement('a');
        const filename = 'IEE_' + moment().format('YYYY-MM-DDTHH:mm:ss') + '_' + requestId + '.xlsx';
        link.href = url;
        link.setAttribute('download', filename);
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
        const url = URL.createObjectURL(response);
        const link = document.createElement('a');
        const filename = 'IEE_' + moment().format('YYYY-MM-DDTHH:mm:ss') + '_' + requestId + '.json';
        link.href = url;
        link.setAttribute('download', filename);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } catch (error) {
        return error;
    }
}