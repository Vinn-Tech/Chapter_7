import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  detailMovies: [],
};

const authDetailSlice = createSlice({
  name: "dataDetail",
  initialState,
  reducers: {
    setDetailMovies: (state, action) => {
      state.detailMovies = action.payload;
    },
  },
});

export const { setDetailMovies } = authDetailSlice.actions;

export default authDetailSlice.reducer;
