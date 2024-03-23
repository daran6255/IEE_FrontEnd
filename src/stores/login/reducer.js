import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
    user: {},
    error: '', // for error message
    loading: false,
};

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        apiError(state, action) {
            state.error = action.payload.data;
            state.loading = true;
        },
        loginSuccess(state, action) {
            state.user = action.payload;
            state.loading = false;
        },
    },
});

export const { apiError, loginSuccess } =
    loginSlice.actions;

export default loginSlice.reducer;
