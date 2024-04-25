import axios from 'axios';
import { config } from '../config';

// default
axios.defaults.baseURL = config.IEE_BACKEND_URL;
// content type
axios.defaults.headers.post['Content-Type'] = 'application/json';

const userAuth = sessionStorage.getItem('userAuth');
const token = JSON.parse(userAuth) ? JSON.parse(userAuth).accessToken : null;
if (token) axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;

axios.interceptors.response.use(
    function (response) {
        return response.data ? response.data : response;
    },
    function (error) {
        let message;
        switch (error.status) {
            case 500:
                message = 'Internal Server Error';
                break;
            case 401:
                message = 'Invalid credentials';
                break;
            case 404:
                message =
                    'Sorry! the data you are looking for could not be found';
                break;
            default:
                message = error.message || error;
        }
        return Promise.reject(message);
    }
);

const setAuthorization = (newToken) => {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + newToken;
};

class HttpUtility {
    get = (url, params) => {
        let response;

        const paramKeys = [];

        if (params) {
            Object.keys(params).map((key) => {
                paramKeys.push(key + '=' + params[key]);
                return paramKeys;
            });

            const queryString =
                paramKeys && paramKeys.length ? paramKeys.join('&') : '';
            response = axios.get(`${url}?${queryString}`, params);
        } else {
            response = axios.get(`${url}`, params);
        }

        return response;
    };

    post = (url, data, axiosConfig) => {
        return axios.post(url, data, { ...axiosConfig });
    };

    update = (url, data) => {
        return axios.patch(url, data);
    };

    put = (url, data) => {
        return axios.put(url, data);
    };

    delete = (
        url,
        axiosConfig
    ) => {
        return axios.delete(url, { ...axiosConfig });
    };
}

const getLoggedinUser = () => {
    const user = sessionStorage.getItem('userAuth');
    if (!user) {
        return null;
    } else {
        return JSON.parse(user);
    }
};

export { HttpUtility, setAuthorization, getLoggedinUser };
