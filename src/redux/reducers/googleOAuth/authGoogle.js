import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    tokenOAuth : undefined,
}

const authLoginOAuthSlice = createSlice({
    name : "loginOAuth",
    initialState,
    reducers :{
        setTokenOAuth : (state, action) => {
            state.token = action.payload
        },
    }

})

export const {setTokenOAuth} = authLoginOAuthSlice.actions

export default authLoginOAuthSlice.reducer