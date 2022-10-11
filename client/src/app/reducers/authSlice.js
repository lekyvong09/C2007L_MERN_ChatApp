import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from '../../api';

export const loginThunk = createAsyncThunk(
    'auth/login',
    async (userLoginData, thunkAPI) => {
        try {
            const response = await api.login(userLoginData);

            if (response.error && response.exception.response.data) {
                console.log(response.exception.response.data.message);
            } else if (response.error && response.exception) {
                console.log(response.exception.message);
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
    reducers:{},
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
    },
});

export default authSlice.reducer;