import { toast } from 'react-toastify';

import {
    loginUser as loginUserApi,
    registerUser as registerUserApi,
    verifyUser as verifyUserApi,
    updatePassword as updatePasswordApi
} from '../../helpers/backend_helper';

import {
    apiError,
    loginStarted,
    registerStarted,
    loginSuccess,
    registerSuccess,
    logoutSuccess,
    verificationSuccess,
} from './reducer';

export const loginUser = (user, history) => async (dispatch) => {
    try {
        dispatch(loginStarted());

        let response = await loginUserApi({
            email: user.email,
            password: user.password,
        });

        const result = response.result;
        let message = 'Something went wrong';

        if (result) {
            if (response.status === 'success') {
                dispatch(loginSuccess(result));
                sessionStorage.setItem('userAuth', JSON.stringify(result));
                history('/dashboard');
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

export const registerUser = (user, history) => async (dispatch) => {
    try {
        dispatch(registerStarted());

        let response = await registerUserApi({
            name: user.name,
            role: user.role,
            company: user.company,
            email: user.email,
            phone: user.phone,
            password: user.password,
        });

        const result = response.result;
        let message = 'Something went wrong';

        if (result) {
            if (response.status === 'success') {
                dispatch(registerSuccess(result));
                toast.info(result, { autoClose: 10000 });
                history('/login');
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

export const verifyUser = (token) => async (dispatch) => {
    try {
        let response = await verifyUserApi(token);

        const result = response.result;
        let message = 'Something went wrong';

        if (result) {
            if (response.status === 'success') {
                dispatch(verificationSuccess());
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

export const changePassword = (email, oldPassword, newPassword) => async (dispatch) => {
    try {
        let response = await updatePasswordApi({
            email: email,
            oldPassword: oldPassword,
            newPassword: newPassword,
        });

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

        dispatch(apiError(message));
        toast.error(message, { autoClose: 3000 });
    } catch (error) {
        dispatch(apiError(error));
        toast.error(error, { autoClose: 3000 });
    }
};

export const updateUser = (user) => async (dispatch) => {
    try {
        dispatch(loginSuccess(user));
    } catch (error) {
        dispatch(apiError(error));
    }
};

export const logoutUser = () => async (dispatch) => {
    try {
        sessionStorage.removeItem('userAuth');
        dispatch(logoutSuccess());
    } catch (error) {
        dispatch(apiError(error));
    }
};