import {
    getLogin
} from '../../helpers/backend_helper';

import {
    loginSuccess,
    apiError,
} from './reducer';

export const loginUser = (user, history) => async (dispatch) => {
    try {
        let response = await getLogin({
            email: user.email,
            password: user.password,
        });

        if (response) {
            dispatch(loginSuccess(response));
            sessionStorage.setItem('userAuth', JSON.stringify(response));
            history('/dashboard');
        }
        else {
            dispatch(apiError('Login Failed'));
        }
    } catch (error) {
        dispatch(apiError(error));
    }
};

