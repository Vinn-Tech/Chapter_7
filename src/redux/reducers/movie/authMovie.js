import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    movies : [],
    usedPage : 1,
}

const authMovieSlice = createSlice({
    name : "movieAuth",
    initialState,
    reducers :{
        setMovies : (state, action) => {
            state.movies = action.payload
        },

         setUsedPage : (state, action) => {
            state.usedPage = action.payload
        }
    }
})

export const { setMovies, setUsedPage } = authMovieSlice.actions

export default authMovieSlice.reducer