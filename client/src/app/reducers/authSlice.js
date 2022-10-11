import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from '../../api';

export const loginThunk = createAsyncThunk(
    'auth/login',
    async (userLoginData) => {
        try {
            const response = await api.login(userLoginData);
            console.log(response);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
);


const initialState = {
    userDetails: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(loginThunk.fulfilled, (state, action) => {
            state.userDetails = action.payload;
        })
    },
});

export default authSlice.reducer;