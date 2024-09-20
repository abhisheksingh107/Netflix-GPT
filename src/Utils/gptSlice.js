import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false,
        gptMovies: null,
        movieName: null,
        movieResults: null
    },
    reducers: {
        toggleGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addgptMovies: (state, actions) => {
            const {movieName, movieResults} = actions.payload;
            state.movieName = movieName;
            state.movieResults = movieResults;

        }
    },
});

export const{ toggleGptSearchView, addgptMovies } = gptSlice.actions
export default gptSlice.reducer;

