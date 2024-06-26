import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo : localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')): null

}

const authSlice = createSlice({
    name : 'auth',
    initialState,
    reducers: {
        setCredentials : (state, action) => {
            state.userInfo = action.payload;
            localStorage.setItem('userInfo', JSON.stringify(action.payload));
        },
        //this is for the local storage clearing
        removeCredentials : (state,action) => {
            state.userInfo = null;
            localStorage.removeItem('userInfo');
        },
    }
});

export const{setCredentials} = authSlice.actions;
export const{removeCredentials} = authSlice.actions;
export default authSlice.reducer;
