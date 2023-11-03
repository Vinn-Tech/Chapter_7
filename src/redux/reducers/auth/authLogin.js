import { createSlice } from "@reduxjs/toolkit"
// import { CookieKeys, CookieStorage } from "../../../utils/cookies"


const initialState = {
    token : undefined,
    isLogin : "",    
    User : ""
}

const authLoginSlice = createSlice({
    name : "loginAuth",
    initialState,
    reducers :{
        setToken : (state, action) => {
            state.token = action.payload
        },
            // state = { ...state , token : action.payload}        },
        setLoggedIn : (state, action) => {
            state.isLogin = { ...state.isLogin , isLogin : action.payload}
            //  state.isLogin = action.payload
        },
        setUser : (state, action) => {
            //  state = { ...state , User : action.payload}
             state.User = action.payload
        }
    }

})

export const {setToken, setLoggedIn, setUser} = authLoginSlice.actions

export default authLoginSlice.reducer