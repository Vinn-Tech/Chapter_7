import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchMovies: [],
};

const authSearchSlice = createSlice({
  name: "dataSearch",
  initialState,
  reducers: {
    setSearchMovies: (state, action) => {
      state.searchMovies = action.payload;
    },
  },
});

export const { setSearchMovies } = authSearchSlice.actions;

export default authSearchSlice.reducer;
