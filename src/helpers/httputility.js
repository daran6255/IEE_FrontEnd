import axios from 'axios';

// default
// axios.defaults.baseURL = process.env.REACT_APP_API_URL;
// content type
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.withCredentials = true;

axios.interceptors.response.use(
    function (response) {
        return response.data ? response.data : response;
    },
    async function (error) {
        let message;
        switch (error.response.status) {
            case 500:
                message = 'Internal Server Error';
                break;
            case 401:
                message = 'Invalid credentials';
                window.location.href = '/login';
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

    post = (url, data, axiosConfig, onUploadProgress = null) => {
        return axios.post(url, data, { ...axiosConfig, onUploadProgress: onUploadProgress });
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

export { HttpUtility };
