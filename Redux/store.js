import {configureStore} from '@reduxjs/toolkit';
import authReducer from './Features/authSlice.js'

export const store = configureStore({
    reducer:{
        auth: authReducer,
    }
});

export default store