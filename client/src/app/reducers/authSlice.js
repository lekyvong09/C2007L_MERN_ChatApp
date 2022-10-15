import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from '../../api';
import {toast} from 'react-toastify';

export const loginThunk = createAsyncThunk(
    'auth/login',
    async (userLoginData, thunkAPI) => {
        try {
            const response = await api.login(userLoginData);

            if (response.error && response.exception.response.data) {
                console.log(response.exception.response.data.message);
                toast.error(response.exception.response.data.message, {theme: 'colored'});
            } else if (response.error && response.exception) {
                console.log(response.exception.message);
                toast.error(response.exception.message, {theme: 'colored'});
            } else if (response.error) {
                console.log(response);
            }
            
            localStorage.setItem('user', JSON.stringify(response.data));
            return response.data;
        } catch (error) {
            console.log(error);
            if (!error.response) {
                throw error;
            }
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const registerThunk = createAsyncThunk(
    'auth/register',
    async (userRegisterData, thunkAPI) => {
        try {
            const response = await api.register(userRegisterData);

            if (response.error && response.exception.response.data) {
                console.log(response.exception.response.data.message);
                toast.error(response.exception.response.data.message, {theme: 'colored'});
            } else if (response.error && response.exception) {
                console.log(response.exception.message);
                toast.error(response.exception.message, {theme: 'colored'});
            } else if (response.error) {
                console.log(response);
            }
            
            localStorage.setItem('user', JSON.stringify(response.data));
            return response.data;
        } catch (error) {
            console.log(error);
            if (!error.response) {
                throw error;
            }
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);


const initialState = {
    userDetails: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        logoutReducer: (state, action) => {
            state.userDetails = null;
            localStorage.clear();
            window.location.pathname = '/login';
        },
        setUserDetailsReducer: (state, action) => {
            state.userDetails = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loginThunk.fulfilled, (state, action) => {
            state.userDetails = action.payload;
        });

        builder.addCase(loginThunk.rejected, (state, action) => {
            if (action.payload) {
                console.log(action.payload);
            } else {
                console.log(action.error);
            }
        });


        builder.addCase(registerThunk.fulfilled, (state, action) => {
            state.userDetails = action.payload;
        });

        builder.addCase(registerThunk.rejected, (state, action) => {
            if (action.payload) {
                console.log(action.payload);
            } else {
                console.log(action.error);
            }
        });
    },
});

export const { logoutReducer, setUserDetailsReducer } = authSlice.actions;

export default authSlice.reducer;