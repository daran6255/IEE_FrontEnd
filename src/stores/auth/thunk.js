import { toast } from 'react-toastify';

import {
    loginUser as loginUserApi,
    registerUser as registerUserApi,
} from '../../helpers/backend_helper';

import {
    apiError,
    loginStarted,
    registerStarted,
    loginSuccess,
    registerSuccess,
    logoutSuccess,
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
        toast.error(result, { autoClose: 3000 });
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

export const logoutUser = () => async (dispatch) => {
    try {
        sessionStorage.removeItem('userAuth');
        dispatch(logoutSuccess());
    } catch (error) {
        dispatch(apiError(error));
    }
};