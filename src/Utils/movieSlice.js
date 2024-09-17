import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    topRatedMovies: null,
    upComingMovies:null,
    trailerVideo: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state,action) => {
      state.topRatedMovies = action.payload;
    },
    addUpComming: (state,action) => {
      state.upComingMovies = action.payload;
    },
    addTrailervideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addTrailervideo, addPopularMovies, addTopRatedMovies, addUpComming } = movieSlice.actions;
export default movieSlice.reducer;
