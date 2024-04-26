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
export const loginUser = (data) =>
    http.post('/login', data);

export const registerUser = (data) =>
    http.post('/register', data);

export const verifyUser = (token) =>
    http.get('/verify_email/' + token);

export const updatePassword = (data) =>
    http.post('/update_password', data);

export const getCustomerData = () =>
    http.get('/get_customer_data');

export const getCustomers = () =>
    http.get('/get_customers',);

export const getCreditHistory = (userId) =>
    http.get('/credits_history/' + userId);

export const getDashboardStats = () =>
    http.get('/dashboard_stats');

export const addCredits = (data) =>
    http.post('/add_credits', data);

export const processInvoice = (data) =>
    http.post('/process_invoice', data, { headers: { 'Content-Type': 'multipart/form-data' } });

export const downloadExcel = (requestId) =>
    http.get('/download_excel/' + requestId, { responseType: 'blob' });

export const downloadJson = (requestId) =>
    http.get('/download_json/' + requestId, { responseType: 'blob' });