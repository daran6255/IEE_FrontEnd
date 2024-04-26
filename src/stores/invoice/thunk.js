import { toast } from 'react-toastify';
import moment from 'moment';

import {
    processInvoice as processInvoiceApi,
    downloadExcel as downloadExcelApi,
    downloadJson as downloadJsonAPI,
} from '../../helpers/backend_helper';

import { invoiceProcessStarted, invoiceProcessSuccess, apiError, reset_invoice } from './reducer';

import { getCustomerData } from '../customer/thunk';

export const processInvoice = (invoices) => async (dispatch) => {
    dispatch(invoiceProcessStarted());

    try {
        const response = await processInvoiceApi(invoices);

        const result = response.result;
        let message = 'Invoice Processing Failed';

        if (result) {
            if (response.status === 'success' && response.result.output) {
                toast.success('Processed Invoice Successfully', { autoClose: 3000 });
                dispatch(invoiceProcessSuccess(response.result));
                dispatch(getCustomerData());
                return;
            }
            else {
                message = result;
            }
        }

        toast.error(message, { autoClose: 3000 });
        dispatch(apiError(message));
    } catch (error) {
        toast.error(error, { autoClose: 3000 });
        dispatch(apiError(error));
    }
}


export const downloadExcel = (requestId) => async (dispatch) => {
    try {
        const response = await downloadExcelApi(requestId);
        const url = window.URL.createObjectURL(response);
        const link = document.createElement('a');
        const filename = 'IEE_' + moment().format('YYYY-MM-DDTHH:mm:ss.SSS') + '_' + (requestId ? requestId.slice(0, 6) : '_123456') + '.xlsx';
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
        const url = window.URL.createObjectURL(response);
        const link = document.createElement('a');
        const filename = 'IEE_' + moment().format('YYYY-MM-DDTHH:mm:ss.SSS') + '_' + (requestId ? requestId.slice(0, 6) : '_123456') + '.json';
        link.href = url;
        link.setAttribute('download', filename);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } catch (error) {
        return error;
    }
}

export const resetInvoice = () => async (dispatch) => {
    try {
        dispatch(reset_invoice());
    } catch (error) {
        return error;
    }
};