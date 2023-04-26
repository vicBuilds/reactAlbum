import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: {},
  intialKeyword: "Dark",
};

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
    changeKeyword: (state, { payload }) => {
      state.intialKeyword = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addMovies, changeKeyword } = movieSlice.actions;

export const getAllMovies = (state) => {
  return state.movies.movies;
};

export default movieSlice.reducer;
