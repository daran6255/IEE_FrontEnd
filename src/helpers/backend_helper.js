import { HttpUtility } from './httputility';

const http = new HttpUtility();

export const getLoggedInUser = () => {
    const user = localStorage.getItem('user');
    if (user) return JSON.parse(user);
    return null;
};

export const isUserAuthenticated = () => {
    return getLoggedInUser() !== null;
};

// APIs
export const getLogin = (data) =>
    http.post('/login', data);

export const processInvoice = (data) =>
    http.post('/process_invoice', data, { headers: { 'Content-Type': 'multipart/form-data' } });