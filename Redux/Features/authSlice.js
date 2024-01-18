import { createSlice } from "@reduxjs/toolkit";
import authService from "../../src/Appwrite/authService";

const initialState = {
    number: 3,
    status: false,
    userData: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        store_login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
        }, 
        store_logout: (state, action) => {
            state.status = false;
            state.userData = null;
        }
    }
})

export const { store_login, store_logout } = authSlice.actions;
export default authSlice.reducer;