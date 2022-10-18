import { createSlice } from "@reduxjs/toolkit";

interface ILoginState {
    isLoggedIn: boolean;
    userName: string | null;
    token: string | null;
}

const initialState:ILoginState = {
    isLoggedIn: false,
    userName: null,
    token: null,
} 

export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = true;
            state.userName = action.payload.userName;
            state.token = action.payload.token;
        }
    },
});

export const { login } = loginSlice.actions;

export default loginSlice.reducer;